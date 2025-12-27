from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import MaintenanceTeam

router = APIRouter(prefix="/teams", tags=["Teams"])

@router.post("/")
def create_team(data: dict, db: Session = Depends(get_db)):
    team = MaintenanceTeam(name=data["name"])
    db.add(team)
    db.commit()
    db.refresh(team)
    return {"message": "Team created", "team_id": team.id}
