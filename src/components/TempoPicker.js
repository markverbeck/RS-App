
import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";

class TempoPicker extends Component {

  state = {
    tempo: 60
  }

  handleChange = (event) => {
    this.props.setTempo(event.target.value);
    this.setState({
      tempo: event.target.value
    })  
  }

  changeTempo = () => {
    
  }

  
  render () {

  let options = [];
  for (var i = 60; i < 201; i++) {
    options.push(i);
  }
  

    return(
      <div>
          <h2>Tempo: {this.state.tempo}</h2>
        <select className="browser-default custom-select" value={this.state.tempo} onChange={this.handleChange}>
          <option>Choose your tempo</option>
          {options.map((number) =>
    
            <option key={number.toString()} value={number}>{number}</option>

             
          )}
          
        </select>
      </div>
    );
  }
}

export default TempoPicker;