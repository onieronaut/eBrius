import React from "react";
import axios from "axios";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import moment from "moment";

class Update extends React.Component {
    state = {
        option: "",
        products: [],
        singleProduct: [],
        count: ""
    };

    componentDidMount() {
        this.getProducts();
    }

    getProducts = () => {
        axios.get("/api/products")
            .then(res => {

                let data = res.data;
                this.setState({ products: data })
            })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getSingleProduct = id => {
        axios.get("/api/products/" + id)
            .then(res => this.setState({ singleProduct: res.data }))
    }

    
    handleFormSubmit = event => {
        event.preventDefault();

        let id = this.state.option

        let data = {
            count: this.state.count,
            updated: moment()
        }

        axios.put("/api/products/" + id, data)
        .then(res => this.getSingleProduct(this.state.option))

    };

    render() {
        return (
            <div>
                <Row className="text-center">
                    <div className="card w-100 mt-3 border-dark">
                        <h4 className="card-header">Update Inventory</h4>
                        <div className="card-body">
                            <select
                                name="option"
                                onChange={ (e) => {this.handleInputChange(e); this.getSingleProduct(this.state.option)}} 
                                className="custom-select">

                                <option>Select Product</option>

                                {this.state.products.map(product => (
                                    <option key={product._id} 
                                    value={product._id}>
                                    {product.brand} {product.product}</option>
                                ))}
                            </select>
                            {/* <button className="btn btn-primary mt-3" onClick={() => this.getSingleProduct(this.state.option)}>Search</button> */}
                        </div>
                    </div>
                </Row>
                
                <Row className="text-center">
                    <div className="card w-100 mt-3 border-dark">
                        <h4 className="card-header">Product</h4>
                        <div className="card-body">
                            <form>
                                <Col className="form-row">
                                    <Col size="form-group col-sm-4 text-left">
                                        <label>Brand Name</label>
                                        <input 
                                            name="brand" type="text" className="form-control-plaintext" value={this.state.singleProduct.brand} readOnly></input>
                                    </Col>
                                    <Col size="form-group col-sm-4 text-left">
                                        <label>Product Name</label>
                                        <input 
                                            name="product" type="text" className="form-control-plaintext" value={this.state.singleProduct.product} readOnly></input>
                                    </Col>
                                    <Col size="form-group col-sm-4 text-left">
                                        <label>Product Type</label>
                                        <input 
                                        name="type" type="text" className="form-control-plaintext" value={this.state.singleProduct.type} readOnly></input>
                                    </Col>
                                </Col>
                                <Col className="form-row">
                                    <Col size="form-group col-sm-4 text-left">
                                        <label>Par</label>
                                        <input name="par" type="text" className="form-control-plaintext" value={this.state.singleProduct.par} readOnly></input>
                                    </Col>
                                    <Col size="form-group col-sm-4 text-left">
                                        <label>Last Count</label>
                                        <input name="lastCount" type="text" className="form-control-plaintext" value={this.state.singleProduct.count} readOnly></input>
                                    </Col>
                                    {this.state.singleProduct.updated ?
                                     (<Col size="form-group col-sm-4 text-left">
                                     <label>Last Updated</label>
                                     <input name="updated" type="text" className="form-control-plaintext" value={moment(this.state.singleProduct.updated).format('MMMM Do YYYY, h:mm A')} readOnly></input>
                                 </Col>) : 
                                    (<Col size="form-group col-sm-4 text-left">
                                    <label>Last Updated</label>
                                    <input name="updated" type="text" className="form-control-plaintext" value="" readOnly></input>
                                </Col>)}
                                    
                                </Col>


                                <Col size="form-group text-left">
                                    <label>Current Count</label>
                                    <input
                                        name="count"
                                        value={this.state.count}
                                        onChange={this.handleInputChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter the number of units"></input>
                                </Col>
                                <button 
                                onClick={this.handleFormSubmit}
                                type="submit" className="btn btn-success">Update Inventory Item</button>
                            </form>

                        </div>
                    </div>
                </Row>
            </div>
        );
    }
}

export default Update;