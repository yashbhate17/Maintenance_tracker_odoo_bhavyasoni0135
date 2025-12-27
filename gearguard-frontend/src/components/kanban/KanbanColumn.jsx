export default function KanbanColumn({ status, requests }) {
    return (
        <div>
            <h4>{status}</h4>
            {requests.filter(r => r.status === status).map(r => (
                <div key={r.id}>{r.title}</div>
            ))}
        </div>
    );
}
