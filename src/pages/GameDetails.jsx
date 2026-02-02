import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { mockGames } from "../services/api";
import { mockReviews } from "../services/reviews";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";
import GameGallery from "../components/GameGallery";
import "swiper/css";
import "swiper/css/navigation";


function GameDetails() {
    const { id } = useParams();
    const game = mockGames.find((g) => g.id === Number(id));

    const [reviews, setReviews] = useState(
        mockReviews.filter((review) => review.gameId === Number(id))
    );

    if (!game) {
        return (
            <div className="p-10 text-center">
                <h1 className="text-2xl font-bold">Game not found</h1>
                <Link to="/games" className="text-indigo-400 underline">
                    Back to Games
                </Link>
            </div>
        );
    }

    const handleAddReview = (review) => {
        setReviews([
            { ...review, gameId: Number(id) },
            ...reviews,
        ]);
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-10 space-y-12">

            {/* Back Link */}
            <Link to="/games" className="text-indigo-400 hover:underline">
                ← Back to Games
            </Link>

            {/* Game Media + Info */}
            <div className="space-y-8">

                {/* Screenshot Carousel */}
                <GameGallery screenshots={game.screenshots} />

                {/* Game Info */}
                <div>
                    <h1 className="text-4xl font-bold mb-4">
                        {game.title}
                    </h1>

                    <p className="text-zinc-400 mb-6 max-w-3xl">
                        {game.description}
                    </p>

                    <div className="flex gap-3 flex-wrap">
                        {game.genre.map((g) => (
                            <span
                                key={g}
                                className="bg-zinc-800 px-3 py-1 rounded-full text-sm"
                            >
                                {g}
                            </span>
                        ))}
                    </div>
                </div>

            </div>

            {/* Reviews Section */}
            <div className="border-t border-zinc-800 pt-10 space-y-6">
                <h2 className="text-2xl font-bold">Reviews</h2>

                <ReviewForm onAddReview={handleAddReview} />
                <ReviewList reviews={reviews} />
            </div>

        </div>
    );
}

export default GameDetails;
