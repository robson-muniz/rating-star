import {useState} from "react";
import Star from "./Star.jsx";
import Modal from "./Modal.jsx";
import Button from "./Button.jsx";

const Rating = ({heading, color, feedbackMessages}) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover ] = useState(0)
    const [submitted, setSubmitted] = useState(false)
    
    const stars = Array.from({length: 5}, (_, i) => i + 1);
    // const feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'excellent']

    const handleSubmit = () => {
        if (rating > 0) {
            setSubmitted(true)
        }
    }

    const closeModal = () => {
        setSubmitted(false)
        setRating(0)
        setHover(0)
    }

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
                ))}
            </div>
            {rating > 0 && <p className='feedback'>{feedbackMessages[rating - 1]}</p>}
            {/*<button className='submit-btn' onClick={handleSubmit} disabled={rating ===0}>Submit</button>*/}
            <Button className='submit-btn' disabled={rating ===0} onClick={handleSubmit()}> Submit</Button>
            <Modal isOpen={submitted} onClose={closeModal} rating={rating}></Modal>
        </div>
    );
};

export default Rating;