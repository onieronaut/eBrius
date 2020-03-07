import React from "react";
import axios from "axios";
import Row from "../components/Row/Row";
import moment from "moment";

class Home extends React.Component {
    state = {
        productsCount: [],
        lowInventory: [],
        count: ""
    };

    componentDidMount() {
        this.toggleAllUpdatesOff();
        this.getProductsCount();
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getProductsCount = () => {

        axios.get("/api/products/count").then(res => this.setState({ productsCount: res.data }));

    }

    getLowInventory = () => {
        axios.get("/api/lowinventory").then(res => this.setState({ lowInventory: res.data }));
    };

    addOrder = id => {
        axios.put("/api/orderlist/" + id, { isOrdered: true, addedToList: moment() }).then(res => this.getLowInventory());
    };

    toggleUpdateOn = id => {
        axios.put("/api/update/" + id, { toggleUpdate: true }).then(res => this.getLowInventory());
    };

    toggleUpdateOff = id => {
        axios.put("/api/update/" + id, { toggleUpdate: false }).then(res => this.getLowInventory());
    };

    toggleAllUpdatesOff = () => {
        axios.put("/api/update/", { toggleUpdate: false }).then(res => this.getLowInventory());
    };

    updateItem = id => {

        let data = {
            count: this.state.count,
            updated: moment(),
            toggleUpdate: false
        };

        axios.put("/api/products/" + id, data).then(res => this.getLowInventory());

    };

    render() {
        return (
            <div>

                <Row className="text-center">
                    <div className="card w-100 mt-3 border-dark">
                        <h4 className="card-header">Home</h4>
                        <div className="card-body">
                            Today's Date: {moment().format('MMMM Do YYYY')}
                            <br></br>
                            {this.state.productsCount} items in inventory
                            <br></br>
                            {this.state.lowInventory.length} items are below par
                        </div>
                    </div>
                </Row>
                <Row className="text-center">
                    <div className="card w-100 mt-3 border-dark">
                        <h4 className="card-header">Low Inventory</h4>
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
                                        {this.state.lowInventory.map(product =>
                                            (

                                                <tr className="table-danger" key={product._id}>
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
                                                            {product.isOrdered ?
                                                                (<button
                                                                    className="btn btn-success btn-sm">✓</button>) :
                                                                (<button
                                                                    onClick={() => this.addOrder(product._id)}
                                                                    className="btn btn-success btn-sm">Add to Order List</button>)
                                                            }
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
            </div>
        );

    }
}

export default Home;