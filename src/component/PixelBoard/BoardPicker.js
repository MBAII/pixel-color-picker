import React, { Component } from 'react';
import Board from './Board';
import Picker from './Picker';


class BoardPicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      length: 10,
    };
    this.color = '#FF0000';
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
    this.getColor = this.getColor.bind(this);
  }

  getColor(){
    return this.color;
  }

  handleChangeComplete(newColor){
    this.color = newColor.hex;
  }

  render() {
    return (
      <div className = "board-and-picker" style = {{width: this.state.width, height: this.state.width, margin: "0 auto"}}>
        <Board getColor={ this.getColor }/>
        <Picker handleChangeComplete={ this.handleChangeComplete }/>
      </div>
    );
  }

}


export default BoardPicker;
