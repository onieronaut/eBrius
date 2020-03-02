import React from "react";
import {
    Link
} from "react-router-dom";

const Nav = props => {
    return (
        <div>

            <ul className="nav bg-primary a-white justify-content-center">
                <li className="nav-item">
                    <h1><Link className="text-white text-decoration-none" to="/home">eBrius</Link></h1>
                </li>
            </ul>

            {props.authorized ? (
                <ul className="nav bg-secondary a-white justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/view">View</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/add">Add</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/update">Update</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/orderlist">Order List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/logout" onClick={props.logout}>Logout</Link>
                    </li>
                </ul>
            ) : (
                    <ul className="nav bg-secondary a-white justify-content-center">

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/register">Register</Link>
                        </li>
                    </ul>
                )}
        </div>
    );
}

export default Nav;