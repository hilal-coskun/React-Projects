import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import UserConsumer from '../context';

class User extends Component {

    constructor(props){
        super(props);
        this.state={
            isVisible: false
        }
    }

    onClickEvent(e){
        
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    onDeleteUser(dispatch,e){
        const {id,deleteUser} = this.props;
        //consumer dispatch
        dispatch({type:"DELETE_USER",payload:id});
    }

    render() {
        const {name,salary,department} = this.props;
        const  {isVisible} = this.state;

        return (
            <UserConsumer>
                {
                    value =>{
                        const {dispatch} = value;
                        return (
                            <div className="col-md-8">
                                <div className="card mt-4" style={isVisible ? {backgroundColor: "#d9dbde"} :{backgroundColor:"null"}}>
                                    <div className="card-header d-flex justify-content-between">
                                        <h4 className="d-inline" onClick={this.onClickEvent.bind(this)}>
                                            {name}
                                        </h4>
                                        <i className="fa fa-trash-o mt-2" style={{cursor:'pointer'}} onClick={this.onDeleteUser.bind(this,dispatch)} aria-hidden="true"></i>
                                    </div>
                                    {
                                        isVisible ? <div className="card-body">
                                        <p className="card-text">
                                            Salary: {salary}
                                        </p>
                                        <p className="card-text">
                                            Department: {department}
                                        </p>
                                        </div> : null
                                    }
                                </div>
                            </div>
                        )
                    
                    }
                }
            </UserConsumer>
        )


        
    }
}

User.propTypes= {
    name : PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    salary:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired
}

User.defaultProps={
    name:"Bilgi yok",
    department: "Bilgi yok",
    salary:"Bilgi yok"
}

export default User;