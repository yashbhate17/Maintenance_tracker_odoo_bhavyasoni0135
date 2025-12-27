from sqlalchemy import Column, Integer, String, Date, ForeignKey
from app.database import Base
import enum

class Role(enum.Enum):
    employee = "employee"
    technician = "technician"
    admin = "admin"

class RequestStatus(enum.Enum):
    open = "open"
    in_progress = "in_progress"
    closed = "closed"

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    email = Column(String(100), unique=True)
    password = Column(String(255))
    role = Column(String(20))  # Changed from Enum to String

class MaintenanceTeam(Base):
    __tablename__ = "maintenance_teams"
    id = Column(Integer, primary_key=True)
    name = Column(String(100), unique=True)

class Equipment(Base):
    __tablename__ = "equipment"
    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    serial_number = Column(String(100), unique=True)
    purchase_date = Column(Date, nullable=True)
    warranty_expiry = Column(Date, nullable=True)
    location = Column(String(100))
    department = Column(String(100))
    assigned_employee = Column(String(100))
    maintenance_team_id = Column(Integer, ForeignKey("maintenance_teams.id"))

class MaintenanceRequest(Base):
    __tablename__ = "maintenance_requests"
    id = Column(Integer, primary_key=True)
    description = Column(String(255))
    equipment_id = Column(Integer, ForeignKey("equipment.id"))
    team_id = Column(Integer, ForeignKey("maintenance_teams.id"))
    technician_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    status = Column(String(20), default="open")  # Changed from Enum to String
