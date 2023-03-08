import React from 'react'
import './Home.css'
import {AppBar, Tabs, Tab} from '@mui/material'
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom'
import Typography from '@mui/material/Typography';
import { deepPurple } from '@mui/material/colors';
class Home extends React.Component {
  render() {
    return (
      <>
      <div className="homenavi1">
      <AppBar title="My App" style={{height:"70px"}}>
        <Tabs>
          <Tab label="Home" style={{fontWeight:"bold",color:"black",paddingBottom:"50px"}}/>
          <Link to="/Busdateils"><Tab label="Bus datails" style={{fontWeight:"bold",color:"black",paddingTop:"25px"}}/></Link>
          <Link to="/Booktiket"><Tab label="Book Ticket" style={{fontWeight:"bold",color:"black",paddingTop:"25px"}}/></Link>
          <Link to="/Yourbookings"><Tab label="Your Bookings" style={{fontWeight:"bold",color:"black",paddingTop:"25px"}}/></Link>
          <h2 className="logoword1">KAVI TRAVELS</h2>;
          <img src="https://static.vecteezy.com/system/resources/thumbnails/008/786/593/small/bus-logo-travel-bus-logo-vector.jpg" className="logohome1"></img>
        </Tabs>
      </AppBar><br></br><br></br><br></br><br></br><br></br><br></br>
      <div className='wordhome'>
      <p className="homepara">THE WORLD IS A BOOK AND THOSE <br></br><br></br>WHO DO NOT TRAVEL READ ONLY ONE PAGE</p>
      <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsbGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80" className='pichome2'></img>
      </div>
      </div>
      </>
    )
    
  }
}
export default Home;