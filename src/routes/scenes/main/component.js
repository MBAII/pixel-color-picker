import React, { Component } from 'react';
import Board from '../../interface/Board';
import Picker from '../../interface/Picker';
import whiteT from'../../assets/white.png';

export default class BoardPicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      length: 11,
      completed: false,
    };
    this.color = '#FFFFFF';
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
    this.getColor = this.getColor.bind(this);
    this.complete = this.complete.bind(this);
  }

  getColor(){
    return this.color;
  }

  handleChangeComplete(newColor){
    this.color = newColor.hex;
  }

  complete(){
    this.setState({completed: true});
  }

  render() {
    return (
      <div className = "board-and-picker" style = {{textAlign: 'center', width: this.state.width, height: this.state.width, margin: "0 auto"}}>
        <Board length={this.state.length} completed = {this.state.completed} getColor={ this.getColor }/>
        <img src={whiteT} style = {tShirtImageStyle}/>
        {this.state.completed ?
          null
          :
          <button style = {completeButtonStyle} onClick = { this.complete }>✔️</button>
        }
        {this.state.completed ?
          null
          :
          <Picker handleChangeComplete={ this.handleChangeComplete }/>
        }
      </div>
    );
  }

}

const completeButtonStyle = {
  'width': '50px',
  'height': '25px',
  'zIndex': 1000,
  'borderRadius': '10px',
  'color': 'white',
  'margin': '5px',
  'outline': 'none'
}

const tShirtImageStyle = {
  'position': 'fixed',
  'width': '600px',
  'zIndex': '-1',
  'left': '50%',
  'marginLeft': '-300px',
  'top': '80px'
}
