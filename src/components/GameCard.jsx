import { Link } from "react-router-dom";

function GameCard({ game }) {
    return (
        <Link to={`/games/${game.id}`}>
            <div className="bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                <img
                    src={game.image}
                    alt={game.title}
                    className="h-56 sm:h-64 w-full object-cover"
                />
                <div className="p-4">
                    <h3 className="font-bold text-lg">{game.title}</h3>
                    <p className="text-sm text-zinc-400">{game.genre.join(", ")}</p>
                    <div className="flex justify-between items-center mt-3 text-sm">
                        <span className="text-indigo-400 font-semibold">{game.price}</span>
                        <span className="text-zinc-500">{game.releaseDate}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default GameCard;
