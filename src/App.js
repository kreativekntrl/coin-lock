import "./App.scss";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/homepage" element={<Landing />} />
    </Routes>
  );
}

export default App;
