import React, { Component } from "react";
import axios from "axios";
import Row from "../components/Row/Row";

class OrderList extends React.Component {
    state = {};

    render() {
        return (
            <Row className="text-center">
                <div className="card w-100 mt-3 border-dark">
                    <h4 className="card-header">Order List</h4>
                    <div className="card-body">
                    <div className="table-responsive-sm">

                        <table className="table table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Brand</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Count</th>
                                    <th scope="col">Par</th>
                                    <th scope="col">Date Added</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Jack Daniels</td>
                                    <td>Tennessee Whiskey</td>
                                    <td>Whiskey</td>
                                    <td>10</td>
                                    <td>5</td>
                                    <td>2/17/2020</td>
                                    <td><button className="btn btn-danger btn-sm">Remove from List</button></td>
                                    
                                </tr>
                                <tr>
                                    <td>Tito's</td>
                                    <td>Vodka</td>
                                    <td>Vodka</td>
                                    <td>2</td>
                                    <td>10</td>
                                    <td>2/17/2020</td>
                                    <td><button className="btn btn-danger btn-sm">Remove from List</button></td>
                                </tr>
                                <tr>
                                    <td>Don Julio</td>
                                    <td>Blanco</td>
                                    <td>Tequila</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>2/17/2020</td>
                                    <td><button className="btn btn-danger btn-sm">Remove from List</button></td>
                                </tr>
                            </tbody>
                        </table>
                        </div>  
                        <button className="btn btn-success">Export as PDF</button>
                        <button className="btn btn-danger">Clear Order List</button>
                    </div>
                </div>
            </Row>
        );
    }
}

export default OrderList;