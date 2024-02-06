import HomePage from "./HomePage.js";
import GamePage from "./GamePage.js";

const socket = io();

function App() {
    return (
        <HomePage />
    );

    return (
        <GamePage />
    );


    // return (<div>
    //     <h1>Hello, world !</h1>
    //     <button onClick={() => { socket.emit("button clicked") }}>
    //         Click me !
    //     </button>
    // </div>);
}

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);