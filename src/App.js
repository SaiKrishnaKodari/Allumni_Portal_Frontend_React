import Navbar from "./components/Navbar"
import "./App.css";
import BannerPosts from './components/BannerPosts'
import RoutesH from "./Routes"
import {BrowserRouter as Router ,Switch,Route,Link} from "react-router-dom"
import HomePage from './components/HomePage'
import Posts from './components/Posts'
import Markdown from "./components/Markdown"
import Gallery from "./components/Gallery"
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/posts" component={Posts}/>
        <Route exact path="/post" component={Markdown}/>
        <Route exact path='/gallery' component={Gallery}/>
        <Route exact path='http://127.0.0.1:8000/login/' />
        
      </div>
    </Router>
    );
}

export default App;
