from fastapi import FastAPI
from app.database import Base, engine
from app.routes import auth, equipment, teams, requests

Base.metadata.create_all(bind=engine)

app = FastAPI(title="GearGuard Backend")

app.include_router(auth.router)
app.include_router(equipment.router)
app.include_router(teams.router)
app.include_router(requests.router)

@app.get("/")
def root():
    return {"message": "GearGuard API running"}
