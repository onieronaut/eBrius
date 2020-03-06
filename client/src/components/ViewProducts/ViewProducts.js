import React from "react";
import moment from "moment";
import "./style.css";

const ViewProducts = props => {
    return (
        <div className="table-responsive-sm">
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th onClick={() => props.sortTable("brand")} scope="col">Brand</th>
                        <th onClick={() => props.sortTable("product")} scope="col">Product</th>
                        <th onClick={() => props.sortTable("type")} scope="col">Type</th>
                        <th onClick={() => props.sortTable("count")} scope="col">Count</th>
                        <th onClick={() => props.sortTable("par")} scope="col">Par</th>
                        <th onClick={() => props.sortTable("updated")} scope="col">Last Updated</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map(product =>
                        (
                            <>
                            {
                                product.count < product.par ? 
                                (<tr key={product._id} className="table-danger" >

                                    <td>{product.brand}</td>
                                    <td>{product.product}</td>
                                    <td>{product.type}</td>
    
    
                                    {product.toggleUpdate ?
                                        (<td>
                                            <input
                                                name="count"
                                                type="number"
                                                onChange={props.change}
                                                value={props.count}
                                                className="form-control"></input></td>) :
                                                
                                                (<td>{product.count}</td>)}
    
                                    <td>{product.par}</td>
                                    <td>{moment(product.updated).format('MMMM Do YYYY, h:mm A')}</td>
    
                                    {product.toggleUpdate ?
                                        (<td>
                                            <button
                                                onClick={() => props.updateItem(product._id)}
                                                className="btn btn-success btn-sm">Update</button>
                                            <button
                                                onClick={() => props.toggleUpdateOff(product._id)}
                                                className="btn btn-danger btn-sm">Cancel</button>
                                        </td>) :
                                        (<td>
                                            {product.isOrdered ?
                                                (<button
                                                    className="btn btn-success btn-sm">✓</button>) :
                                                    (<button
                                                        onClick={() => props.addOrder(product._id)}
                                                        className="btn btn-success btn-sm">Add to Order List</button>)
                                                    }
                                            <button
                                                onClick={() => props.toggleUpdateOn(product._id)}
                                                className="btn btn-warning btn-sm">Update Inventory</button>
                                        </td>)}    
                                </tr>) 
                                :
                                (<tr key={product._id}>

                                    <td>{product.brand}</td>
                                    <td>{product.product}</td>
                                    <td>{product.type}</td>
    
    
                                    {product.toggleUpdate ?
                                        (<td>
                                            <input
                                                name="count"
                                                type="number"
                                                onChange={props.change}
                                                value={props.count}
                                                className="form-control"></input></td>) :
                                                
                                                (<td>{product.count}</td>)}
    
                                    <td>{product.par}</td>
                                    <td>{moment(product.updated).format('MMMM Do YYYY, h:mm A')}</td>
    
                                    {product.toggleUpdate ?
                                        (<td>
                                            <button
                                                onClick={() => props.updateItem(product._id)}
                                                className="btn btn-success btn-sm">Update</button>
                                            <button
                                                onClick={() => props.toggleUpdateOff(product._id)}
                                                className="btn btn-danger btn-sm">Cancel</button>
                                        </td>) :
                                        (<td>
                                            {product.isOrdered ?
                                                (<button
                                                    className="btn btn-success btn-sm">✓</button>) :
                                                    (<button
                                                        onClick={() => props.addOrder(product._id)}
                                                        className="btn btn-success btn-sm">Add to Order List</button>)
                                                    }
                                            <button
                                                onClick={() => props.toggleUpdateOn(product._id)}
                                                className="btn btn-warning btn-sm">Update Inventory</button>
                                        </td>)}
    
    
                                </tr>)
                            }
                            
                        </>
                        )
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ViewProducts;