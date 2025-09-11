const Rating = () => {
    const stars = Array.from({length: 5}, (_, i) => i + 1);

    return (
        <div className="rating-container">
            <h2>Rate your experience</h2>
            <div className="stars">
                {stars.map((star) => (
                    <span className= 'star' key={star}>{'\u2605'}</span>
                ))}
            </div>
        </div>
    );
};


export default Rating;