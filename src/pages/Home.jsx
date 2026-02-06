import { Link } from "react-router-dom";
import { mockGames } from "../services/api";
import GameCard from "../components/GameCard";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="space-y-20 relative">

            {/* Background Gradient Blob */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-neon-purple/20 blur-[120px] rounded-full pointer-events-none -z-10" />

            {/* HERO SECTION */}
            <section className="text-center space-y-8 py-24 relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple drop-shadow-glow">
                            Unlock The
                        </span>
                        <br />
                        <span className="text-white drop-shadow-glow-cyan">
                            Indieverse
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-zinc-300 max-w-2xl mx-auto text-lg md:text-xl font-light tracking-wide"
                >
                    Dive into a curated universe of <span className="text-neon-pink font-bold">hidden gems</span> and
                    pixel-perfect adventures.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, type: "spring" }}
                    className="flex justify-center gap-6 pt-4"
                >
                    <Link
                        to="/games"
                        className="relative group px-8 py-4 bg-neon-purple text-black font-bold text-lg rounded-none skew-x-[-10deg] hover:bg-neon-cyan transition-colors shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)]"
                    >
                        <span className="block skew-x-[10deg]">START GAME</span>
                    </Link>
                    <Link
                        to="/add-game"
                        className="relative group px-8 py-4 border border-neon-cyan/50 text-neon-cyan font-bold text-lg rounded-none skew-x-[-10deg] hover:bg-neon-cyan/10 transition-colors"
                    >
                        <span className="block skew-x-[10deg]">SUBMIT GAME</span>
                    </Link>
                </motion.div>
            </section>

            {/* FEATURED GAMES */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-10">
                    <div className="h-1 flex-1 bg-gradient-to-r from-transparent to-neon-purple" />
                    <h2 className="text-4xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
                        Featured <span className="text-neon-cyan">Drops</span>
                    </h2>
                    <div className="h-1 flex-1 bg-gradient-to-l from-transparent to-neon-purple" />
                </div>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {mockGames.slice(0, 4).map((game, index) => (
                        <motion.div
                            key={game.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GameCard game={game} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* WHY SECTION */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent pointer-events-none" />

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-widest text-zinc-500">
                        System Specs
                    </h2>

                    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                        {[
                            { title: "Indie Core", desc: "100% curated indie titles.", icon: "💎" },
                            { title: "Discovery Engine", desc: "Algorithm for hidden gems.", icon: "🚀" },
                            { title: "Player Base", desc: "Community powered reviews.", icon: "👥" },
                            { title: "Dev Tools", desc: "Seamless Steam integration.", icon: "🛠" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-neon-cyan/50 hover:bg-white/10 transition-all group"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                <h3 className="font-bold text-xl mb-2 text-white group-hover:text-neon-cyan transition-colors">{item.title}</h3>
                                <p className="text-zinc-400 text-sm group-hover:text-zinc-300">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DEVELOPER CTA */}
            <section className="text-center py-20 relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="relative z-10 space-y-6">
                    <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">
                        PLAYER 1 START?
                    </h2>
                    <p className="text-neon-pink text-lg tracking-widest uppercase">
                        Join the roster of creators
                    </p>
                    <Link
                        to="/add-game"
                        className="inline-block mt-8 border-2 border-white px-10 py-3 font-bold hover:bg-white hover:text-black transition-all hover:scale-105"
                    >
                        UPLOAD GAME_
                    </Link>
                </div>
            </section>

        </div>
    );
}
