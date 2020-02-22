import React, { Component } from "react";
import axios from "axios";
import Row from "../components/Row/Row";

class View extends React.Component {
    state = {};

    render() {
        return (
            <Row className="text-center">
                <div className="card w-100 mt-3 border-dark">
                    <h4 className="card-header">View Inventory</h4>
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
                                        <th scope="col">Last Updated</th>
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
                                        <td><button className="btn btn-success btn-sm">Add to Order List</button><button className="btn btn-warning btn-sm">Update Inventory</button></td>

                                    </tr>
                                    <tr className="table-danger">
                                        <td>Tito's</td>
                                        <td>Vodka</td>
                                        <td>Vodka</td>
                                        <td>2</td>
                                        <td>10</td>
                                        <td>2/17/2020</td>
                                        <td><button className="btn btn-success btn-sm">Add to Order List</button><button className="btn btn-warning btn-sm">Update Inventory</button></td>
                                    </tr>
                                    <tr>
                                        <td>Don Julio</td>
                                        <td>Blanco</td>
                                        <td>Tequila</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>2/17/2020</td>
                                        <td><button className="btn btn-success btn-sm">Add to Order List</button><button className="btn btn-warning btn-sm">Update Inventory</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Row>
        );
    }
}

export default View;