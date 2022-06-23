import HiScore from "./src/components/pages/HiScore";
import Home from "./src/components/pages/Home";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hiscore" element={<HiScore />} />
        </Routes>
      </main>
    </Router>
  );
}
