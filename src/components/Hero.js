import React, { Component } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import { BrowserRouter, Route, Switch } from "react-router-dom";





class App extends Component {
  state = {
    
  };

  

  render() {
    

    const { collapseID } = this.state;

    return (
      <div className="hero">
        <div className="wrapper">
          <h1 className="text-center pt-5 pb-5">Rhythm App</h1>        
        </div>
      </div>

    )
  }
}

export default App;
