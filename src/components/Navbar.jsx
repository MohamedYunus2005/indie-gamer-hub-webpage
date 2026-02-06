import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
    const linkClass = ({ isActive }) =>
        `relative px-1 py-1 transition-colors duration-300 ${isActive ? "text-neon-cyan drop-shadow-glow-cyan" : "text-zinc-400 hover:text-white"
        }`;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="sticky top-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

                {/* LOGO */}
                <Link
                    to="/home"
                    className="flex items-center gap-2 group"
                >
                    <motion.span
                        className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan drop-shadow-glow"
                        whileHover={{ scale: 1.05 }}
                    >
                        INDIE GAMER
                    </motion.span>
                    <span className="text-2xl">🕹️</span>
                </Link>

                {/* NAV LINKS */}
                <div className="flex gap-8 text-sm font-bold uppercase tracking-wider">
                    {["Home", "Games", "Add Game"].map((item) => {
                        const path = `/${item.toLowerCase().replace(" ", "-")}`;
                        return (
                            <NavLink key={item} to={path} className={linkClass}>
                                {({ isActive }) => (
                                    <>
                                        {item}
                                        {isActive && (
                                            <motion.div
                                                layoutId="underline"
                                                className="absolute left-0 right-0 bottom-0 h-0.5 bg-neon-cyan shadow-[0_0_10px_#00e5ff]"
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </motion.nav>
    );
}

export default Navbar;
