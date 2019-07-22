import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink
} from "mdbreact";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Hero from "./components/Hero";
import TempoPicker from "./components/TempoPicker";
import StartButton_BeatDisplay from "./components/StartButton_BeatDisplay";




class App extends Component {
  state = {
    tempo: 60,
    quarter: "",
    eigth: "",
    sixteenth: "",
    eigthTriplet: "",
    sextuplet:"",
  };

  setTempo = (tempo) => {
    this.setState({
      tempo: tempo
    })
  }

  convertTime = (tempo) => {
    let seconds = 60 / tempo;   
    let milliseconds = seconds * 1000;   
    let quarter = milliseconds;
    let eigth = quarter / 2;
    let sixteenth = eigth / 2;
    let eigthTriplet = quarter / 3;
    let sextuplet = eigthTriplet / 3;
    this.setState({
      quarter: quarter,
      eigth: eigth,
      sixteenth: sixteenth,
      eigthTriplet: eigthTriplet,
      sextuplet: sextuplet,
    })

  }
  

  render() {
    

    const { collapseID } = this.state;

    return (
      <BrowserRouter>
        <Hero />
        <TempoPicker setTempo={this.setTempo} />
        <StartButton_BeatDisplay state={this.state} convertTime={this.convertTime} />
      </BrowserRouter>
    )
  }
}

export default App;
