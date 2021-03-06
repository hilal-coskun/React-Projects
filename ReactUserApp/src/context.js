import axios from 'axios';
import React , {Component} from 'react';

const UserContext = React.createContext();
//Provider , Consumer (sağlayıcı - tüketici)

const reducer = (state, action) =>{
    switch(action.type){
        case "DELETE_USER":
            return{
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
        
        case "ADD_USER":
            return{
                ...state,
                users: [...state.users, action.payload]
            }

        case "UPDATE_USER":
            return{
                ...state,
                users: [state.users.map(user => user.id === action.payload.id ? action.payload : user)]
            }

        default:
            return state;
    }
}

export class UserProvider extends Component{
//children.props otomatik olarak gönderiliyor o sebepten dolayı props yollamadık

state={
        users:[],
        dispatch: action =>{
            this.setState(state => reducer(state, action))
        }
    }

    componentDidMount = async () =>{
        const response = await axios.get("http://localhost:3004/users");
        this.setState({
            users: response.data
        })
    }


render(){
//this.props.children ==> app componentini temsil
        return(
            <UserContext.Provider value={this.state}>
                {this.props.children} 
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;


