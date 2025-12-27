"""
Test MySQL connection and database setup
"""
import pymysql
import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
print(f"Database URL: {DATABASE_URL}")

# Parse connection details
# Format: mysql+pymysql://root:Yash@SQl@localhost:3306/gearguard_db
try:
    # Extract connection details
    parts = DATABASE_URL.replace("mysql+pymysql://", "").split("@")
    user_pass = parts[0].split(":")
    host_db = parts[1].split("/")
    host_port = host_db[0].split(":")
    
    user = user_pass[0]
    password = user_pass[1]
    host = host_port[0]
    port = int(host_port[1])
    database = host_db[1]
    
    print(f"\nConnection details:")
    print(f"Host: {host}:{port}")
    print(f"User: {user}")
    print(f"Database: {database}")
    
    # Try to connect
    print("\nAttempting to connect to MySQL...")
    connection = pymysql.connect(
        host=host,
        port=port,
        user=user,
        password=password
    )
    print("✓ Connected to MySQL server successfully!")
    
    # Create database if it doesn't exist
    cursor = connection.cursor()
    cursor.execute(f"CREATE DATABASE IF NOT EXISTS {database}")
    print(f"✓ Database '{database}' created/verified")
    
    cursor.close()
    connection.close()
    print("\n✓ All checks passed! Database is ready.")
    
except Exception as e:
    print(f"\n✗ Error: {e}")
    print("\nPlease check:")
    print("1. MySQL server is running")
    print("2. Credentials in .env file are correct")
    print("3. MySQL port 3306 is accessible")
