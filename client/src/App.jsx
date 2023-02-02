import "./App.css";
import RightSide from "./components/RightSide/RightSide";
import Todos from "./components/Todos/Todos";

function App() {
    return (
        <div className="App">
            <Todos />
            <RightSide />
        </div>
    );
}

export default App;
