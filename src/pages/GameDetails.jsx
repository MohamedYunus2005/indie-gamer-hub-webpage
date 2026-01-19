import { useParams } from "react-router-dom";
import { mockGames } from "../services/api";

function GameDetails() {
    const { id } = useParams();
    const game = mockGames.find((g) => g.id === Number(id));

    if (!game) {
        return (
            <div className="p-10 text-center">
                <h1 className="text-2xl font-bold">Game not found</h1>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid md:grid-cols-3 gap-8">
                {/* Cover */}
                <img
                    src={game.image}
                    alt={game.title}
                    className="rounded-xl"
                />

                {/* Info */}
                <div className="md:col-span-2">
                    <h1 className="text-4xl font-bold mb-4">
                        {game.title}
                    </h1>

                    <p className="text-zinc-400 mb-4">
                        {game.description}
                    </p>

                    <div className="flex gap-3 mb-4">
                        {game.genre.map((g) => (
                            <span
                                key={g}
                                className="bg-zinc-800 px-3 py-1 rounded-full text-sm"
                            >
                                {g}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-6 mb-6">
                        <span className="text-indigo-400 font-bold text-lg">
                            {game.price}
                        </span>
                        <span className="text-zinc-500">
                            Released: {game.releaseDate}
                        </span>
                    </div>

                    {/* Store Links */}
                    <div className="flex gap-4">
                        <a
                            href={game.storeLinks.steam}
                            className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-lg"
                        >
                            Steam
                        </a>
                        <a
                            href={game.storeLinks.epic}
                            className="bg-zinc-700 hover:bg-zinc-600 px-5 py-2 rounded-lg"
                        >
                            Epic
                        </a>
                        <a
                            href={game.storeLinks.itch}
                            className="bg-zinc-700 hover:bg-zinc-600 px-5 py-2 rounded-lg"
                        >
                            Itch.io
                        </a>
                    </div>
                </div>
            </div>

            {/* Screenshots */}
            {game.screenshots.length > 0 && (
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-4">
                        Screenshots
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {game.screenshots.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                className="rounded-lg"
                                alt="Screenshot"
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default GameDetails;
