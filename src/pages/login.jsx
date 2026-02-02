import { Link, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Later: login logic
        navigate("/home");
    };

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-md bg-zinc-800 p-8 rounded-xl">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Login
                </h1>

                <form onSubmit={handleLogin} className="space-y-4">
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
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded font-bold"
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

export default Login