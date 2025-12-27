import KanbanColumn from "./KanbanColumn";

export default function KanbanBoard({ requests }) {
    return (
        <div style={{ display: "flex", gap: 10 }}>
            {["NEW", "IN_PROGRESS", "REPAIRED"].map(s => (
                <KanbanColumn key={s} status={s} requests={requests} />
            ))}
        </div>
    );
}
