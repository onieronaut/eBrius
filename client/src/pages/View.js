import React, { Component } from "react";
import axios from "axios";
import Row from "../components/Row/Row";

class View extends React.Component {
    state = {
        products: []
    };

    componentDidMount() {
        this.getProducts();
    }

    getProducts = () => {
        axios.get("/api/products")
        .then(res => {

            let data = res.data;
            this.setState({products: data})
        })
    }

    addOrder = product => {

        axios.post("/api/orderlist", product).then(res => this.getProducts())
    }

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
                                    {this.state.products.map(product => 
                                        (

                                            <tr key={product._id}>
                                            <td>{product.brand}</td>
                                            <td>{product.product}</td>
                                            <td>{product.type}</td>
                                            <td>{product.count}</td>
                                            <td>{product.par}</td>
                                            <td>{product.updated}</td>
                                            <td><button 
                                                onClick={() => this.addOrder(product)}
                                                className="btn btn-success btn-sm">Add to Order List</button><button className="btn btn-warning btn-sm">Update Inventory</button></td>

                                        </tr>
                                    )
                                    )}
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