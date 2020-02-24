import React from "react";

const Nav = props => {
    return (
        <div>

            <ul className="nav bg-primary a-white justify-content-center">
                <li className="nav-item">
                    <h1><a className="nav-link text-white" href="/">eBrius</a></h1>
                </li>
            </ul>

            {props.authorized ? (
                <ul className="nav bg-secondary a-white justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/view">View</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/add">Add</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/update">Update</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/orderlist">Order List</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white" href="/login" onClick={props.logout}>Logout</a>
                    </li>
                </ul>
            ) : (
                <ul className="nav bg-secondary a-white justify-content-center">

                    <li className="nav-item">
                        <a className="nav-link text-white" href="/login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/register">Register</a>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Nav;