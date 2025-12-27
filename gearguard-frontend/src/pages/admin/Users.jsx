export default function Users() {
    return (
        <div>
            <h2>User Management</h2>

            <table style={{ width: "100%", marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Admin</td>
                        <td>admin@gg.com</td>
                        <td>ADMIN</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
