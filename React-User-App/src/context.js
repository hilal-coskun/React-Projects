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
        default:
            return state;
    }
}

export class UserProvider extends Component{
//children.props otomatik olarak gönderiliyor o sebepten dolayı props yollamadık

state={

    users: [
        {
            id:"unique-1",
            name:"Hilal Coşkun",
            salary:"5000",
            department:"IT"
        },
        {
            id:"unique-2",
            name:"Hilal Coşkun",
            salary:"6000",
            department:"Finance"
        },
        {
            id:"unique-3",
            name:"Hilal Coşkun",
            salary:"7000",
            department:"IT"
        }
        ],
        dispatch: action =>{
            this.setState(state => reducer(state, action))
        }
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


