import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Integrantes } from "./components/Integrantes";
import PageInicio from "./components/PageInicio";
import PageLogin from "./components/sections/PageLogin";
import PageRegister from "./components/sections/Register";
import PageContact from "./components/PageContact";
import NotFound from "./components/NotFound";

import PageEstadosEnvios from "./components/sections/PageEstadosEnvios";
import PageNuevoEnvio from "./components/sections/PageNuevoEnvio";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <main className="flex-shrink-0">
        <Nav />
        <Router url={location.pathname}>
          <Routes>
            <Route path="/" element={<PageInicio />} />
            <Route path="/login" element={<PageLogin />} />
            <Route path="/register" element={<PageRegister />} />
            <Route path="/contact" element={<PageContact />} />
            <Route path="*" element={<NotFound />}/> 
            <Route path="/estados_envios" element={<PageEstadosEnvios />} />
            <Route path="/nuevo_envio" element={<PageNuevoEnvio />} />
          </Routes>
        </Router>
        <Integrantes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
