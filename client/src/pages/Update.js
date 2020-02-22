import React, { Component } from "react";
import axios from "axios";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col"

class Update extends React.Component {
    state = {};

    render() {
        return (
            <div>
                <Row className="text-center">
                    <div className="card w-100 mt-3 border-dark">
                        <h4 className="card-header">Update Inventory</h4>
                        <div className="card-body">
                            <select className="custom-select">
                                <option>Select Product</option>
                                <option value="1">Tito's Vodka</option>
                                <option value="1">Jack Daniels Tennessee Whiskey</option>
                                <option value="1">Don Julio Blanco</option>
                            </select>
                        </div>
                    </div>
                </Row>
                <Row className="text-center">
                    <div className="card w-100 mt-3 border-dark">
                        <h4 className="card-header">Product</h4>
                        <div className="card-body">
                            <form>
                                <Col class="form-row">
                                    <Col size="form-group col-sm-4 text-left">
                                        <label>Brand Name</label>
                                        <input name="brandName" type="text" className="form-control-plaintext" value="Jack Daniels" readOnly></input>
                                    </Col>
                                    <Col size="form-group col-sm-4 text-left">
                                        <label>Product Name</label>
                                        <input name="productName" type="text" className="form-control-plaintext" value="Tennessee Whiskey" readOnly></input>
                                    </Col>
                                    <Col size="form-group col-sm-4 text-left">
                                        <label>Product Type</label>
                                        <input name="productType" type="text" className="form-control-plaintext" value="Whiskey" readOnly></input>
                                    </Col>
                                </Col>
                                <Col class="form-row">
                                    <Col size="form-group col-sm-4 text-left">
                                        <label>Par</label>
                                        <input name="productPar" type="text" className="form-control-plaintext" value="12" readOnly></input>
                                    </Col>
                                    <Col size="form-group col-sm-4 text-left">
                                        <label>Last Count</label>
                                        <input name="productCurrentCount" type="text" className="form-control-plaintext" value="8" readOnly></input>
                                    </Col>
                                    <Col size="form-group col-sm-4 text-left">
                                        <label>Last Updated</label>
                                        <input name="productCurrentCount" type="text" className="form-control-plaintext" value="2/17/2020" readOnly></input>
                                    </Col>
                                </Col>


                                <Col size="form-group text-left">
                                    <label>Current Count</label>
                                    <input name="productCurrentCount" type="text" className="form-control" placeholder="Enter the number of units"></input>
                                </Col>
                                <button type="submit" className="btn btn-success">Update Inventory Item</button>
                            </form>

                        </div>
                    </div>
                </Row>
            </div>
        );
    }
}

export default Update;