import React, { Component } from "react";
import axios from "axios";
import Row from "../components/Row/Row";
import moment from "moment";
import Col from "../components/Col/Col";

class View extends React.Component {
    state = {
        products: [],
        count: ""
    };

    componentDidMount() {
        this.toggleAllUpdatesOff();
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getProducts = () => {
        axios.get("/api/products")
            .then(res => {

                let data = res.data;
                this.setState({ products: data })
            })
    }

    addOrder = id => {
        axios.put("/api/orderlist/" + id, { isOrdered: true, addedToList: moment() }).then(res => this.getProducts())
    };

    toggleUpdateOn = id => {
        axios.put("/api/update/" + id, { toggleUpdate: true }).then(res => this.getProducts());
    };

    toggleUpdateOff = id => {
        axios.put("/api/update/" + id, { toggleUpdate: false }).then(res => this.getProducts());
    };

    toggleAllUpdatesOff = () => {
        axios.put("/api/update/", {toggleUpdate: false}).then(res => this.getProducts());
    }

    updateItem = id => {

        let data = {
            count: this.state.count,
            updated: moment(),
            toggleUpdate: false
        }

        axios.put("/api/products/" + id, data)
        .then(res => this.getProducts())

    };

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

                                                {product.toggleUpdate ?
                                                    (<td>
                                                        <input
                                                        name="count"
                                                        type="text"
                                                        onChange={this.handleInputChange}
                                                        value={this.state.count}
                                                        className="form-control"></input></td>) :
                                                      
                                                    (<td>{product.count}</td>)}

                                                <td>{product.par}</td>
                                                <td>{moment(product.updated).format('MMMM Do YYYY, h:mm A')}</td>

                                                {product.toggleUpdate ?
                                                    (<td>
                                                        <button
                                                            onClick={() => this.updateItem(product._id)}
                                                            className="btn btn-success btn-sm">Update</button>
                                                        <button
                                                            onClick={() => this.toggleUpdateOff(product._id)}
                                                            className="btn btn-danger btn-sm">Cancel</button>
                                                    </td>) :
                                                    (<td>
                                                        <button
                                                            onClick={() => this.addOrder(product._id)}
                                                            className="btn btn-success btn-sm">Add to Order List</button>
                                                        <button
                                                            onClick={() => this.toggleUpdateOn(product._id)}
                                                            className="btn btn-warning btn-sm">Update Inventory</button>
                                                    </td>)}


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