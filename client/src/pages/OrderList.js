import React from "react";
import axios from "axios";
import Row from "../components/Row/Row";
import moment from "moment";

class OrderList extends React.Component {
    state = {
        orderlist: []
    };

    componentDidMount() {
        this.getOrderList();
    };

    getOrderList = () => {

        axios.get("/api/orderlist")
            .then(res => this.setState({orderlist: res.data}))
    };

    deleteItem = id => {

        axios.put("/api/orderlist/" + id, {isOrdered: false} )
            .then(res => this.getOrderList())
    }

    clearList = () => {
        axios.put("/api/orderlist", {isOrdered: false})
        .then(res => this.getOrderList())
    };

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
                                {this.state.orderlist.map(item => (
                                    <tr key={item._id}>

                                    <td>{item.brand}</td>
                                    <td>{item.product}</td>
                                    <td>{item.type}</td>
                                    <td>{item.par}</td>
                                    <td>{item.count}</td>
                                    <td>{moment(item.addedToList).format('MMMM Do YYYY, h:mm A')}</td>
                                    <td><button
                                        onClick={() => this.deleteItem(item._id)} 
                                        className="btn btn-danger btn-sm">Remove from List</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>  
                        <button className="btn btn-success">Export as PDF</button>
                        <button onClick={this.clearList} className="btn btn-danger">Clear Order List</button>
                    </div>
                </div>
            </Row>
        );
    }
}

export default OrderList;