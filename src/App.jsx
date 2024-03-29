import "./App.css";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Single from "./pages/Single/Single";

export default function App() {
    return <div className="App">

      <Nav />

      <Routes>
        <Route path="/" element={<Landing />}></Route>
        {/* <Route path="/landing" element={<Landing />}></Route> */}
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/display" element={<Single />}></Route>
      </Routes>
    </div>;
}
