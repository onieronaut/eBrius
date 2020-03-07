import React, { Component } from "react";
import axios from "axios";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import { Link } from "react-router-dom";


class Index extends Component {
    render() {
        return (
            <div>

                <Row className="text-center">
                    <div className="card w-100 mt-3 border-dark">
                        <h4 className="card-header">What is eBrius?</h4>
                        <div className="card-body">
                           <p className="card-text">
                            eBrius is an inventory management application for bars. The fundamental concept in bar inventory is <u>Par</u>: <i>The stock of each individual product required for one day of business</i>
                            </p>
                            <p className="card-text">
                                This application is designed to help managers stay on top of their inventory by making inventory control easy. Add new items to your inventory list, create a par for them, update counts on the fly. Be alerted when you have low inventory on an item, and add items to an order list that you can export as a PDF document.
                            </p>
                        </div>
                    </div>
                </Row>

                <Row className="text-center">
                    <div className="card w-100 mt-3 border-dark">
                        <div className="card-body">
                           <p className="card-text">
                               Try out eBrius today!
                            </p>
                            <Link to="/register">

                            <button className="btn login bg-dark text-white w-25 mb-4" onClick={this.login}>Register Here</button>
                            </Link>

                            
                        </div>
                    </div>
                </Row>
            </div>
        )
    }
}

export default Index;
