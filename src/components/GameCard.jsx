import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function GameCard({ game }) {
    return (
        <Link to={`/games/${game.id}`}>
            <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden shadow-lg group relative backdrop-blur-sm"
            >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative overflow-hidden">
                    <img
                        src={game.image}
                        alt={game.title}
                        className="h-56 sm:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-black/80 backdrop-blur text-neon-cyan text-xs font-bold px-2 py-1 rounded">
                        {game.price}
                    </div>
                </div>

                <div className="p-5 relative z-10">
                    <h3 className="font-bold text-xl text-white group-hover:text-neon-cyan transition-colors truncate">
                        {game.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {game.genre.slice(0, 3).map((g, i) => (
                            <span key={i} className="text-[10px] uppercase tracking-wider font-bold bg-white/5 text-zinc-400 px-2 py-1 rounded">
                                {g}
                            </span>
                        ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-zinc-500 font-mono">
                        <span>{game.releaseDate}</span>
                        <span className="group-hover:text-neon-purple transition-colors">DETAILS_&rarr;</span>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}

export default GameCard;
