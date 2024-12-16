import React from "react";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='text-red'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LandingPage />
      </header>
    </div>
  );
}

export default App;
