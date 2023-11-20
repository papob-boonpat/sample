import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import MapPage from "./Pages/Map";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} index />
        <Route element={<About />} path="/about" />
        <Route path="/contact">
          <Route element={<Contact />} index />
          <Route element={<MapPage />} path="map" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
