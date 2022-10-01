import React from "react";
import { Feed } from "./components/feed/Feed";
import "./App.css";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-header overflow-hidden">
        <Feed />
      </div>
    </div>
  );
}

export default App;
