import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await api.post("/auth/login", { email, password });
            const role = res.data.role;

            // Store auth data
            localStorage.setItem("role", role);
            localStorage.setItem("user", JSON.stringify(res.data));

            // Navigate based on role
            if (role === "employee") navigate("/employee");
            else if (role === "technician") navigate("/technician");
            else if (role === "admin") navigate("/admin");
            else {
                setError("Invalid role received from server");
            }
        } catch (err) {
            console.error("Login error:", err);
            if (err.response?.status === 401) {
                setError("Invalid email or password");
            } else if (err.response?.data?.detail) {
                setError(err.response.data.detail);
            } else {
                setError("Login failed. Please check your connection and try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            background: 'var(--bg-gradient-subtle)',
            padding: 'var(--space-4)'
        }}>
            <div className="card" style={{
                maxWidth: '400px',
                width: '100%',
                padding: 'var(--space-8)',
                boxShadow: 'var(--shadow-xl)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
                    <h1 style={{
                        fontSize: 'var(--text-3xl)',
                        fontWeight: 'var(--font-bold)',
                        color: 'var(--primary-600)',
                        marginBottom: 'var(--space-2)'
                    }}>
                        🔧 GearGuard
                    </h1>
                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: 'var(--text-sm)'
                    }}>
                        Sign in to your account
                    </p>
                </div>

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                    {error && (
                        <div style={{
                            padding: 'var(--space-4)',
                            background: 'var(--error-light)',
                            color: 'var(--error)',
                            borderRadius: 'var(--radius-md)',
                            fontSize: 'var(--text-sm)',
                            border: '1px solid var(--error)'
                        }}>
                            {error}
                        </div>
                    )}

                    <div>
                        <label style={{
                            display: 'block',
                            marginBottom: 'var(--space-2)',
                            fontSize: 'var(--text-sm)',
                            fontWeight: 'var(--font-medium)',
                            color: 'var(--text-primary)'
                        }}>
                            Email
                        </label>
                        <input
                            type="email"
                            className="input"
                            placeholder="admin@gg.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            disabled={loading}
                            autoComplete="email"
                        />
                    </div>

                    <div>
                        <label style={{
                            display: 'block',
                            marginBottom: 'var(--space-2)',
                            fontSize: 'var(--text-sm)',
                            fontWeight: 'var(--font-medium)',
                            color: 'var(--text-primary)'
                        }}>
                            Password
                        </label>
                        <input
                            type="password"
                            className="input"
                            placeholder="Enter your password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            disabled={loading}
                            autoComplete="current-password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                        style={{
                            width: '100%',
                            padding: 'var(--space-4)',
                            fontSize: 'var(--text-base)',
                            marginTop: 'var(--space-2)'
                        }}
                    >
                        {loading ? (
                            <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                                <span className="loading"></span>
                                Signing in...
                            </span>
                        ) : (
                            "Sign in"
                        )}
                    </button>
                </form>

                <div style={{
                    marginTop: 'var(--space-6)',
                    padding: 'var(--space-4)',
                    background: 'var(--info-light)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--text-secondary)'
                }}>
                    <strong style={{ display: 'block', marginBottom: 'var(--space-1)', color: 'var(--text-primary)' }}>
                        Test Credentials:
                    </strong>
                    <div>Email: admin@gg.com</div>
                    <div>Password: admin123</div>
                </div>
            </div>
        </div>
    );
}
