import "./App.css";
import Loader from "./components/Loader";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Main />
      <Loader className="loader"/>
    </div>
  );
}

export default App;
