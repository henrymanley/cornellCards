import './css/App.css';
import WelcomePage from "./components/WelcomePage";
import GamePage from "./components/GamePage"
import JoinGame from "./components/JoinGame";
import StartGame from "./components/StartGame";
import Contribute from "./components/Contribute";

import { Switch, BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
      <Router>
          <Switch>
                <div className="App">
                    <header/>
                    <Route exact path="/" component={WelcomePage}></Route>
                    <Route path="/game/:gameId?" component={GamePage}></Route>
                    {/* <Route exact path="/Join" component={JoinGame}></Route>
                    <Route path="/Start/:gameId" component={StartGame}></Route>
                    <Route exact path="/Contribute" component={Contribute}></Route> */}
                    <footer />
                </div>
          </Switch>
      </Router>
  );
}

export default App;
