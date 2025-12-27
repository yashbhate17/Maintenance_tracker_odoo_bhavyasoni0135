export default function Requests() {
    return (
        <div>
            <h2>All Maintenance Requests</h2>

            <table style={{ width: "100%", marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Equipment</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Office Laptop</td>
                        <td>Corrective</td>
                        <td>In Progress</td>
                        <td>High</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
