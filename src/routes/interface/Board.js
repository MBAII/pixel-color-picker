import React, { Component } from 'react';
import Pixel from './Pixel';

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      length: this.props.length,
      width: this.props.completed ? window.innerWidth * 0.2 : window.innerWidth * 0.4,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.getPixels = this.getPixels.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
    this.getColor = this.getColor.bind(this);
  }

  updateDimensions() {
    if (this.props.completed === true) {
      this.setState({width: window.innerWidth * 0.2 });
    }else{
      this.setState({width: window.innerWidth * 0.4 });
    }
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
        var className = 'pixel' + i.toString() + '-' + j.toString()
        pixels.push(
          <Pixel
            x={j}
            y={i}
            color='#FFFFFF'
            className = {className}
            key = {className}
            count={this.state.length}
            getColor={this.getColor}
          />
        );
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
        style = {
          this.props.completed ?
          {
            width: '180px',
            height: '180px',
            margin: "0 auto",
            marginTop: "200px",
          }
          :
          {
            width: this.state.width,
            height: this.state.width,
            margin: "0 auto",
            marginTop: "20px",
            borderStyle: 'solid',
            borderWidth: '1px',
          }
        }
      >
        {this.getPixels()}
      </div>
    );
  }

}


export default Board;
