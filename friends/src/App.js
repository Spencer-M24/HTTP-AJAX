import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { FriendsList } from "./components/FriendList"

import { Col, Button, Form, Input } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      
        name: "UserName",
        age: "Age Here",
        email: "Email"
      
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  }

  // handleChange = event => {
  //   event.persist();
  //   this.setState(prevState => {
  //     return {
  //       newFriend: {
  //         ...prevState.newFriend,
  //         [event.target.name]: event.target.value
  //       }
  //     };
  //   });
  // };




  handleChange = event => {
    const {name, value } = event.target;
    this.setState(prevState => {
      return {
        newFriend: {
          ...prevState.newFriend,
          [name]: value
        }
      };
    });
  };

  

  addNewFriend = () => {
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };

  updateFriend = id => {
    console.log("ID", id, `http://localhost:5000/friends/${id}` , this.state.name);
    const updatedFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    axios
      .put(`http://localhost:5000/friends/${id}`, updatedFriend)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };

  deleteFriend = id => {
    
    const deletedFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    axios

      .delete(`http://localhost:5000/friends/${id}`, deletedFriend)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };




  render() {
    return (
      <div className="app">
        <h1>  Lambda Friends </h1>



        <Form >
          <Col sm={5}>
            <Input
              onChange={this.handleChange}
              name="name"
              value={this.state.name}
              placeholder="Name:  "
              type="text" />

            <Input
              onChange={this.handleChange}
              name="age"
              value={this.state.age}
              placeholder="Age:  "
              type="number" />

            <Input
              onChange={this.handleChange}
              name="email"
              value={this.state.email}
              placeholder="email:  "
              type="email" />

            <br />
            <Button color="primary" onClick={this.addNewFriend}>
              Adding Friend
          </Button>

            <Button color="danger" onClick={id => this.updateFriend(id)}>
              Updating Friend
        </Button>
          </Col>
        </Form>
        <FriendsList
          friends={this.state.friends}
          handleEdit={this.updateFriend}
          handleDelete={this.deleteFriend} />

      </div>
    );
  }
}

export default App;