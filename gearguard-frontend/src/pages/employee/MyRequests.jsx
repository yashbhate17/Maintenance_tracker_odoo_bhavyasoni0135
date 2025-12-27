export default function MyRequests() {
    return (
        <div>
            <h2>My Maintenance Requests</h2>

            <table style={{ width: "100%", marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Equipment</th>
                        <th>Status</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Laptop</td>
                        <td>In Progress</td>
                        <td>High</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
