import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const rules = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[^A-Za-z0-9]/.test(password),
    };

    const isValidPassword = Object.values(rules).every(Boolean);

    const handleLogin = (e) => {
        e.preventDefault();
        if (!isValidPassword) return;

        setIsLoggedIn(true);
        navigate("/home", { replace: true });
    };

    const RuleItem = ({ valid, text }) => (
        <li className={`text-sm ${valid ? "text-green-400" : "text-red-400"}`}>
            {valid ? "✔" : "✖"} {text}
        </li>
    );

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-md bg-zinc-800 p-8 rounded-xl">
                <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 rounded bg-zinc-900 outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 rounded bg-zinc-900 outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <ul className="space-y-1 bg-zinc-900 p-3 rounded">
                        <RuleItem valid={rules.length} text="At least 8 characters" />
                        <RuleItem valid={rules.uppercase} text="One uppercase letter" />
                        <RuleItem valid={rules.lowercase} text="One lowercase letter" />
                        <RuleItem valid={rules.number} text="One number" />
                        <RuleItem valid={rules.special} text="One special character" />
                    </ul>

                    <button
                        type="submit"
                        disabled={!isValidPassword}
                        className={`w-full py-3 rounded font-bold transition ${isValidPassword
                                ? "bg-indigo-600 hover:bg-indigo-500"
                                : "bg-zinc-600 cursor-not-allowed"
                            }`}
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-zinc-400 mt-4">
                    New user?{" "}
                    <Link to="/register" className="text-indigo-400 hover:underline">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
