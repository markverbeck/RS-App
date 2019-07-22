import React, { Component } from "react";
import { MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import { BrowserRouter, Route, Switch } from "react-router-dom";





class BeatDisplay extends Component {
  state = {
    quarter: 1,
    eigth: 1,
    sixteenth: 1,
    eigthTriplet: 1,
    sextuplet: 1,
    timeRunning: false,
    quarterInterval: '',
    eigthInterval: '',
    sixteenthInterval: '',
    eigthTripletTripletInterval: '',
    sextupletInterval: '',
    backgroundL: "white",
    colorL: "black",
    background1: "blue",
    color1: "white",
    background2: "green",
    color2: "white",
    background3: "red",
    color3: "white",
    background4: "yellow",
    color4: "white",
  };



  convertTime = () => {

    this.props.convertTime(this.props.state.tempo);
    
    setTimeout(this.startInterval, 500)
  }

startInterval = () => {


  if(this.state.timeRunning === false){
    this.setState({
      timeRunning: true,
      quarterInterval: setInterval(this.quarterCount, this.props.state.quarter),
      eigthInterval: setInterval(this.eigthCount, this.props.state.eigth),
      sixteenthInterval: setInterval(this.sixteenthCount, this.props.state.sixteenth),
      eigthTripletTripletInterval: setInterval(this.eigthTripletCount, this.props.state.eigthTriplet),
      sextupletInterval: setInterval(this.sextupletCount, this.props.state.sextuplet)
    });
    console.log(this.props.state);
    
  }else{
    this.setState({
      quarter: 1,
      eigth: 1,
      sixteenth: 1,
      eigthTriplet: 1,
      sextuplet: 1,
      timeRunning: false
    });

    
    clearInterval(this.state.quarterInterval);
    clearInterval(this.state.eigthInterval);
    clearInterval(this.state.sixteenthInterval);
    clearInterval(this.state.eigthTripletTripletInterval);
    clearInterval(this.state.sextupletInterval);
  }
     
}


quarterCount = () => {



  if(this.state.quarter === 4){

    this.setState({
      quarter: 1,
    })         

  }else{

    this.setState({
      quarter: this.state.quarter + 1,
    })
      
  }

  if(this.state.backgroundL === "white"){
    this.setState({
      backgroundL: "black",
      colorL: "white"
    })
  }else{
    this.setState({
      backgroundL: "white",
      colorL: "black"
    })
  }
  
}

eigthCount = () => {

  if(this.state.eigth === 2){

    this.setState({
      eigth: 1,
    })         

  }else{

    this.setState({
      eigth: this.state.eigth + 1,
    })
      
  }

  if(this.state.background1 === "white"){
    this.setState({
      background1: "blue",
      color1: "white"
    })
  }else{
    this.setState({
      background1: "white",
      color1: "black"
    })
  }

  
}

sixteenthCount = () => {

  if(this.state.sixteenth === 4){

    this.setState({
      sixteenth: 1,
    })         

  }else{

    this.setState({
      sixteenth: this.state.sixteenth + 1,
    })
      
  }

  if(this.state.background2 === "white"){
    this.setState({
      background2: "green",
      color2: "white"
    })
  }else{
    this.setState({
      background2: "white",
      color2: "black"
    })
  }

  
}

eigthTripletCount = () => {

  if(this.state.eigthTriplet === 3){

    this.setState({
      eigthTriplet: 1,
    })         

  }else{

    this.setState({
      eigthTriplet: this.state.eigthTriplet + 1,
    })
      
  }

  if(this.state.background3 === "white"){
    this.setState({
      background3: "red",
      color3: "white"
    })
  }else{
    this.setState({
      background3: "white",
      color3: "black"
    })
  }

  
}

sextupletCount = () => {

  if(this.state.sextuplet === 6){

    this.setState({
      sextuplet: 1,
    })         

  }else{

    this.setState({
      sextuplet: this.state.sextuplet + 1,
    })
      
  }

  if(this.state.background4 === "white"){
    this.setState({
      background4: "yellow",
      color4: "white"
    })
  }else{
    this.setState({
      background4: "white",
      color4: "black"
    })
  }

  
}

  

  render() {
    

    const { collapseID } = this.state;

    return (
      <div className="beatDisplay">
        <div className="wrapper">
         <MDBRow>
          <MDBCol lg="4">
            <MDBBtn color="info" className="text-center startButton" onClick={this.convertTime}><MDBIcon icon="music" /></MDBBtn>

          </MDBCol>
          <MDBCol lg="4" >
            <h2>Quarter: {this.state.quarter}</h2>
            <h2>Eigth: {this.state.eigth}</h2>
            <h2>Sixteenth: {this.state.sixteenth}</h2>
          </MDBCol>
          <MDBCol lg="4" >
            <h2>Eigth Triplet: {this.state.eigthTriplet}</h2>
            <h2>Sextuplet: {this.state.sextuplet}</h2>

          </MDBCol>
         </MDBRow>

         <MDBRow className="wrapper">
          
          <MDBCol lg="4" style={{background: this.state.backgroundL, color: this.state.colorL, height: "100px", border: "1px solid blue"}}>
            <h2>Quarter Notes</h2>
          </MDBCol>

          <MDBCol lg="2" style={{background: this.state.background1, color: this.state.color1, height: "100px", border: "1px solid blue"}}>
            <h2>Eigth Notes</h2>
          </MDBCol>

          <MDBCol lg="2" style={{background: this.state.background2, color: this.state.color2, height: "100px", border: "1px solid blue"}}>
            <h2>Sixteenth Notes</h2>
          </MDBCol>

          <MDBCol lg="2" style={{background: this.state.background3, color: this.state.color3, height: "100px", border: "1px solid blue"}}>      
            <h2>Triplets</h2>
          </MDBCol>

          <MDBCol lg="2" style={{background: this.state.background4, color: this.state.color4, height: "100px", border: "1px solid blue"}}>
            <h2>Sextuplets</h2>
          </MDBCol>

         </MDBRow>
        
        </div>
      </div>

    )
  }
}

export default BeatDisplay;
