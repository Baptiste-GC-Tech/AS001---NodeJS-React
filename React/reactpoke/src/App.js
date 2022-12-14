import './App.css';
import CatchEmAll from "./pages/CatchEmAll.js"
import PokeList from "./pages/PokeList.js"
import PokEdition from "./pages/PokEdit.js"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom"

function App() {
  // // Pour la v6
  // return <Router>
  //   <Routes>
  //     <Route path='/' element={<CatchEmAll />}/>
  //     <Route path='/pokemons' element={<PokeList />}/>
  //     <Route path='/pokedit' element={<PokEdition />}/>
  //   </Routes>
  // </Router>

  // Pour la v5
  return <Router>
    <Switch>
      <Route exact path="/">
        <CatchEmAll />
      </Route>
      <Route path="/pokemons">
        <PokeList />
      </Route>
      <Route path="/pokedit">
        <PokEdition />
      </Route>
    </Switch>
  </Router>
}

export default App;
