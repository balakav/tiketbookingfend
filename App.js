import React, { Component } from 'react'
 import Home from './Home.js'
import Loginnn from './Loginnn.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Booktiket from './Booktiket.js';
import Yourbookings from './Yourbookings.js'
import Updatetheticket from './Updatetheticket.js'
import Busdatelis from './Busdatelis.js'
import Cancle1 from './Cancle1.js';
import Showdata from './Showdata.jsx';
import Del from './Del.js'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Loginnn/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Booktiket' element={<Booktiket/>}></Route>
          <Route path='/Yourbookings' element={<Yourbookings/>}></Route>
         <Route path='/Cancle1' element={<Cancle1/>}></Route> 
         <Route path='/Updatetheticket' element={<Updatetheticket/>}></Route> 
         <Route path='/Busdatelis' element={<Busdatelis/>}></Route>
         <Route path='/Showdata' element={<Showdata/>}></Route>
         <Route path='/Del' element={<Del/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    )
  }
}
export default App
 
