import React, { Component } from "react";
import axios from "axios";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";

class Add extends Component {
    state = {

    };

    render() {
        return (
            <Row className="text-center">

                <div className="card w-100 mt-3 border-dark">
                    <h4 className="card-header">Add Inventory Item</h4>
                    <div className="card-body">
                        <form>
                            <Col size="form-group text-left">
                                <label>Brand Name</label>
                                <input name="brandName" type="text" className="form-control" placeholder="Jack Daniels"></input>
                            </Col>
                            <Col size="form-group text-left">
                                <label>Product Name</label>
                                <input name="productName" type="text" className="form-control" placeholder="Tennessee Whiskey"></input>
                            </Col>
                            <Col size="form-group text-left">
                                <label>Product Type</label>
                                <select className="custom-select">
                                    <option defaultValue>Choose One</option>
                                    <option value="1">Vodka</option>
                                    <option value="2">Rum</option>
                                    <option value="3">Gin</option>
                                    <option value="4">Tequila</option>
                                    <option value="5">Whiskey</option>
                                    <option value="6">Beer</option>
                                    <option value="7">Cordial</option>
                                    <option value="8">Other</option>
                                </select>
                            </Col>
                            <Col size="form-group text-left">
                                <label>Par</label>
                                <input name="productPar" type="text" className="form-control" placeholder="Enter the number of units required for one business day"></input>
                            </Col>
                            <Col size="form-group text-left">
                                <label>Initial Inventory</label>
                                <input name="productStartCount" type="text" className="form-control" placeholder="Enter the current number of units"></input>
                            </Col>
                            <button type="submit" className="btn btn-success">Add To Inventory</button>
                        </form>
                    </div>
                </div>
            </Row>
        );
    };
};

export default Add;