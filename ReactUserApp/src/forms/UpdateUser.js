import React, { Component } from 'react';
import UserConsumer from '../context';
import axios from "axios";


class UpdateUser extends Component {

    state={
        visible:false,
        name:"",
        department:"",
        salary:"",
        error:""
    }


    changeName(e){
        this.setState({
            name: e.target.value
        })
    }

    changeDepartment(e){
        this.setState({
            department: e.target.value
        })
    }

    changeSalary(e){
        this.setState({
            salary: e.target.value
        })
    }

    validateForm = () =>{
        const {name, salary, department}= this.state;

        if(name === "" || salary === "" || department === ""){
            return false;
        }
        return true;
    }
    
    componentDidMount = async () =>{
        const {id} = this.props.match.params;

        const response = await axios.get(`http://localhost:3004/users/${id}`);
        
        const {name, salary, department} = response.data;
        this.setState({
            name,
            salary,
            department
        });

    
    }

    updateUser = async(dispatch, e) => {

        e.preventDefault();
        //UpdateUser

        const {name,salary,department} = this.state;
        const {id} = this.props.match.params;
        const updatedUser = {
            name,
            salary,
            department
        }

        if(!this.validateForm){
            this.setState({
                error: true
            })
            return;
        }

        const response = await axios.put(`http://localhost:3004/users/${id}`, updatedUser)

        dispatch({type:"UPDATE_USER", payload : response.data});

        //Redirect
        this.props.history.push("/");
    }


    render() {

        const {name, salary, department,error} = this.state;


        return <UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return (
                        <div className="col-md-8 mb-4">
                            
                            
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Update User Form</h4>
                                    </div>
                                    <div className="card-body">
                                    {
                                            error ?
                                            <div className="alert alert-danger">
                                                Please check your information !
                                            </div>
                                            : null
                                        }
                                        <form onSubmit={this.updateUser.bind(this,dispatch)}>
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input 
                                                type="text"
                                                name="name"
                                                id="id"
                                                placeholder="Enter Name"
                                                className="form-control"
                                                value={name}
                                                onChange={this.changeName.bind(this)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="department">Department</label>
                                                <input 
                                                type="text"
                                                name="department"
                                                id="department"
                                                placeholder="Enter Department"
                                                className="form-control"
                                                value={department}
                                                onChange={this.changeDepartment.bind(this)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="salary">Salary</label>
                                                <input 
                                                type="text"
                                                name="salary"
                                                id="salary"
                                                placeholder="Enter Salary"
                                                className="form-control"
                                                value={salary}
                                                onChange={this.changeSalary.bind(this)}
                                                />
                                            </div>
                                            <button className="btn btn-danger btn-block" type="submit">Update User</button>
                                        </form>
                                    </div>
                                </div>
                        </div>
                    )
                }
            }
        </UserConsumer>
        
        

        
    }
}


export default UpdateUser;