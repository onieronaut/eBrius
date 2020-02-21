import React, { Component } from "react";
import axios from "axios";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";

class Add extends Component {
    state = {

    };

    render() {
        return (
            <Row className="text-center">

                <div className="card w-100 mt-3 border-dark">
                    <h4 className="card-header">Add Cocktail</h4>
                    <div className="card-body">
                        <form>
                            <Col size="form-group row">
                                <label for="drinkName" className="col-sm-2 col-form-label">Cocktail Name:</label>
                                <Col size="col-sm-6">
                                    <input name="name" type="text" className="form-control"></input>
                                </Col>
                            </Col>
                        </form>
                    </div>
                </div>
            </Row>
        );
    };
};

export default Add;