import React, { Component } from 'react';
import Pixel from './Pixel';

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      length: 11,
      width: window.innerWidth * 0.3,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.getPixels = this.getPixels.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
    this.getColor = this.getColor.bind(this);
  }

  updateDimensions() {
    this.setState({width: window.innerWidth * 0.3 });
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  getPixels(){
    var pixels = [];
    for(var i = 0; i < this.state.length; i++) {
      for(var j = 0; j < this.state.length; j++) {
        var className = 'pixel' + i.toString() + j.toString()
        pixels.push(<Pixel x={j} y={i} color='#FFFFFF' className = {className} key = {className} count={this.state.length} getColor={this.getColor}/>);
      }
    }
    return pixels;
  }

  getColor(){
    return this.props.getColor();
  }

  handleChangeComplete(newColor){
    this.setState({color: newColor.hex});
  }

  render() {
    return (
      <div
        className = "pixel-board"
        style = {{
          width: this.state.width,
          height: this.state.width,
          margin: "0 auto",
          marginTop: "30px",
          borderStyle: 'solid',
          borderWidth: '1px',
        }}
      >
        {this.getPixels()}
      </div>
    );
  }

}


export default Board;
