const Rating = () => {
    const stars = Array.from({length: 5}, (_, i) => i + 1);

    const clicked = (index) => console.log('clicked', index);
    const hovered = (direction, index) => console.log('hovered', direction, index);

    return (
        <div className="rating-container">
            <h2>Rate your experience</h2>
            <div className="stars">
                {stars.map((star, index) => (
                    <span
                        onClick={() =>clicked(index)}
                        onMouseEnter={() => hovered ('enter', index)}
                        onMouseLeave={() => hovered ('leave', index)}
                        className= 'star'
                        key={star}>
                        {'\u2605'}</span>
                ))}
            </div>
        </div>
    );
};


export default Rating;