import './App.css';
// these are the pages that will render when using the router class
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
// import react-router-dom as BrowserRouter, include the built-in classes to make the router stuff work
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom'
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    // <Router> low level interface for all router components, to be able to use link or switch or redirect, these have to be nested inside of a router element
    <Router>
      <div className="App">
        <nav>
        {/* <Link> Provides a way to link in between pages when clicked lke a hyperlink */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        </nav>
        {/* <Switch> when a web address is entered into the url bar switch will try to render the first match in the web address (so if all web address have a backlash switch will try to render only the first route which is the home route) */}
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route path="/projects/:id">
          <ProjectDetail />
        </Route>
        {/* <Route path="?">
            <h1>Page not found</h1>
            <Link to="/">return to homepage</Link>
        </Route> */}
        <Route path="*">
          <Redirect to="/" />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
