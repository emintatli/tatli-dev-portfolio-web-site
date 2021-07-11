import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './main.css';
import NavBar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects"
import Contact from "./components/Contact";
function App() {
  return (<>
  <Router>
  <div className="container">
    <NavBar/>
   
    <Switch>
      <Route exact path="/">
        <Main/>
      </Route>
      <Route exact path="/about">
        <About/>
      </Route>
      <Route exact path="/projects">
        <Projects/>
      </Route>
      <Route exact path="/contact">
        <Contact/>
      </Route>
    </Switch>
    </div>
  </Router>
  </>
 
  );
}

export default App;
