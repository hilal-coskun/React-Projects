import React  from 'react';
import PropTypes from 'prop-types'; 

function Navbar(props){

    const {title} = props;

    return(
        <div className="mt-4">
            <h3>{title}</h3>
        </div>
    )
}

Navbar.propTypes ={
    title: PropTypes.string.isRequired
}

Navbar.defaultProps= {
    title: "App"
}

export default Navbar;