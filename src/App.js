import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";

export default function App() {
    return (
        <>
            <Header text="Hello World" />
            <div className="container">
                <FeedbackItem />
            </div>
        </>
    )
}