import "./App.css";
import ArrayOperations from "./CustomCompoments/ArrayOperations";
import Main from "./CustomCompoments/Main";
import MyForEach from "./CustomCompoments/MyForEach";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Main />
        <MyForEach />
        <ArrayOperations />
      </header>
    </div>
  );
}

export default App;
