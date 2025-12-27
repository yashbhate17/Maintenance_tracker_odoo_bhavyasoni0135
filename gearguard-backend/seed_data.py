from app.database import SessionLocal, Base, engine
from app.models import User, MaintenanceTeam
from app.auth import hash_password

# Create all tables
print("Creating database tables...")
Base.metadata.create_all(bind=engine)
print("✓ Tables created")

db = SessionLocal()

try:
    print("Seeding data...")
    
    admin = User(
        name="Admin",
        email="admin@gg.com",
        password=hash_password("admin123"),
        role="admin"  # Changed to string
    )
    
    db.add(admin)
    db.add(MaintenanceTeam(name="IT Support"))
    db.add(MaintenanceTeam(name="Mechanical"))
    db.commit()
    
    print("✓ Database seeded successfully!")
    print("\nTest Account:")
    print("Email: admin@gg.com")
    print("Password: admin123")
    
except Exception as e:
    print(f"Error seeding database: {e}")
    db.rollback()
finally:
    db.close()
