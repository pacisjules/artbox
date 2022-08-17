import React from "react";
import './App.css';



class App extends React.Component {
  state = {
    nowX: 0,
    nowY: 0,
    message:"",
    pressDown: false,
    pressUp: false,
    currentX: 0,
    currentY: 0,
    slide: 0,
  }

  handleMouseDown = (e) => {
    this.setState({
      nowX: e.clientX-100,
      nowY: e.clientY-100,
      message: "Mouse Down",
      pressDown: true,
      pressUp: false,
    })
  }

  handleMouseUp = (e) => {
    this.setState({
      currentX: this.state.nowX,
      currentY: this.state.nowY,
      message: "Mouse Up",
      pressDown: false,
      pressUp: true,
    })
  }

  handleMouseMove = (e) => {

    if(this.state.pressDown===true){
      this.setState({
        nowX: e.clientX-100,
        nowY: e.clientY-100,
        message: "Mouse Down",
      })
    }

    else if(this.state.pressUp===true){
      this.setState({
        nowX: this.state.currentX,
        nowY: this.state.currentY,
        message: "Mouse Up",
      })
    }

    else{
      this.setState({
        nowX: e.clientX-100,
        nowY: e.clientY-100,
        message: "",
      })
    }
  }

  handleOutMouseMove = (e) => {
    if(e.clientX>this.state.nowX || e.clientY>this.state.nowY){
    this.setState({
      message2: e.clientX+" and "+e.clientY,
    })
  }
  }

  render() {
    return (
      <>
      <div className="App" onMouseMove={this.handleMouseMove}>
        <div className='isi'
        onMouseDown={this.handleMouseDown} 
        onMouseUp={this.handleMouseUp} 
        onMouseMove={this.handleOutMouseMove}
        style={{
          top: this.state.nowY,
          left: this.state.nowX,
        }}
        /> 
      </div>

      <h3>X: {this.state.nowX} and Y: {this.state.nowY}</h3>
        <h3>Message: {this.state.message}</h3>
        <h3>Message2: {this.state.slide} %</h3>

      <div className="slide_container">
      <span className="bar" style={{
        width: this.state.slide+'%',
      }}></span>
      <input className="slider" type={'range'} min={'0'} max={'100'} value={this.state.slide} onChange={(e) => this.setState({slide: e.target.value})} />
      </div>  
        
      </>
    );
  }
}

export default App;
