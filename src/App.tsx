import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MessagePage from "./pages/MessagePage";
import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="/listGroup" element={<ListGroup />} />

      </Routes>
    </Router>
  );
}

export default App;
