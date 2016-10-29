import React from "react";

class CreateEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      locaton: '',
      org_name: '',
      org_website: '',
      org_email: '',
      username: '',
      user_email: ''
    };
  }

  handleSubmit(e) {

  }

  handleChange(e) {

  }

  render() {
    return (
      <div>
        <h3>Create Events Here</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Date </label>
            <input type="text" onChange={this.handleChange}></input>
          </div>

          <div>
            <label>Time </label>
            <input type="text" onChange={this.handleChange}></input>
          </div>

          <div>
            <label>Location </label>
            <input type="text" onChange={this.handleChange}></input>
          </div>

          <div>
            <label>Organization </label>
            <input type="text" onChange={this.handleChange}></input>
          </div>

          <div>
            <label>Organization Web Address </label>
            <input type="text" onChange={this.handleChange}></input>
          </div>

          <div>
            <label>Organization Email </label>
            <input type="text" onChange={this.handleChange}></input>
          </div>

          <div>
            <label>Username </label>
            <input type="text" onChange={this.handleChange}></input>
          </div>

          <div>
            <label>User Email </label>
            <input type="text" onChange={this.handleChange}></input>
          </div>
          <br></br>
          <div>
            <button type="submit">SUBMIT </button>
          </div>

        </form>
      </div>
    );
  }
}

export default CreateEvents;
