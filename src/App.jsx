import './App.css';
import Card from './Card';
import Footer from "./Footer";

function App() {
    return (
        <div className="card-container">
            <Card mainTitle="Task 1" title="AM" content="Do the dishes!" />
            <Card mainTitle="Task 2" title="Lunch" content="Eat Lunch :)" />
            <Card mainTitle="Task 3" title="PM" content="Study React" />
            <Footer />
        </div>
    );
}

export default App;

