

const Reviews = () => {
    // Sample review data
    const reviewsData = [
        {
            id: 1,
            author: 'John Doe',
            rating: 4,
            comment: 'Great product! I love it.',
        },
        {
            id: 2,
            author: 'Jane Smith',
            rating: 5,
            comment: 'Excellent service and fast shipping.',
        },
        // Add more reviews as needed
    ];

    return (
        <div>
            <h2>Customer Reviews</h2>
            <ul>
                {reviewsData.map((review) => (
                    <li key={review.id}>
                        <p><strong>{review.author}</strong></p>
                        <p>Rating: {review.rating}/5</p>
                        <p>{review.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reviews;
