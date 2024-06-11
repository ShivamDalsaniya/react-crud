import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllFood from "./AllFood";
import Dashboard from "./Dashboard";
import EditFood from "./EditFood";
import DeleteFood from "./DeleteFood";

function App() {
  return (<>
    <Router>
      <Routes>
        <Route path="/" element={<AllFood />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit/:id" element={<EditFood />} />
        <Route path="/delete/:id" element={<DeleteFood />} />
      </Routes>
    </Router>
  </>
  )
}

export default App;
