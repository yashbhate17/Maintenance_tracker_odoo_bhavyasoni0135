export default function EquipmentTable({ data }) {
    return (
        <table>
            <tbody>
                {data.map(e => (
                    <tr key={e.id}>
                        <td>{e.name}</td>
                        <td>{e.serial}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
