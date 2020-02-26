import React, { Component } from "react";
import axios from "axios";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";

class Register extends Component {
    state = {
        username: "",
        password: "",
        email: "",
    };

    register = event => {
        event.preventDefault();

        axios.post("/api/register", {
            username: this.state.username.toLowerCase(),
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            if (res.data.message) {
                this.setState({
                    error: res.data.message
                });
            } else {
                console.log("Registration Successful");
                this.props.isAuthorized();
            }
        }).catch(err => {
            console.log(err);
        })
        this.setState({ password: ""});
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <Row className="text-center">
                <div className="card w-100 mt-3 border-dark">
                    <h4 className="card-header">Register</h4>
                    <div className="card-body">
                        <form>
                            <Col size="form-group text-left">
                                <label>Username</label>
                                <input
                                    name="username"
                                    type="text"
                                    className="form-control"
                                    onChange={this.handleInputChange}
                                ></input>
                            </Col>
                            <Col size="form-group text-left">
                                <label>Email</label>
                                <input
                                    name="email"
                                    type="text"
                                    className="form-control"
                                    onChange={this.handleInputChange}
                                ></input>
                            </Col>
                            <Col size="form-group text-left">
                                <label>Password</label>
                                <input 
                                    name="password" 
                                    type="text" 
                                    className="form-control"
                                    onChange={this.handleInputChange}
                                    ></input>
                            </Col>
                            <button type="submit" className="btn btn-primary w-50 mb-4" onClick={this.register}>Register</button>
                        </form>
                    </div>
                </div>
            </Row>
        );
    }
}

export default Register;