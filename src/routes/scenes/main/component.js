import React, { Component } from 'react';
import Board from '../../interface/Board';
import Picker from '../../interface/Picker';
import Header from '../../interface/Header';
import whiteT from'../../assets/white.png';

export default class BoardPicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      length: 11,
      completed: false,
      firstRender: true,
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
    this.setState({
      completed: !this.state.completed,
      firstRender: false,
    });
  }

  render() {
    return (
      <main>
        <Header />
        <div className = "board-and-picker" style = {{textAlign: 'center', width: this.state.width, height: this.state.width, margin: "0 auto"}}>
          <Board length={this.state.length} firstRender={this.state.firstRender} completed = {this.state.completed} getColor={ this.getColor }/>
          <img src={whiteT} style = {tShirtImageStyle}/>
          <button style = {completeButtonStyle} onClick = { this.complete }>{this.state.completed ? 'edit':'done'}</button>
          <Picker firstRender={this.state.firstRender} open={!this.state.completed} handleChangeComplete={ this.handleChangeComplete }/>
        </div>
      </main>
    );
  }

}

const completeButtonStyle = {
  'width': '50px',
  'height': '25px',
  'zIndex': 1000,
  'borderRadius': '10px',
  'color': '#8BC34A',
  'borderColor': '#8BC34A',
  'margin': '5px',
  'position': 'fixed',
  'right': '10%',
  'top': '600px'
}

const tShirtImageStyle = {
  'position': 'fixed',
  'width': '500px',
  'zIndex': '-1',
  'left': '50%',
  'marginLeft': '-250px',
  'top': '130px'
}
