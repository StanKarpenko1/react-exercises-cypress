# PROJECT INITIALIZATION
## install Vite
    npm create vite@latest <project name>

## Navigat into the project directory
    cd <project name>

## Installed dependencies:
    npm install
## INSTAL plugins
    npm install react-router-dom
    npm install @types/react-router-dom --save-dev
    npm install bootstrap


# PROJECT STRUCTURE
    src/
    ├── components/   # Reusable UI components
    ├── pages/        # Page components (for different exercises)
    ├── styles/       # Global and component-specific styles
    ├── App.tsx       # Main App component
    ├── main.tsx      # Entry point



# CREATE PAGES AND COMPONENTS
## example:
    1. create Home.tsx in Pages
    2. Created a simple Message.tsx component
    3. Created MessagePage.tsx 
    4. Updated App.tsx to include routing
## Basic App.tsx changes after update:
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MessagePage from "./pages/MessagePage";

```js
    const App = () => {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/message" element={<MessagePage />} />
        </Routes>
        </Router>
    );
    };

    export default App;
```

