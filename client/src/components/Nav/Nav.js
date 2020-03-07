import React from "react";
import {
    Link,
    NavLink
} from "react-router-dom";
import "./style.css"

const Nav = props => {
    return (
        <div>

            <ul className="nav brand a-white justify-content-center">
                <li className="nav-item">
                    <h1><Link className="text-white text-decoration-none" to="/">eBrius</Link></h1>
                </li>
            </ul>

            {props.authorized ? (
                <ul className="nav bg-dark a-white justify-content-center">
                    <li className="nav-item ebriusNav">
                        <NavLink activeClassName="active" className="nav-link text-white" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item ebriusNav">
                        <NavLink activeClassName="active" className="nav-link text-white" to="/view">View</NavLink>
                    </li>
                    <li className="nav-item ebriusNav">
                        <NavLink activeClassName="active" className="nav-link text-white" to="/add">Add</NavLink>
                    </li>
                    <li className="nav-item ebriusNav">
                        <NavLink activeClassName="active" className="nav-link text-white" to="/update">Update</NavLink>
                    </li>
                    <li className="nav-item ebriusNav">
                        <NavLink activeClassName="active" className="nav-link text-white" to="/orderlist">Order List</NavLink>
                    </li>
                    <li className="nav-item ebriusNav">
                        <NavLink activeClassName="active" className="nav-link text-white" to="/logout" onClick={props.logout}>Logout</NavLink>
                    </li>
                </ul>
            ) : (
                    <ul className="nav bg-dark a-white justify-content-center">

                        <li className="nav-item ebriusNav">
                            <NavLink activeClassName="active" className="nav-link text-white" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item ebriusNav">
                            <NavLink activeClassName="active" className="nav-link text-white" to="/register">Register</NavLink>
                        </li>
                    </ul>
                )}
        </div>
    );
}

export default Nav;