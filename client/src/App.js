import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Container from "./components/Container/Container";
import Add from "./pages/Add";
import View from "./pages/View";
import Update from "./pages/Update";
import OrderList from "./pages/OrderList";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <Router>

      <div>

     <Nav/>
     <Container>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/add" component={Add}/>
         <Route exact path="/view" component={View}/>
         <Route exact path="/update" component={Update}/>
         <Route exact path="/orderlist" component={OrderList}/>
       </Switch>
     </Container>
     
      </div>
      </Router>
    );
  }
};

export default App;
