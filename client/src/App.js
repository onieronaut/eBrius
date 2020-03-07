import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Container from "./components/Container/Container";
import Add from "./pages/Add";
import View from "./pages/View/View";
import Update from "./pages/Update";
import OrderList from "./pages/OrderList";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import axios from "axios";
import "./style.css";
import Index from "./pages/Index";

class App extends Component {
  state = {
    authorized: false
  };

  componentDidMount() {
    this.isAuthorized();
  }

  isAuthorized = () => {
    axios.get("/api/authorized")
      .then(res => {
        if (res.data.message) {
          this.setState({ authorized: false });
        } else {
          this.setState({ authorized: true });
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ authorized: false });
      });
  };

  logout = () => {
    axios.get("/api/logout")
      .then(res => {
        console.log("Logged Out");
        this.isAuthorized();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {

    return (
      <Router>

        <div>

          <Nav logout={this.logout} authorized={this.state.authorized} />
          <Container>
            <Switch>
              <PrivateRoute exact path="/home" component={Home} auth={this.state.authorized} />
              <PrivateRoute exact path="/add" component={Add} auth={this.state.authorized} />
              <PrivateRoute exact path="/view" component={View} auth={this.state.authorized} />
              <PrivateRoute exact path="/update" component={Update} auth={this.state.authorized} />
              <PrivateRoute exact path="/orderlist" component={OrderList} auth={this.state.authorized} />
              <Route path="/login">
                {this.state.authorized ?
                  (<Redirect to="/home" />) :
                  (<Login isAuthorized={this.isAuthorized} />)}

              </Route>
              <Route path="/register">
                {this.state.authorized ?
                  (<Redirect to="/home" />) :
                  (<Register isAuthorized={this.isAuthorized} />)}

              </Route>

              <Route path="/">
                <Index />
              </Route>

            </Switch>
          </Container>
          <nav class="navbar fixed-bottom text-white bg-dark">
            eBrius
          </nav>
        </div>
      </Router >
    );
  }
};

export default App;
