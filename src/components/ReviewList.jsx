function ReviewList({ reviews }) {
    if (reviews.length === 0) {
        return (
            <p className="text-zinc-500">
                No reviews yet. Be the first to review!
            </p>
        );
    }

    return (
        <div className="space-y-4">
            {reviews.map((review, index) => (
                <div
                    key={index}
                    className="bg-zinc-800 p-4 rounded-lg"
                >
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">
                            {review.username}
                        </span>
                        <span className="text-yellow-400">
                            {"★".repeat(review.rating)}
                        </span>
                    </div>

                    <p className="text-zinc-300">
                        {review.comment}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default ReviewList;
