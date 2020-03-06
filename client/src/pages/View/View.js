import React from "react";
import axios from "axios";
import Row from "../../components/Row/Row";
import moment from "moment";
import ViewProducts from "../../components/ViewProducts/ViewProducts";
import "./style.css";


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

    sortTable = col => {

        let route;

        switch (col) {
            case "brand":
                route = "/api/products"
                break;
            case "product":
                route = "/api/products/filter/product"
                break;
            case "type":
                route = "/api/products/filter/type"
                break;
            case "count":
                route = "/api/products/filter/count"
                break;
            case "par":
                route = "/api/products/filter/par"
                break;
            case "updated":
                route = "/api/products/filter/updated"
                break;
        }
        axios.get(route)
        .then(res => {
            let data = res.data;
                this.setState({ products: data })
        })
    }

    render() {
        return (
            <Row className="text-center">
                <div className="card w-100 mt-3 border-dark">
                    <h4 className="card-header">View Inventory</h4>
                    <div className="card-body">

                        <ViewProducts 
                            products={this.state.products}
                            change={this.handleInputChange}
                            count={this.state.count}
                            updateItem={this.updateItem}
                            getProducts={this.getProducts}
                            toggleAllUpdatesOff={this.toggleAllUpdatesOff}
                            toggleUpdateOff={this.toggleUpdateOff}
                            toggleUpdateOn={this.toggleUpdateOn}
                            addOrder={this.addOrder}
                            sortTable={this.sortTable}
                            />
                    </div>
                </div>
            </Row>
        );
    }
}

export default View;