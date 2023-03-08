import React, { Component } from 'react'
import axios from 'axios';
import './Cancle.css'
export class Cancle1 extends Component {
    
    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'',
            age:'',
           genter:'',
            start:'',
            end:'',
            bustype:'',
            seattype:'',
            date:'',
            time:'',
        };
    }

    handleIdChange=(event)=>{
        this.setState({id:event.target.value})
    };
    handleNameChange=(event)=>{
        this.setState({name:event.target.value})
    };
    handleAgeChange=(event)=>{
        this.setState({age:event.target.value})
    };
    handleStartChange=(event)=>{
        this.setState({start:event.target.value})
    };
    handleEndChange=(event)=>{
        this.setState({end:event.target.value})
    };
    handleBustypeChange=(event)=>{
      this.setState({bustype:event.target.value})
  };
  handleSeattypeChange=(event)=>{
    this.setState({seattype:event.target.value})
};
handleGenterChange=(event)=>{
  this.setState({genter:event.target.value})
};
handleDateChange=(event)=>{
  this.setState({date:event.target.value})
};
handleTimeChange=(event)=>{
  this.setState({time:event.target.value})
};

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
          id:this.state.id,
          name:this.state.name,
          age:this.state.age ,
          genter:this.state.genter, 
          start:this.state.start ,
          end:this.state.end ,
          bustype:this.state.bustype, 
          seattype:this.state.seattype,
          date:this.state.date,
          time:this.state.time,
        };
        
        axios.post('http://127.0.0.1:8080/delete', data)
    }
  render() {
    return (
        <body>
        <center>
      <div className='container1'>
      <form onSubmit={this.handleSubmit}>
          <h1>Cancle the tiket</h1>
          
          <div className='row'>
              <label>id </label>&nbsp;&nbsp;
              <input type="number" id='sno' placeholder='  Enter your id...' value={this.state.id}
                  onChange={this.handleIdChange}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <label>name : </label>&nbsp;&nbsp;
              <input type="text" id='itemname' placeholder='  Enter your name...' value={this.state.name}
                  onChange={this.handleNameChange}/>
              
          </div>
         
          <div className='row'>
              <label>genter</label>&nbsp;&nbsp;
              <input type="text" id='category' placeholder='  Enter your genter...' value={this.state.genter}
                  onChange={this.handleGenterChange}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>age </label>&nbsp;&nbsp;
              <input type="number" id='quantity' placeholder='  Enter your age...' value={this.state.age}
                  onChange={this.handleAgeChange}/>
          </div>
          
          

          <div className='row'>
              <label>start </label>&nbsp;&nbsp;
              <input type="text" id='quantity' placeholder='  Enter your start...' value={this.state.start}
                  onChange={this.handleStartChange}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>end</label>&nbsp;&nbsp;
              <input type="text" id='price' placeholder='  Enter the end..' value={this.state.end}
                  onChange={this.handleEndChange}/>
          </div>
          

          
         

          <div className='row'>
              <label>bustype</label>&nbsp;&nbsp;
              <input type="text" id='price' placeholder='  Enter the bustype..' value={this.state.bustype}
                  onChange={this.handleBustypeChange}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
              <label>seattype</label>
              <input type="text" id='price' placeholder='  Enter the seattype..' value={this.state.seattype}
                  onChange={this.handleSeattypeChange}/>
        
          </div>


          <div className='row'>
              <label>date</label>&nbsp;&nbsp;
              <input type="date" id='price' placeholder='  Enter the date..' value={this.state.date}
                  onChange={this.handleDateChange}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>time</label>&nbsp;&nbsp;
              <input type="time" id='price' placeholder='  Enter the time..' value={this.state.time}
                  onChange={this.handleTimeChange}/>
          </div><br></br>

          
         
         
<center>
          <div className='row'>
              <button className='btn btn-primary'>Submit</button>
          </div>
          </center>
      </form>
      </div>
      </center>
      </body>
      
    )
  }
}

export default Cancle1