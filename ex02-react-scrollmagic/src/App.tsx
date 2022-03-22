
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Basic from "./pages/Basic";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Basic/>} />
      </Routes>
    </Router>
  );
}

export default App;
