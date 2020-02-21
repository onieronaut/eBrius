import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Container from "./components/Container/Container";
import Add from "./pages/Add";

class App extends Component {
  render() {
    return (
      <div>

     <Nav/>
     <Container>
       
      <Add/>
     </Container>
     
      </div>
    );
  }
};

export default App;
