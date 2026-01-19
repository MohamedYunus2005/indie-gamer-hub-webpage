import { Link } from "react-router-dom";
import { mockGames } from "../services/api";
import GameCard from "../components/GameCard";

export default function Home() {
    return (
        <div className="space-y-20">

            {/* HERO SECTION */}
            <section className="text-center space-y-6 py-20">
                <h1 className="text-5xl font-extrabold">
                    Discover Hidden Indie Gems 🎮
                </h1>

                <p className="text-zinc-400 max-w-2xl mx-auto">
                    IndieGamer Hub is a dedicated platform to discover,
                    showcase, and celebrate indie games from developers
                    around the world.
                </p>

                <div className="flex justify-center gap-4">
                    <Link
                        to="/games"
                        className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg font-semibold"
                    >
                        Browse Games
                    </Link>
                    <Link
                        to="/add-game"
                        className="border border-zinc-600 hover:border-indigo-400 px-6 py-3 rounded-lg"
                    >
                        Add Your Game
                    </Link>
                </div>
            </section>

            {/* FEATURED GAMES */}
            <section className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-6">
                    Featured Indie Games ⭐
                </h2>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {mockGames.slice(0, 4).map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            </section>

            {/* WHY SECTION */}
            <section className="bg-zinc-800 py-16">
                <div className="max-w-6xl mx-auto px-6 text-center space-y-10">
                    <h2 className="text-3xl font-bold">
                        Why IndieGamer Hub?
                    </h2>

                    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                        <div>
                            <h3 className="font-semibold text-lg">🎮 Indie Focus</h3>
                            <p className="text-zinc-400 text-sm">
                                Only indie games. No AAA noise.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">🚀 Discovery</h3>
                            <p className="text-zinc-400 text-sm">
                                Hidden gems deserve attention.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">👥 Community</h3>
                            <p className="text-zinc-400 text-sm">
                                Reviews and feedback from real gamers.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">🛠 Developer Friendly</h3>
                            <p className="text-zinc-400 text-sm">
                                Auto-fetch Steam data with App ID.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DEVELOPER CTA */}
            <section className="text-center py-20 space-y-6">
                <h2 className="text-4xl font-bold">
                    Are You an Indie Developer?
                </h2>
                <p className="text-zinc-400 max-w-xl mx-auto">
                    Submit your game and reach players who love discovering
                    unique indie experiences.
                </p>
                <Link
                    to="/add-game"
                    className="bg-indigo-600 hover:bg-indigo-500 px-8 py-3 rounded-lg font-semibold"
                >
                    Submit Your Game
                </Link>
            </section>

        </div>
    );
}
