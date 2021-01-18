import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import Book from "./components/Book";
import Litterature from "./components/Litterature";
import NavBar from "./components/NavBar"
 
function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component= {Home} path='/' exact/>
        <Route component= {About} path='/about' />
        <Route component= {SinglePost} path='/post/:slug' />
        <Route component= {Post} path='/post' />
        <Route component= {Project} path='/project' />
        <Route component= {Book} path='/book' />
        <Route component= {Litterature} path='/litterature' />
      </Switch>

    </BrowserRouter>
  )
}

export default App;

