import React, { Component } from 'react'
import TextField from '@mui/material/TextField'
export class Home1 extends Component {
  render() {
    return (
      <>
       < TextField  label="Email" inputProps={{style:{width:"350px"},}}/><br></br><br></br>
      <TextField  label="Password" type="Password" inputProps={{style:{width:"350px"},}}/><br></br><br></br><br></br>
      </>
    )
  }
}

export default Home1