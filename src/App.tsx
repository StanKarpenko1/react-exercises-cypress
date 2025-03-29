import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MessagePage from "./pages/MessagePage";
import ListGroupPage from "./pages/ListGroupPage";
import AlertPage from "./pages/AlertPage";
import ButtonsPage from "./pages/ButtonsPage";
import LikePage from "./pages/LikePage";
import CartAppPage from "./pages/CartAppPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/message" element={<MessagePage />} />

        <Route path="/listGroup" element={<ListGroupPage />} />

        <Route path="/alert" element={<AlertPage />} />

        <Route path="/buttons" element={<ButtonsPage />} />

        <Route path="/like" element={<LikePage />} />

        <Route path="/cart" element={<CartAppPage />} />


        
      </Routes>
    </Router>
  );
}

export default App;
