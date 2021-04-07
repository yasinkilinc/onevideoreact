import React, { Component } from "react";

import AddUser from "./components/AddUser";
import Users from "./components/Users"

class App extends Component{

  addUser(newUser){

    let updatedUsers = this.state.users;

    updatedUsers.push(newUser);

    this.setState({
      users : updatedUsers
    })


  }


  deleteUser(id){
    let updatedUsers = this.state.users;

    updatedUsers = updatedUsers.filter( user => user.id !== id );

    this.setState({
      users: updatedUsers
    })
  }

  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);

    this.state = {
      users: [
        {
          id: 1,
          name : "aa",
          email: "aa@aa.com"
        },
        {
          id: 2,
          name : "bb",
          email: "bb@bb.com"
        },
        {
          id: 3,
          name : "cc",
          email: "cc@cc.com"
        }
      ]
    };
  }

  render (){
    return (
      <div className="container">
     <h4>User App</h4>
     <hr/>
     <AddUser addUser = {this.addUser}/>
     <hr/>
     <Users deleteUser = {this.deleteUser}  users = {this.state.users}></Users>
      </div>
    );
  }
}

export default App;
