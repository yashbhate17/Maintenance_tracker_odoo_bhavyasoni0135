export default function StatCard({ label, value }) {
    return (
        <div
            style={{
                padding: "20px",
                borderRadius: "12px",
                background: "#fff",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                minWidth: "180px"
            }}
        >
            <h4 style={{ margin: 0, color: "#666" }}>{label}</h4>
            <h2 style={{ marginTop: "10px" }}>{value}</h2>
        </div>
    );
}

