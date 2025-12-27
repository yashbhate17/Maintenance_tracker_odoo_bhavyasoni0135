from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import MaintenanceTeam
from app.schemas import TeamCreate

router = APIRouter(prefix="/teams", tags=["Teams"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
def create_team(data: TeamCreate, db: Session = Depends(get_db)):
    team = MaintenanceTeam(name=data.name)
    db.add(team)
    db.commit()
    return {"message": "Team created"}
