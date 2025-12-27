export default function Equipment() {
    return (
        <div>
            <h2>Equipment Management</h2>

            <table style={{ width: "100%", marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Serial No</th>
                        <th>Department</th>
                        <th>Location</th>
                        <th>Warranty</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Office Laptop</td>
                        <td>LAP-001</td>
                        <td>IT</td>
                        <td>HQ</td>
                        <td>Active</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
