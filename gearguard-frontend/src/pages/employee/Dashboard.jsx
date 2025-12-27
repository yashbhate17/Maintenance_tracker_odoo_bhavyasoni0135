import StatCard from "../../components/cards/Statcard";

export default function Dashboard() {
    return (
        <div>
            <h2>Employee Dashboard</h2>

            <div style={{ display: "flex", gap: "16px", marginTop: "20px" }}>
                <StatCard label="My Requests" value="--" />
                <StatCard label="Open Requests" value="--" />
                <StatCard label="Completed Requests" value="--" />
            </div>
        </div>
    );
}
