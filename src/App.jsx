import Rating from "./components/Rating.jsx";

const App = () => {
    return (
        <div>
            <Rating heading='How do you feel about React'
                    color='red'
                    feedbackMessages = {[
                        'Hate it', 'Dislike it', 'Meh', 'Like it', 'Love it'
                    ]}
            />
        </div>

    );
}

export default App;