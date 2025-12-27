import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AppShell from "./layout/AppShell";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import AdminEquipment from "./pages/admin/Equipment";
import AdminTeams from "./pages/admin/Teams";
import AdminUsers from "./pages/admin/Users";
import AdminRequests from "./pages/admin/Requests";
import AdminReports from "./pages/admin/Reports";

// Employee Pages
import EmployeeDashboard from "./pages/employee/Dashboard";
import EmployeeMyEquipment from "./pages/employee/MyEquipment";
import EmployeeMyRequests from "./pages/employee/MyRequests";
import EmployeeRequestDetail from "./pages/employee/RequestDetail";

// Technician Pages
import TechnicianDashboard from "./pages/technician/Dashboard";
import TechnicianKanban from "./pages/technician/Kanban";
import TechnicianCalendar from "./pages/technician/Calendar";
import TechnicianRequestDetail from "./pages/technician/RequestDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AppShell><AdminDashboard /></AppShell>} />
      <Route path="/admin/equipment" element={<AppShell><AdminEquipment /></AppShell>} />
      <Route path="/admin/teams" element={<AppShell><AdminTeams /></AppShell>} />
      <Route path="/admin/users" element={<AppShell><AdminUsers /></AppShell>} />
      <Route path="/admin/requests" element={<AppShell><AdminRequests /></AppShell>} />
      <Route path="/admin/reports" element={<AppShell><AdminReports /></AppShell>} />

      {/* Employee Routes */}
      <Route path="/employee" element={<AppShell><EmployeeDashboard /></AppShell>} />
      <Route path="/employee/equipment" element={<AppShell><EmployeeMyEquipment /></AppShell>} />
      <Route path="/employee/requests" element={<AppShell><EmployeeMyRequests /></AppShell>} />
      <Route path="/employee/requests/:id" element={<AppShell><EmployeeRequestDetail /></AppShell>} />

      {/* Technician Routes */}
      <Route path="/technician" element={<AppShell><TechnicianDashboard /></AppShell>} />
      <Route path="/technician/kanban" element={<AppShell><TechnicianKanban /></AppShell>} />
      <Route path="/technician/calendar" element={<AppShell><TechnicianCalendar /></AppShell>} />
      <Route path="/technician/requests/:id" element={<AppShell><TechnicianRequestDetail /></AppShell>} />
    </Routes>
  );
}
