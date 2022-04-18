import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movingbg from "./components/Movingbg";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dance from "./pages/Dance";
import Home from "./pages/Home";
import Portafolio from "./pages/Portafolio";

function App() {
    return (
        <BrowserRouter>
            <Movingbg />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portafolio" element={<Portafolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/nsfw" element={<Dance />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
