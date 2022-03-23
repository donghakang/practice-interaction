import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Basic from "./pages/Basic";
import Basic2 from "./pages/Basic2";
import Text from "./pages/Text";
import TweenView from "./pages/TweenView";
import ListView from "./pages/List";
import ComponentView from "./pages/Component";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Basic />} />
      </Routes>
      <Routes>
        <Route path="/basic2" element={<Basic2 />} />
      </Routes>
      <Routes>
        <Route path="/tween" element={<TweenView />} />
      </Routes>
      <Routes>
        <Route path="/text" element={<Text />} />
      </Routes>
      <Routes>
        <Route path="/list" element={<ListView />} />
      </Routes>
      <Routes>
        <Route path="/component" element={<ComponentView />} />
      </Routes>
    </Router>
  );
}

export default App;
