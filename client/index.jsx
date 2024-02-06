import HomePage from "./HomePage.js";
import GamePage from "./GamePage.js";

const socket = io();

function App() {
    return (
        <HomePage />
    );
    // return (
    //     <GamePage />
    // );
}

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);