import {useState} from "react";
import Star from "./Star.jsx";

const Rating = ({heading, color, feedbackMessages}) => {
    const [rating, setRating] = useState(0)
   const [hover, setHover ] = useState(0)
    
    const stars = Array.from({length: 5}, (_, i) => i + 1);
    // const feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'excellent']

    return (
        <div className="rating-container">
            <h2>{heading}</h2>
            <div className="stars">
                {stars.map((star) => (
                    <Star
                        key={star}
                        star={star}
                        rating={rating}
                        hover={hover}
                        color={color}
                        ratingClick={setRating}
                        hoverEnter={setHover}
                        hoverLeave={() => setHover(null)}
                    />
                    // <span
                    //     onClick={() => setRating(star)}
                    //     onMouseEnter={() => setHover(star)}
                    //     onMouseLeave={() => setHover(0)}
                    //     className= {`star`}
                    //     style={{
                    //         color: star <= (hover || rating) ? color : '#ccc'
                    //     }}
                    //     key={star}>
                    //     {'\u2605'}
                    // </span>
                ))}
            </div>
            {rating > 0 && <p className='feedback'>{feedbackMessages[rating - 1]}</p>}
        </div>
    );
};

export default Rating;