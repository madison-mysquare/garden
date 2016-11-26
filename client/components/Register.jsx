import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
      console.log("Constructor Props ", props);
    this.state = {
      name: "",
      password: "",
      changeName: props.changeName
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    var name = "Janice";
    this.state.changeName(name);
    this.setState({name:name});
  }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form className="form-signup"  onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Password</label>
            <input type="password"></input>
          </div>
          <div>
            <label>Re-enter Password</label>
            <input type="password"></input>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default Register;
