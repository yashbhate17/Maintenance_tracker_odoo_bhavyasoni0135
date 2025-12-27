import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function AppShell({ children }) {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <Sidebar />
            <div style={{ flex: 1 }}>
                <TopBar />
                <div style={{ padding: "24px" }}>{children}</div>
            </div>
        </div>
    );
}
