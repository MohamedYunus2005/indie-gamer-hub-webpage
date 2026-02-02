import { useState } from "react";

function ReviewForm({ onAddReview }) {
    const [username, setUsername] = useState("");
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !comment) return;

        onAddReview({
            id: Date.now(),
            username,
            rating,
            comment
        });

        setUsername("");
        setRating(5);
        setComment("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-zinc-800 p-4 rounded-lg space-y-4"
        >
            <h3 className="text-lg font-semibold">
                Write a Review
            </h3>

            <input
                type="text"
                placeholder="Your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-zinc-900 px-3 py-2 rounded"
            />

            <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="w-full bg-zinc-900 px-3 py-2 rounded"
            >
                {[5, 4, 3, 2, 1].map((r) => (
                    <option key={r} value={r}>
                        {r} Stars
                    </option>
                ))}
            </select>

            <textarea
                placeholder="Your review"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows="3"
                className="w-full bg-zinc-900 px-3 py-2 rounded"
            />

            <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded font-semibold"
            >
                Submit Review
            </button>
        </form>
    );
}

export default ReviewForm;
