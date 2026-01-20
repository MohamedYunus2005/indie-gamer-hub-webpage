import { Link, useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        // Later: API call
        // After successful register → go to login
        navigate("/login");
    };

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
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded font-bold"
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
