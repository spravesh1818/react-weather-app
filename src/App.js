import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <div className="AppContainer">
      <Header />
      <Routes>
        <Route path="/" element={<>Hello</>} />
        <Route path="/current-weather" element={<>Hello</>} />
        <Route path="/forecast" element={<>Hi</>} />
      </Routes>
    </div>
  );
}

export default App;
