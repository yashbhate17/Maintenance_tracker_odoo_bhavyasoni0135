import StatCard from "../../components/cards/Statcard";

export default function Dashboard() {
    return (
        <div>
            <h2>Technician Dashboard</h2>

            <div style={{ display: "flex", gap: "16px", marginTop: "20px" }}>
                <StatCard label="Assigned Tasks" value="--" />
                <StatCard label="In Progress" value="--" />
                <StatCard label="Completed Today" value="--" />
            </div>
        </div>
    );
}
