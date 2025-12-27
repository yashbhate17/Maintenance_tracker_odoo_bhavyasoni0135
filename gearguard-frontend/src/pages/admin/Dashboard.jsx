"use client"

import { useState } from "react"

export default function AdminDashboard({ user, onLogout, onBack }) {
    const [activeTab, setActiveTab] = useState("overview")
    const [showEquipmentForm, setShowEquipmentForm] = useState(false)
    const [showUserForm, setShowUserForm] = useState(false)
    const [equipmentList, setEquipmentList] = useState([
        {
            id: 1,
            name: "Hydraulic Pump",
            serialNumber: "HP-2024-001",
            category: "Machine",
            department: "Production",
            location: "Building A",
            warranty: "Active",
            team: "Mechanics",
        },
        {
            id: 2,
            name: "Air Compressor",
            serialNumber: "AC-2024-002",
            category: "Machine",
            department: "Production",
            location: "Building B",
            warranty: "Active",
            team: "Mechanics",
        },
    ])

    const [teams, setTeams] = useState([
        { id: 1, name: "Mechanics", specialization: "Industrial Equipment", members: 5 },
        { id: 2, name: "Electricians", specialization: "Electrical Systems", members: 3 },
        { id: 3, name: "IT Support", specialization: "IT Assets", members: 4 },
    ])

    const [users, setUsers] = useState([
        { id: 1, name: "John Employee", email: "john@company.com", role: "EMPLOYEE", department: "Production" },
        {
            id: 2,
            name: "Mike Technician",
            email: "mike@company.com",
            role: "TECHNICIAN",
            department: "Maintenance",
            team: "Mechanics",
        },
    ])

    const handleAddEquipment = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const newEquipment = {
            id: equipmentList.length + 1,
            name: formData.get("name"),
            serialNumber: formData.get("serialNumber"),
            category: formData.get("category"),
            department: formData.get("department"),
            location: formData.get("location"),
            warranty: formData.get("warranty"),
            team: formData.get("team"),
        }
        setEquipmentList([...equipmentList, newEquipment])
        setShowEquipmentForm(false)
        e.target.reset()
    }

    const handleAddUser = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const newUser = {
            id: users.length + 1,
            name: formData.get("name"),
            email: formData.get("email"),
            role: formData.get("role"),
            department: formData.get("department"),
            team: formData.get("team"),
        }
        setUsers([...users, newUser])
        setShowUserForm(false)
        e.target.reset()
    }

    const stats = [
        { label: "Total Equipment", value: "247", icon: "📦" },
        { label: "Active Teams", value: "3", icon: "👥" },
        { label: "Total Users", value: "24", icon: "👤" },
        { label: "Pending Requests", value: "12", icon: "⏳" },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-xl">
                <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
                        <p className="text-blue-100">System Management & Configuration</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={onBack}
                            className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                        >
                            Back
                        </button>
                        <button
                            onClick={onLogout}
                            className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* Tabs */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex gap-8">
                        {["overview", "equipment", "teams", "users", "reports"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`py-4 px-2 font-semibold border-b-2 transition-colors ${activeTab === tab
                                        ? "border-blue-600 text-blue-600"
                                        : "border-transparent text-gray-600 hover:text-blue-600"
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}
            <main className="max-w-7xl mx-auto px-6 py-12">
                {/* Overview Tab */}
                {activeTab === "overview" && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">System Overview</h2>
                        <div className="grid md:grid-cols-4 gap-6 mb-12">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                                    <div className="text-4xl mb-4">{stat.icon}</div>
                                    <p className="text-gray-600 text-sm font-semibold mb-1">{stat.label}</p>
                                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">System Status</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                    <div>
                                        <p className="font-semibold text-gray-900">Database Status</p>
                                        <p className="text-sm text-gray-600">System database</p>
                                    </div>
                                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">
                                        Operational
                                    </span>
                                </div>
                                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                    <div>
                                        <p className="font-semibold text-gray-900">API Service</p>
                                        <p className="text-sm text-gray-600">Request handling</p>
                                    </div>
                                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">
                                        Operational
                                    </span>
                                </div>
                                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                    <div>
                                        <p className="font-semibold text-gray-900">Notification System</p>
                                        <p className="text-sm text-gray-600">Alert delivery</p>
                                    </div>
                                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">
                                        Operational
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Equipment Tab */}
                {activeTab === "equipment" && (
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-gray-900">Equipment Management</h2>
                            <button
                                onClick={() => setShowEquipmentForm(!showEquipmentForm)}
                                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                            >
                                + Add Equipment
                            </button>
                        </div>

                        {showEquipmentForm && (
                            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Create New Equipment</h3>
                                <form onSubmit={handleAddEquipment} className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Equipment Name"
                                            className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="serialNumber"
                                            placeholder="Serial Number"
                                            className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                                            required
                                        />
                                        <select
                                            name="category"
                                            className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                                            required
                                        >
                                            <option>Select Category</option>
                                            <option>Machine</option>
                                            <option>Vehicle</option>
                                            <option>IT Asset</option>
                                        </select>
                                        <select
                                            name="department"
                                            className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                                            required
                                        >
                                            <option>Select Department</option>
                                            <option>Production</option>
                                            <option>IT</option>
                                            <option>HR</option>
                                        </select>
                                        <input
                                            type="text"
                                            name="location"
                                            placeholder="Location"
                                            className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                                            required
                                        />
                                        <select
                                            name="team"
                                            className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                                            required
                                        >
                                            <option>Select Team</option>
                                            <option>Mechanics</option>
                                            <option>Electricians</option>
                                            <option>IT Support</option>
                                        </select>
                                    </div>
                                    <div className="flex gap-4">
                                        <button
                                            type="submit"
                                            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg"
                                        >
                                            Save Equipment
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowEquipmentForm(false)}
                                            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Equipment List</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b-2 border-gray-300">
                                            <th className="px-4 py-3 text-left font-semibold text-gray-700">Name</th>
                                            <th className="px-4 py-3 text-left font-semibold text-gray-700">Serial #</th>
                                            <th className="px-4 py-3 text-left font-semibold text-gray-700">Category</th>
                                            <th className="px-4 py-3 text-left font-semibold text-gray-700">Department</th>
                                            <th className="px-4 py-3 text-left font-semibold text-gray-700">Location</th>
                                            <th className="px-4 py-3 text-left font-semibold text-gray-700">Team</th>
                                            <th className="px-4 py-3 text-left font-semibold text-gray-700">Warranty</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {equipmentList.map((item) => (
                                            <tr key={item.id} className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                                                <td className="px-4 py-3 font-semibold text-gray-900">{item.name}</td>
                                                <td className="px-4 py-3 text-gray-700">{item.serialNumber}</td>
                                                <td className="px-4 py-3 text-gray-700">{item.category}</td>
                                                <td className="px-4 py-3 text-gray-700">{item.department}</td>
                                                <td className="px-4 py-3 text-gray-700">{item.location}</td>
                                                <td className="px-4 py-3 text-gray-700">{item.team}</td>
                                                <td className="px-4 py-3">
                                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                                                        {item.warranty}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* Teams Tab */}
                {activeTab === "teams" && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Team Management</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {teams.map((team) => (
                                <div key={team.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold text-gray-900">{team.name}</h3>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                                            {team.members} Members
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-4">{team.specialization}</p>
                                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                                        Manage Team
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Users Tab */}
                {activeTab === "users" && (
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
                            <button
                                onClick={() => setShowUserForm(!showUserForm)}
                                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                            >
                                + Add User
                            </button>
                        </div>

                        {showUserForm && (
                            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Create New User</h3>
                                <form onSubmit={handleAddUser} className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                                            required
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                                            required
                                        />
                                        <select
                                            name="role"
                                            className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                                            required
                                        >
                                            <option>Select Role</option>
                                            <option>EMPLOYEE</option>
                                            <option>TECHNICIAN</option>
                                            <option>ADMIN</option>
                                        </select>
                                        <select
                                            name="department"
                                            className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                                            required
                                        >
                                            <option>Select Department</option>
                                            <option>Production</option>
                                            <option>Maintenance</option>
                                            <option>IT</option>
                                        </select>
                                    </div>
                                    <div className="flex gap-4">
                                        <button
                                            type="submit"
                                            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg"
                                        >
                                            Create User
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowUserForm(false)}
                                            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">User List</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b-2 border-gray-300">
                                            <th className="px-4 py-3 text-left font-semibold text-gray-700">Name</th>
                                            <th className="px-4 py-3 text-left font-semibold text-gray-700">Email</th>
                                            <th className="px-4 py-3 text-left font-semibold text-gray-700">Role</th>
                                            <th className="px-4 py-3 text-left font-semibold text-gray-700">Department</th>
                                            <th className="px-4 py-3 text-left font-semibold text-gray-700">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user) => (
                                            <tr key={user.id} className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                                                <td className="px-4 py-3 font-semibold text-gray-900">{user.name}</td>
                                                <td className="px-4 py-3 text-gray-700">{user.email}</td>
                                                <td className="px-4 py-3">
                                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                                                        {user.role}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3 text-gray-700">{user.department}</td>
                                                <td className="px-4 py-3">
                                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                                                        Active
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* Reports Tab */}
                {activeTab === "reports" && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">System Reports</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Requests by Status</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-700">New</span>
                                        <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2 overflow-hidden">
                                            <div className="bg-yellow-500 h-full" style={{ width: "25%" }}></div>
                                        </div>
                                        <span className="font-bold text-gray-900">42</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-700">In Progress</span>
                                        <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2 overflow-hidden">
                                            <div className="bg-blue-500 h-full" style={{ width: "45%" }}></div>
                                        </div>
                                        <span className="font-bold text-gray-900">76</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-700">Completed</span>
                                        <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2 overflow-hidden">
                                            <div className="bg-green-500 h-full" style={{ width: "65%" }}></div>
                                        </div>
                                        <span className="font-bold text-gray-900">110</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Equipment by Category</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                                        <span className="font-semibold text-gray-900">Machines</span>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">156</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                                        <span className="font-semibold text-gray-900">Vehicles</span>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">48</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                                        <span className="font-semibold text-gray-900">IT Assets</span>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">43</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}