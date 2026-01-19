import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-zinc-950 border-b border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link
                    to="/"
                    className="text-xl font-bold tracking-wide text-purple-400"
                >
                    Indie Gamer Hub 🎮
                </Link>

                <div className="flex gap-6 text-sm font-medium">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-purple-400"
                                : "text-zinc-300 hover:text-white"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/games"
                        className={({ isActive }) =>
                            isActive
                                ? "text-purple-400"
                                : "text-zinc-300 hover:text-white"
                        }
                    >
                        Games
                    </NavLink>

                    <NavLink
                        to="/add-game"
                        className={({ isActive }) =>
                            isActive
                                ? "text-purple-400"
                                : "text-zinc-300 hover:text-white"
                        }
                    >
                        Add Game
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
