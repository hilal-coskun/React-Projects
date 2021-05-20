import './App.css';
import React, {Component} from 'react';
import Navbar from './layout/Navbar';
import Users from './components/Users';
import AddUser from './forms/AddUser';
import UpdateUser from './forms/UpdateUser';
import Test from './components/Test';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './pages/NotFound';
import Contribute from './pages/Contribute';
/*
const Home = () =>{
  return(
    <h3>Home Page</h3>
  )
}

const About = () =>{
  return(
    <h3>About Page</h3>
  )
}


const NotFound = () =>{
  return(
    <h3>Not Found</h3>
  )
}
*/

class App extends Component {

    // <Test test="deneme"/>
    // <Navbar title="User App "/>
    // <hr/>
    // <AddUser/>
    // <Users />

//Switch == tanımlı url dışında url girilmesi

  render(){
    return (
      <Router>
        <div className="container">
          <Test test="deneme"/>
          <Navbar title="User App "/>
          <hr/>   
          
          <Switch>
          <Route exact path="/" component={Users}/>
          <Route exact path="/add" component={AddUser}/>
          <Route exact path="/github" component={Contribute}/>
          <Route exact path="/edit/:id" component={UpdateUser}/>
          <Route component={NotFound}/>
          </Switch>
          
        </div>
      </Router>
    );
  }
  
}

export default App;
