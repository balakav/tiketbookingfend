import React, { Component } from 'react'
import './Login.css'
import TextField from '@mui/material/TextField'
import { Avatar, Button } from '@mui/material'
import {Link} from 'react-router-dom'
// import  Password  from '@mui/icons-material';
export class Loginnn extends Component {
  render() {
    return (
    <>
    <img src="https://cdn.wallpapersafari.com/87/83/aINmBZ.jpg"  className='imglogin1'></img>
    <div className='loginpage1'>
      <div className='loginpro1'>
     <Avatar src="/broken-image.jpg"></Avatar>
      </div>
      <TextField  label="Email" inputProps={{style:{width:"350px"},}}/><br></br><br></br>
      <TextField  label="Password" type="Password" inputProps={{style:{width:"350px"},}}/><br></br><br></br><br></br>
     <Link to='/Home'><Button variant="contained" style={{width:"378px",height:"50px",}}>Sign Up</Button></Link><br></br><br></br>
     <a href='#'  className='link1'>Forgot Your Password</a>
      </div>
    </>

    )
  }
}
export default Loginnn;
