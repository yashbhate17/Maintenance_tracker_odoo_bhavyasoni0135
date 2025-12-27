from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import Equipment

router = APIRouter(prefix="/equipment", tags=["Equipment"])

@router.post("/")
def create_equipment(data: dict, db: Session = Depends(get_db)):
    equipment = Equipment(
        name=data["name"],
        serial_number=data["serial_number"],
        department=data["department"],
        location=data["location"],
        warranty_expiry=data.get("warranty_expiry"),
        maintenance_team_id=data["maintenance_team_id"]
    )
    db.add(equipment)
    db.commit()
    db.refresh(equipment)
    return {"message": "Equipment created", "equipment_id": equipment.id}
