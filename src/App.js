import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Barra from "./components/Barra.jsx";
import DetallePokemones from "./views/DetallePokemones.jsx";
import Home from "./views/Home.jsx";
import Pokemones from "./views/Pokemones.jsx";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Barra></Barra>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/pokemones" element={<Pokemones></Pokemones>}></Route>
          <Route  path="/pokemones/:id" element={<DetallePokemones></DetallePokemones>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
