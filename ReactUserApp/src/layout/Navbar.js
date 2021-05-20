import React  from 'react';
import PropTypes from 'prop-types'; 
import {BrowserRouter as Router,Link} from "react-router-dom";


function Navbar(props){

    const {title} = props;

    return(
        
        <nav className="navbar-nav navbar-expend-lg navbar-dark bg-dark mb-3 p-3">
            <a className="navbar-brand" style={{color:"white"}}>{title}</a>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item active" style={{color:"white"}}>
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item active" style={{color:"white"}}>
                    <Link to="/add" className="nav-link">Add User</Link>
                </li>
                <li className="nav-item active" style={{color:"white"}}>
                    <Link to="/github" className="nav-link">Profile Files</Link>
                </li>
            </ul>
        </nav>
    )
}

Navbar.propTypes ={
    title: PropTypes.string.isRequired
}

Navbar.defaultProps= {
    title: "App"
}

export default Navbar;