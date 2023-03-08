import axios from "axios";
import React, { Component } from "react";
import './Showdata.css'
class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        
      <table border={1}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Genter</th>
          <th>Age</th>
          <th>Start</th>
          <th>End</th>
          <th>Bustype</th>
          <th>Seattype</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.genter}</td>
            <td>{user.age}</td>
            <td>{user.start}</td>
            <td>{user.end}</td>
            <td>{user.bustype}</td>
            <td>{user.seattype}</td>
            <td>{user.date}</td>
            <td>{user.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
    );
  }}
  
export default Showdata;