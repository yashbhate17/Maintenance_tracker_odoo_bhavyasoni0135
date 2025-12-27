from pydantic import BaseModel
from datetime import date
from typing import Optional

class LoginSchema(BaseModel):
    email: str
    password: str

class EquipmentCreate(BaseModel):
    name: str
    serial_number: str
    purchase_date: Optional[date]
    warranty_expiry: Optional[date]
    location: str
    department: str
    assigned_employee: str
    maintenance_team_id: int

class TeamCreate(BaseModel):
    name: str

class RequestCreate(BaseModel):
    equipment_id: int
    description: str
