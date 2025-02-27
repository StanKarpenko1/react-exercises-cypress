import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MessagePage from "./pages/MessagePage";
import ListGroup from "./components/ListGroup/ListGroup";
import Alert from "./components/Alert/Alert";
import Buttons from "./components/Buttons/Buttons";

function App() {
  const items = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/message" element={<MessagePage />} />

        <Route
          path="/listGroup"
          element={
            <ListGroup
              items={items}
              heading="List of Items:"
              onSelectItem={handleSelectItem}
            />
          }
        />

        <Route
          path="/alert"
          element={
            <Alert >
              Hello, <span>Alert</span>
            </Alert>
          }
        />

        <Route
          path="/buttons"
          element={
            <Buttons
            // onClick={() => console.log('Clicked')}
            >
              Button
            </Buttons>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
