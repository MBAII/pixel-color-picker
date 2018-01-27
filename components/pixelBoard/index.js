import React, { Component } from 'react';
import Board from './Board';
import Picker from './Picker';
import { changeColor } from '../../actions/changeColor'

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
        <Image
          source={require('../../asset/white.png')}
        />
        <button style = {completeButtonStyle} onClick = { this.complete }>✔️</button>
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
