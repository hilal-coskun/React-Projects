import React, { Component } from 'react';
import posed from 'react-pose';
import UserConsumer from '../context';

var uniqid= require('uniqid');

const Animation=posed.div({
    visible:{
        opacity:1,
        applyAtStart: {
            display: "block"
        }
    },
    hidden:{
        opacity:0,
        applyAtStart:{
            display: "none"
        }
    }
});

class AddUser extends Component {

    state={
        visible:false,
        name:"",
        department:"",
        salary:""
    }

    changeVisibility(e){
        this.setState({
            visible : !this.state.visible
        })
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

    addUser(dispatch, e){

        e.preventDefault();
        const {name,salary,department} = this.state;

        const newUser={
            id: uniqid(),
            name:name,//sadece name de yazılabilir
            salary:salary,// salary
            department:department // department
        }

        dispatch({
            type:"ADD_USER",
            payload:newUser
        });

    }


    render() {

        const {visible,name, salary, department} = this.state;


        return <UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return (
                        <div className="col-md-8 mb-4">
                            <button onClick={this.changeVisibility.bind(this)} className="btn btn-dark mb-4 btn-block" type="submit">{visible ? "Hide Form" : "Show Form"}</button>
                            
                            <Animation pose={visible ? "visible" : "hidden"}>
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Add User Form</h4>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={this.addUser.bind(this,dispatch)}>
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
                                            <button className="btn btn-danger btn-block" type="submit">Add User</button>
                                        </form>
                                    </div>
                                </div>
                            </Animation>
                        </div>
                    )
                }
            }
        </UserConsumer>
        
        

        
    }
}


export default AddUser;