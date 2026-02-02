function StarRating({ rating }) {
    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={
                        star <= rating
                            ? "text-yellow-400 text-lg"
                            : "text-zinc-600 text-lg"
                    }
                >
                    ★
                </span>
            ))}
        </div>
    );
}

export default StarRating;
