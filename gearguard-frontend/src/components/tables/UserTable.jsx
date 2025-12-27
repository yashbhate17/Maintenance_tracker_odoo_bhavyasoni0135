export default function UserTable({ users }) {
    return (
        <ul>
            {users.map(u => (
                <li key={u.id}>{u.email}</li>
            ))}
        </ul>
    );
}
