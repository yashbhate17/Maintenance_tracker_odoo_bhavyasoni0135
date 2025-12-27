from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import MaintenanceRequest

router = APIRouter(prefix="/requests", tags=["Requests"])

@router.post("/")
def create_request(data: dict, db: Session = Depends(get_db)):
    request = MaintenanceRequest(
        title=data["title"],
        description=data["description"],
        priority=data["priority"],
        type=data["type"],
        equipment_id=data["equipment_id"],
        requested_by=data["requested_by"],
        maintenance_team_id=data["maintenance_team_id"],
        status="NEW"
    )
    db.add(request)
    db.commit()
    db.refresh(request)
    return {"message": "Request created", "request_id": request.id}

@router.patch("/{request_id}")
def update_request(request_id: int, data: dict, db: Session = Depends(get_db)):
    request = db.query(MaintenanceRequest).get(request_id)

    if not request:
        return {"error": "Request not found"}

    request.status = data.get("status", request.status)
    request.work_notes = data.get("work_notes", request.work_notes)
    request.hours_spent = data.get("hours_spent", request.hours_spent)

    db.commit()
    return {"message": "Request updated"}
