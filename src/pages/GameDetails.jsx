import { useParams, Link } from "react-router-dom";
import { mockGames } from "../services/api";

function GameDetails() {
    const { id } = useParams();
    const game = mockGames.find((g) => g.id === Number(id));

    if (!game) {
        return (
            <div className="p-10 text-center">
                <h1 className="text-2xl font-bold">Game not found</h1>
                <Link
                    to="/games"
                    className="text-indigo-400 underline mt-4 inline-block"
                >
                    Back to Games
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-10 space-y-12">

            {/* Back Link */}
            <Link
                to="/games"
                className="text-sm text-indigo-400 hover:underline"
            >
                ← Back to Games
            </Link>

            {/* Main Info */}
            <div className="grid md:grid-cols-3 gap-8">

                {/* Cover */}
                <img
                    src={game.image}
                    alt={game.title}
                    className="rounded-xl shadow-lg object-cover w-full"
                />

                {/* Details */}
                <div className="md:col-span-2">
                    <h1 className="text-4xl font-bold mb-4">
                        {game.title}
                    </h1>

                    <p className="text-zinc-400 mb-6 leading-relaxed">
                        {game.description}
                    </p>

                    {/* Genres */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        {game.genre.map((g) => (
                            <span
                                key={g}
                                className="bg-zinc-800 px-4 py-1 rounded-full text-sm"
                            >
                                {g}
                            </span>
                        ))}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-6 mb-8">
                        <span className="text-indigo-400 font-bold text-xl">
                            {game.price}
                        </span>
                        <span className="text-zinc-500">
                            Released: {game.releaseDate}
                        </span>
                    </div>

                    {/* Store Links */}
                    <div className="flex gap-4">
                        {game.storeLinks?.steam && (
                            <a
                                href={game.storeLinks.steam}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-lg font-semibold"
                            >
                                Steam
                            </a>
                        )}
                        {game.storeLinks?.epic && (
                            <a
                                href={game.storeLinks.epic}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-zinc-700 hover:bg-zinc-600 px-5 py-2 rounded-lg"
                            >
                                Epic
                            </a>
                        )}
                        {game.storeLinks?.itch && (
                            <a
                                href={game.storeLinks.itch}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-zinc-700 hover:bg-zinc-600 px-5 py-2 rounded-lg"
                            >
                                Itch.io
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Screenshots */}
            {game.screenshots?.length > 0 && (
                <div>
                    <h2 className="text-2xl font-bold mb-4">
                        Screenshots
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {game.screenshots.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="Screenshot"
                                className="rounded-lg hover:scale-105 transition-transform cursor-pointer"
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default GameDetails;
