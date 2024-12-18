import React from "react";
import "./index.css";
import { LandingPage } from "./pages/LandingPage";
import { PasswordRecovery } from "./pages/PasswordRecovery";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/recovery" element={<PasswordRecovery />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
