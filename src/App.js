import React from "react"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage"
import Categories from "./components/Categories/Categories"
import RandomMeal from "./components/RandomMeal/RandomMeal"
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Homepage}/>
        <Route exact path="/categories" component={ Categories}/>
        <Route exact path="/random" component={ RandomMeal}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
