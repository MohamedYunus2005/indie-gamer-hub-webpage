export default function AddGame() {
    return (
        <section className="max-w-xl">
            <h1 className="text-2xl font-semibold mb-6">Add New Game</h1>

            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Game Title"
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <input
                    type="text"
                    placeholder="Steam App ID"
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg"
                />

                <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg font-medium">
                    Add Game
                </button>
            </form>
        </section>
    );
}
