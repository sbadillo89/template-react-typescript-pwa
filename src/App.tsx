import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo animate-bounce" alt="logo" />
        <p className="text-3lg text-red-700">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export { App };
