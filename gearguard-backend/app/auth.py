from passlib.context import CryptContext
from fastapi import HTTPException

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str):
    return pwd_context.hash(password)

def verify_password(password, hashed):
    return pwd_context.verify(password, hashed)

def role_required(user_role, allowed):
    if user_role not in allowed:
        raise HTTPException(status_code=403, detail="Access denied")
