import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div style={{ width: "220px", padding: "20px", borderRight: "1px solid #eee" }}>
            <h3>GearGuard</h3>

            <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <Link to="/admin/dashboard">Dashboard</Link>
                <Link to="/admin/equipment">Equipment</Link>
                <Link to="/admin/teams">Teams</Link>
                <Link to="/admin/users">Users</Link>
                <Link to="/admin/requests">Requests</Link>
                <Link to="/admin/reports">Reports</Link>
            </nav>
        </div>
    );
}
