import './App.css';
import CatchEmAll from "./pages/CatchEmAll.js"
import PokeList from "./pages/PokeList.js"
import PokEdit from "./pages/PokEdit.js"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return <Router>
    <Switch>
      <Route exact path="/">
        <CatchEmAll />
      </Route>
      <Route path="/pokemons">
        <PokeList />
      </Route>
      <Route path="/pokedit">
        <PokEdit />
      </Route>
    </Switch>
  </Router>
}

export default App;
