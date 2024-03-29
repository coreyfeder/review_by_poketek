import "./App.css";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav/Nav";

//#region Tacos

import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import Single from "./pages/Single/Single";

//#endregion

console.log(null);
function doNothing() {};

//#region Functional Components

export default function App() {
    return <div className="App">

      <Nav />

      <Routes>
        <Route path="/" element="Landing"></Route>
        <Route path="/home" element="Home"></Route>
        <Route path="/about" element="About"></Route>
        <Route path="/display" element="Single"></Route>
      </Routes>
    </div>;
}

//#endregion
