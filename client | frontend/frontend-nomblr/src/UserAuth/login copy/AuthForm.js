import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import Auth from "../utils/Auth";

class AuthForm extends Component {
  state = {
    username: "",
    password: ""
  };

  registerUSer = e => {
    e.preventDefault();
    const { username, password } = this.state;

    axios.post(
      "/users/new",
      { username, password }
        .then(() => {
          Auth.authenticateUser(username);
          axios.post("/users/new", { username, password });
        })
        .then(() => {
          this.props.checkAuthenticateStatus();
        })
        .then(() => {
          this.setState({
            username: "",
            password: ""
          });
        })
    );
  };

  logoutUser = e => {
    e.preventDefault();
    const { username, password } = this.state;

    axios
      .post("/users/login", { username, password })
      .then(() => {
        Auth.authenticateUser(username);
      })
      .then(() => {
        this.props.checkAuthenticateStatus();
      })
      .then(() => {
        this.setState({
          username: "",
          password: ""
        });
      });
  };

  render() {
    return <div>meow</div>;
  }
}
