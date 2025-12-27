export default function RequestCard({ req }) {
    return (
        <div style={{ border: "1px solid #ccc", padding: 10 }}>
            {req.title} — {req.status}
        </div>
    );
}
