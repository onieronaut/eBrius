import React from "react";

const Nav = () => {
    return (
        <div>

            <ul className="nav bg-primary a-white justify-content-center">
                <li className="nav-item">
                    <h1><a className="nav-link text-white" href="/">eBrius</a></h1>
                </li>
            </ul>

            <ul className="nav bg-secondary a-white justify-content-center">
                <li className="nav-item">
                    <a className="nav-link text-white" href="/favorites">Favorites</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/add">Add</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/search">Search</a>
                </li>
            </ul>
        </div>
    );
}

export default Nav;