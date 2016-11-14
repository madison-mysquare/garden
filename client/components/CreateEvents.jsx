import React from "react";
import { browserHistory } from "react-router";

class CreateEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      date: '',
      time: '',
      location: '',
      org_name: '',
      org_website: '',
      org_email: '',
      username: '',
      user_email: ''
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleOrgNameChange = this.handleOrgNameChange.bind(this);
    this.handleOrgSiteChange = this.handleOrgSiteChange.bind(this);
    this.handleOrgMailChange = this.handleOrgMailChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleUserMailChange = this.handleUserMailChange.bind(this);
  }

  handleSubmit(e) {
    browserHistory.push(`/`);
    e.preventDefault();
    this.props.createEvent(this.state);
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }
  handleDateChange(e) {
    this.setState({
      date: e.target.value,
    });
  }
  handleTimeChange(e) {
    this.setState({
      time: e.target.value,
    });
  }
  handleLocationChange(e) {
    this.setState({
      location: e.target.value,
    });
  }
  handleOrgNameChange(e) {
    this.setState({
      org_name: e.target.value,
    });
  }
  handleOrgSiteChange(e) {
    this.setState({
      org_website: e.target.value,
    });
  }
  handleOrgMailChange(e) {
    this.setState({
      org_email: e.target.value,
    });
  }
  handleUserChange(e) {
    this.setState({
      username: e.target.value,
    });
  }
  handleUserMailChange(e) {
    this.setState({
      user_email: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h3>Create Events Here</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title </label>
            <input type="text" onChange={this.handleTitleChange}></input>
          </div>
          <div>
            <label>Date </label>
            <input type="text" onChange={this.handleDateChange}></input>
          </div>

          <div>
            <label>Time </label>
            <input type="text" onChange={this.handleTimeChange}></input>
          </div>

          <div>
            <label>Location </label>
            <input type="text" onChange={this.handleLocationChange}></input>
          </div>

          <div>
            <label>Organization </label>
            <input type="text" onChange={this.handleOrgNameChange}></input>
          </div>

          <div>
            <label>Organization Web Address </label>
            <input type="text" onChange={this.handleOrgSiteChange}></input>
          </div>

          <div>
            <label>Organization Email </label>
            <input type="text" onChange={this.handleOrgMailChange}></input>
          </div>

          <div>
            <label>Username </label>
            <input type="text" onChange={this.handleUserChange}></input>
          </div>

          <div>
            <label>User Email </label>
            <input type="text" onChange={this.handleUserMailChange}></input>
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
