import React, { Component } from "react";
import axios from "axios";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";

class Add extends Component {
    state = {
        brand: "",
        product: "",
        type: "",
        par: "",
        count: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        let data = {
            brand: this.state.brand,
            product: this.state.product,
            type: this.state.type,
            par: this.state.par,
            count: this.state.count
        }

        console.log(data);

        axios.post("/api/products", data).then(res => this.clearFields())
            .catch(err => console.log(err));

    };

    clearFields = () => {
        this.setState({
            brand: "",
            product: "",
            type: "",
            par: "",
            count: ""
        })
    }

    render() {
        return (
            <Row className="text-center">

                <div className="card w-100 mt-3 border-dark">
                    <h4 className="card-header">Add Inventory Item</h4>
                    <div className="card-body">
                        <form>
                            <Col size="form-group text-left">
                                <label>Brand Name</label>
                                <input
                                    name="brand"
                                    value={this.state.brand}
                                    onChange={this.handleInputChange}
                                    type="text"
                                    className="form-control"
                                    placeholder="Jack Daniels"></input>
                            </Col>
                            <Col size="form-group text-left">
                                <label>Product Name</label>
                                <input
                                    name="product"
                                    value={this.state.product}
                                    onChange={this.handleInputChange}
                                    type="text"
                                    className="form-control"
                                    placeholder="Tennessee Whiskey"></input>
                            </Col>
                            <Col size="form-group text-left">
                                <label>Product Type</label>
                                <select name="type"
                                    onChange={this.handleInputChange}
                                    value={this.state.type}
                                    className="custom-select">
                                    <option defaultValue>Choose One</option>
                                    <option value="Vodka">Vodka</option>
                                    <option value="Rum">Rum</option>
                                    <option value="Gin">Gin</option>
                                    <option value="Tequila">Tequila</option>
                                    <option value="Whiskey">Whiskey</option>
                                    <option value="Beer">Beer</option>
                                    <option value="Cordial">Cordial</option>
                                    <option value="Other">Other</option>
                                </select>
                            </Col>
                            <Col size="form-group text-left">
                                <label>Par</label>
                                <input
                                    name="par"
                                    value={this.state.par}
                                    onChange={this.handleInputChange}
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter the number of units required for one business day"></input>
                            </Col>
                            <Col size="form-group text-left">
                                <label>Initial Inventory</label>
                                <input
                                    name="count"
                                    value={this.state.count}
                                    onChange={this.handleInputChange}
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter the current number of units"></input>
                            </Col>
                            <button
                                type="submit"
                                className="btn btn-success"
                                onClick={this.handleFormSubmit}>Add To Inventory</button>
                        </form>
                    </div>
                </div>
            </Row>
        );
    };
};

export default Add;