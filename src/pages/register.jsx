import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");

    const rules = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[^A-Za-z0-9]/.test(password),
    };

    const isValidPassword = Object.values(rules).every(Boolean);

    const handleRegister = (e) => {
        e.preventDefault();
        if (!isValidPassword) return;

        // Later: API call
        navigate("/login");
    };

    const RuleItem = ({ valid, text }) => (
        <p className={`text-sm ${valid ? "text-green-400" : "text-zinc-400"}`}>
            {valid ? "✔" : "•"} {text}
        </p>
    );

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-md bg-zinc-800 p-8 rounded-xl">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Create Account
                </h1>

                <form onSubmit={handleRegister} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full p-3 rounded bg-zinc-900 outline-none"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 rounded bg-zinc-900 outline-none"
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

                    {/* PASSWORD RULES */}
                    <div className="bg-zinc-900 p-3 rounded space-y-1">
                        <RuleItem valid={rules.length} text="At least 8 characters" />
                        <RuleItem valid={rules.uppercase} text="One uppercase letter" />
                        <RuleItem valid={rules.lowercase} text="One lowercase letter" />
                        <RuleItem valid={rules.number} text="One number" />
                        <RuleItem valid={rules.special} text="One special character" />
                    </div>

                    <button
                        type="submit"
                        disabled={!isValidPassword}
                        className={`w-full py-3 rounded font-bold transition
                            ${isValidPassword
                                ? "bg-indigo-600 hover:bg-indigo-500"
                                : "bg-zinc-600 cursor-not-allowed"
                            }`}
                    >
                        Register
                    </button>
                </form>

                <p className="text-center text-zinc-400 mt-4">
                    Already registered?{" "}
                    <Link to="/login" className="text-indigo-400 hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
