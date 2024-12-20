import React from "react";
import { Route, Routes } from "react-router-dom";

import { Dashboard, LandingPage, PasswordRecovery } from "./pages";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/recovery" element={<PasswordRecovery />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
