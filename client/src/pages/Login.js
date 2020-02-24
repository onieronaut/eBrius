import React, { Component } from "react";
import axios from "axios";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";

class Login extends Component {
    state = {
        username: "",
        password: "",
        error: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value.trim()
        });
    };

    login = event => {
        event.preventDefault();
        axios.post("/api/login", {
            username: this.state.username.toLowerCase(),
            password: this.state.password
        }).then(res => {
            if (res.data.message) {
                console.log("error");
            } else {
                console.log("Login Successful");
                this.props.isAuthorized();  
            }
        }).catch(err => {
            console.log(err)
        })
        this.setState({ password: "" });

    }


    render() {
        return (
            <Row className="text-center">

                <div className="card w-100 mt-3 border-dark">
                    <h4 className="card-header">Login</h4>
                    <div className="card-body">
                        <form>
                            <Col size="form-group text-left">
                                <label>Username</label>
                                <input
                                    name="username"
                                    type="text"
                                    className="form-control"
                                    onChange={this.handleInputChange}>
                                </input>
                            </Col>
                            <Col size="form-group text-left">
                                <label>Password</label>
                                <input
                                    name="password"
                                    type="text"
                                    className="form-control"
                                    onChange={this.handleInputChange}>
                                </input>
                            </Col>
                            <button type="submit" className="btn btn-primary w-50 mb-4" onClick={this.login}>Login</button>
                        </form>
                        <a href="/register">Register</a>
                    </div>
                </div>

            </Row>
        );
    }
}

export default Login;