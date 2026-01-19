import GameCard from "../components/GameCard";
import { mockGames } from "../services/api";

function Games() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            {/* Page Title */}
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-indigo-400">
                Discover Indie Games 🎮
            </h1>

            {/* Subtitle */}
            <p className="text-zinc-400 mb-8 max-w-2xl">
                Explore unique indie titles that deserve attention. Click any game to see full details, screenshots, and store links.
            </p>

            {/* Game Grid */}
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {mockGames.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>

            {/* Optional Footer Note */}
            <p className="mt-12 text-zinc-500 text-sm text-center">
                Built for indie game lovers. All games are mock data for demo purposes.
            </p>
        </div>
    );
}

export default Games;
