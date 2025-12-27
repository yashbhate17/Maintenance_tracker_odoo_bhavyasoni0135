export default function EquipmentCard({ eq }) {
    return (
        <div style={{ border: "1px solid #ddd", padding: 10 }}>
            <strong>{eq.name}</strong>
            <div>{eq.serial}</div>
        </div>
    );
}
