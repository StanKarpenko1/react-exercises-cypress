import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MessagePage from "./pages/MessagePage";
import ListGroupPage from "./pages/ListGroupPage"; // Updated to use ListGroupPage
import AlertPage from "./pages/AlertPage";
import ButtonsPage from "./pages/ButtonsPage";

function App() {
  
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/message" element={<MessagePage />} />

        <Route path="/listGroup" element={<ListGroupPage />} />

        <Route path="/alert" element={<AlertPage /> }/>

        <Route path="/buttons" element={<ButtonsPage />}/>

      </Routes>
    </Router>
  );
}

export default App;
