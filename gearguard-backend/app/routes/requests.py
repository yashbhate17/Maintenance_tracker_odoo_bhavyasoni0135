from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import MaintenanceRequest, Equipment
from app.schemas import RequestCreate

router = APIRouter(prefix="/requests", tags=["Requests"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
def raise_request(data: RequestCreate, db: Session = Depends(get_db)):
    eq = db.query(Equipment).filter(Equipment.id == data.equipment_id).first()
    if not eq:
        return {"error": "Equipment not found"}
    req = MaintenanceRequest(
        description=data.description,
        equipment_id=data.equipment_id,
        team_id=eq.maintenance_team_id,
        status="open"  # Changed to string
    )
    db.add(req)
    db.commit()
    return {"message": "Request raised"}

@router.put("/{request_id}/assign/{technician_id}")
def assign(request_id: int, technician_id: int, db: Session = Depends(get_db)):
    req = db.query(MaintenanceRequest).filter(MaintenanceRequest.id == request_id).first()
    if not req:
        return {"error": "Request not found"}
    req.technician_id = technician_id
    req.status = "in_progress"  # Changed to string
    db.commit()
    return {"message": "Technician assigned"}

@router.put("/{request_id}/close")
def close(request_id: int, db: Session = Depends(get_db)):
    req = db.query(MaintenanceRequest).filter(MaintenanceRequest.id == request_id).first()
    if not req:
        return {"error": "Request not found"}
    req.status = "closed"  # Changed to string
    db.commit()
    return {"message": "Request closed"}
