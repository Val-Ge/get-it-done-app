import Header from "./Header";
import "./Card.css";

export default function Card(props) {
    return (
        <div className="card">
            <Header mainTitle={props.mainTitle} />
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}
