from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import Equipment
from app.schemas import EquipmentCreate

router = APIRouter(prefix="/equipment", tags=["Equipment"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
def add_equipment(data: EquipmentCreate, db: Session = Depends(get_db)):
    eq = Equipment(**data.dict())
    db.add(eq)
    db.commit()
    return {"message": "Equipment added"}
