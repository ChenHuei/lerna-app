import { Button } from "@chenhuei83/package-01";
import { formatByPackage } from "@chenhuei83/utils";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button
          textColor="black"
          onClick={() => {
            console.log("click");
          }}
        >
          {formatByPackage("Hello")}
        </Button>
      </header>
    </div>
  );
}

export default App;
