import React, { Component } from "react";
import Input from "./common/input";

export default class login extends Component {
  state = {
    account: {
      username: "",
      password: ""
    },
    errors: {}
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;
    console.log(account);
    if (account.username.trim() === "")
      errors.username = "Username is required!";
    if (account.password.trim() === "")
      errors.password = "Password is required!";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    console.log("Submitted");
  };
  render() {
    const { account, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="username"
          type="email"
          onChange={this.handleChange}
          value={account.username.value}
          label="Username"
          error={errors.username}
        />
        <Input
          name="password"
          type="password"
          onChange={this.handleChange}
          value={account.password.value}
          label="Password"
          error={errors.password}
        />
        {/* <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            name="username"
            type="email"
            onChange={this.handleChange}
            value={account.username.value}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div> */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
