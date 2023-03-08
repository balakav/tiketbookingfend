import React, { Component } from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
export class Yourbookings extends Component {
  render() {
    return (
      <>
      <div className='yourbooking1'>
      <p>If you wish to see your last booking datails click the button</p>
      <Link to="/Showdata"><Button variant="contained" style={{width:"378px",height:"50px",}}>Show Your last Bookings</Button></Link><br></br><br></br><br></br>
      <p>If you wish cancel your Ticket click the button</p>
      <Link to="/Del"><Button variant="contained" style={{width:"378px",height:"50px",}}>Cancel Ticket</Button></Link><br></br><br></br><br></br>
      <p>If you are changeing the plans click the button</p>
      <Link to="/Updatetheticket"><Button variant="contained" style={{width:"378px",height:"50px",}}>Update the Ticket</Button></Link>
      </div>
      </>
    )
  }
}

export default Yourbookings