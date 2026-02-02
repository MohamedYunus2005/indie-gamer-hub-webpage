import { useState } from "react";

export default function AddGame() {
    const [title, setTitle] = useState("");
    const [steamId, setSteamId] = useState("");
    const [submittedGame, setSubmittedGame] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !steamId) return;

        setSubmittedGame({
            title,
            steamId,
        });

        // Optional: clear inputs
        setTitle("");
        setSteamId("");
    };

    return (
        <section className="max-w-xl">
            <h1 className="text-2xl font-semibold mb-6">Add New Game</h1>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Game Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <input
                    type="text"
                    placeholder="Steam App ID"
                    value={steamId}
                    onChange={(e) => setSteamId(e.target.value)}
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg"
                />

                <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg font-medium"
                >
                    Add Game
                </button>
            </form>

            {/* DISPLAY RESULT */}
            {submittedGame && (
                <div className="mt-8 p-4 bg-zinc-800 border border-zinc-700 rounded-lg">
                    <h2 className="text-lg font-semibold mb-2 text-purple-400">
                        Game Added
                    </h2>
                    <p>
                        <span className="text-zinc-400">Title:</span>{" "}
                        {submittedGame.title}
                    </p>
                    <p>
                        <span className="text-zinc-400">Steam App ID:</span>{" "}
                        {submittedGame.steamId}
                    </p>
                </div>
            )}
        </section>
    );
}
