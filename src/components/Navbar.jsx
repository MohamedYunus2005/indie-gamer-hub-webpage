import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const linkClass = ({ isActive }) =>
        isActive
            ? "text-purple-400"
            : "text-zinc-300 hover:text-white";

    return (
        <nav className="bg-zinc-950 border-b border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

                {/* LOGO */}
                <Link
                    to="/home"
                    className="text-xl font-bold tracking-wide text-purple-400"
                >
                    Indie Gamer Hub 🎮
                </Link>

                {/* NAV LINKS */}
                <div className="flex gap-6 text-sm font-medium">
                    <NavLink to="/home" className={linkClass}>
                        Home
                    </NavLink>

                    <NavLink to="/games" className={linkClass}>
                        Games
                    </NavLink>

                    <NavLink to="/add-game" className={linkClass}>
                        Add Game
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
