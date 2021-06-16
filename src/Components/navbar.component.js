import React,{Component} from "react";
import {Link} from "react-router-dom";

export default class Navbar extends Component{
    render() {
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg" >
                <Link to="/" className = "navbar-brand" >Task Tracker</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/edit/:id" className ="nav-link"> Edit Task</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create" className ="nav-link"> Log New Task</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user" className ="nav-link">Create Client</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user-list" className ="nav-link">User List</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user-edit/:id" className ="nav-link">Edit User</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}