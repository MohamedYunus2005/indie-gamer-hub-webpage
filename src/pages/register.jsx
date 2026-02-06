import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register({ setIsRegistered }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
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

    const handleRegister = (e) => {
        e.preventDefault();
        if (!isValidPassword) return;

        setIsRegistered(true);
        navigate("/login", { replace: true });
    };

    const RuleItem = ({ valid, text }) => (
        <p className={`text-sm flex items-center gap-2 ${valid ? "text-neon-cyan drop-shadow-glow-cyan" : "text-zinc-500"}`}>
            <span>{valid ? "✔" : "○"}</span> {text}
        </p>
    );

    return (
        <div className="flex min-h-screen items-center justify-center relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute w-[500px] h-[500px] bg-neon-cyan/10 blur-[100px] rounded-full -z-10" />

            <div className="w-full max-w-md bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <h1 className="text-4xl font-black mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan drop-shadow-glow">
                    INITIATE
                </h1>

                <form onSubmit={handleRegister} className="space-y-6">
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full p-4 rounded-lg bg-black/60 border border-white/10 focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,229,255,0.3)] outline-none text-white transition-all placeholder:text-zinc-600"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-4 rounded-lg bg-black/60 border border-white/10 focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,229,255,0.3)] outline-none text-white transition-all placeholder:text-zinc-600"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-4 rounded-lg bg-black/60 border border-white/10 focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,229,255,0.3)] outline-none text-white transition-all placeholder:text-zinc-600"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="bg-black/20 p-4 rounded-lg border border-white/5 space-y-1">
                        <RuleItem valid={rules.length} text="At least 8 characters" />
                        <RuleItem valid={rules.uppercase} text="One uppercase letter" />
                        <RuleItem valid={rules.lowercase} text="One lowercase letter" />
                        <RuleItem valid={rules.number} text="One number" />
                        <RuleItem valid={rules.special} text="One special character" />
                    </div>

                    <button
                        type="submit"
                        disabled={!isValidPassword}
                        className={`w-full py-4 rounded-lg font-bold tracking-widest uppercase transition-all duration-300 ${isValidPassword
                            ? "bg-neon-cyan text-black hover:bg-neon-purple hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                            : "bg-zinc-800 text-zinc-500 cursor-not-allowed border border-white/5"
                            }`}
                    >
                        Create Account
                    </button>
                </form>

                <p className="text-center text-zinc-500 mt-6 text-sm">
                    Already registered?{" "}
                    <Link to="/login" className="text-neon-cyan hover:text-white hover:underline transition-colors">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
