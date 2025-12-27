export default function RequestTable({ data }) {
    return (
        <ul>
            {data.map(r => (
                <li key={r.id}>{r.title}</li>
            ))}
        </ul>
    );
}
