from fastapi import FastAPI
from app.routes import equipment, teams, users, requests

app = FastAPI()

app.include_router(equipment.router)
app.include_router(teams.router)
app.include_router(users.router)
app.include_router(requests.router)

@app.get("/")
def root():
    return {"message": "GearGuard API running"}
