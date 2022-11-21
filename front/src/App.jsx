import { useState } from "react";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Integrantes } from "./components/Integrantes";
import PageInicio from "./components/PageInicio";
import PageLogin from "./components/PageLogin";
import PageRegister from "./components/PageRegister";
import PagePackageManager from "./components/PagePackageManager";
import PageContact from "./components/PageContact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageEstadosEnvios from "./components/PageEstadosEnvios";
import PageNuevoEnvio from "./components/PageNuevoEnvio";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <main className="flex-shrink-0">
        <Nav />
        <Router>
          <Routes>
            <Route path="/" element={<PageInicio />} />
            <Route path="/login" element={<PageLogin />} />
            <Route path="/register" element={<PageRegister />} />
            <Route path="/packagemanager" element={<PagePackageManager />} />
            <Route path="/contact" element={<PageContact />} />
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
