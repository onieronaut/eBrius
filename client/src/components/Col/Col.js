import React from "react";

const Col = props => {
    return (
        <div className={props.size} {...props}></div>
    );
}

export default Col;