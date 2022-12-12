import './App.css';
import CatchEmAll from "./pages/CatchEmAll.js"
import PokeList from "./pages/PokeList.js"
import PokEdit from "./pages/PokEdit.js"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return <Router>
    <Routes>
      <Route path='/' element={<CatchEmAll />}/>
      <Route path='/pokemons' element={<PokeList />}/>
      <Route path='/pokedit' element={<PokEdit />}/>
    </Routes>
  </Router>
}

export default App;
