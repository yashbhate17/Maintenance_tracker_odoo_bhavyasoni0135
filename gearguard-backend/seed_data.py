from app.database import SessionLocal, Base, engine
from app.models import User, MaintenanceTeam
from app.auth import hash_password

# Create all tables
print("Creating database tables...")
Base.metadata.create_all(bind=engine)
print("✓ Tables created")

db = SessionLocal()

def get_or_create_team(name: str):
    team = db.query(MaintenanceTeam).filter_by(name=name).first()
    if not team:
        team = MaintenanceTeam(name=name)
        db.add(team)
        db.commit()
        db.refresh(team)
        print(f"✓ Team created: {name}")
    else:
        print(f"• Team already exists: {name}")
    return team

def get_or_create_admin():
    admin = db.query(User).filter_by(email="admin@gg.com").first()
    if not admin:
        admin = User(
            name="Admin",
            email="admin@gg.com",
            password=hash_password("admin123"),
            role="ADMIN"   # ✅ FIXED ROLE
        )
        db.add(admin)
        db.commit()
        db.refresh(admin)
        print("✓ Admin user created")
    else:
        print("• Admin user already exists")
    return admin

try:
    print("Seeding data...")

    # Admin user
    get_or_create_admin()

    # Maintenance teams
    get_or_create_team("IT Support")
    get_or_create_team("Mechanical")

    print("\n✓ Database seeded successfully!")
    print("\nTest Account:")
    print("Email: admin@gg.com")
    print("Password: admin123")

except Exception as e:
    db.rollback()
    print(f"❌ Error seeding database: {e}")

finally:
    db.close()

