import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

import Board from '../../interface/Board';
import Picker from '../../interface/Picker';
import Header from '../../interface/Header';
import Cart from '../../interface/AddToCart';
import whiteT from'../../assets/white.png';

export default class BoardPicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      length: 11,
      completed: false,
      firstRender: true,
      modalOpen: false,
    };
    this.color = '#FFFFFF';
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
    this.getColor = this.getColor.bind(this);
    this.complete = this.complete.bind(this);
    this.sendToServer = this.sendToServer.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
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

  sendToServer(){
    this.props.submitOrder();
  }

  onOpenModal() {
    this.setState({ modalOpen: true });
  };

  onCloseModal() {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <main>
        <Header />
        <div className = "board-and-picker" style = {{textAlign: 'center', width: this.state.width, height: this.state.width, margin: "0 auto"}}>
          <Board length={this.state.length} firstRender={this.state.firstRender} completed = {this.state.completed} getColor={ this.getColor }/>
          <img src={whiteT} style = {tShirtImageStyle}/>
          <div style = {buttonContainerStyle}>
            <button style = {buttonStyle} onClick = { this.complete }>{this.state.completed ? 'edit':'done'}</button>
            {this.state.completed &&
              <button style = {buttonStyle} onClick = {this.onOpenModal}> Add to Bag </button> }
          </div>
          <Picker firstRender={this.state.firstRender} open={!this.state.completed} handleChangeComplete={ this.handleChangeComplete }/>
        </div>
        <Modal open={this.state.modalOpen} onClose={this.onCloseModal} little>
          <Cart />
        </Modal>
      </main>
    );
  }

}

const buttonContainerStyle = {
  'position': 'fixed',
  'left': '80%',
  'top': '600px',
  'zIndex': 1000,
}

const buttonStyle = {
  'height': '25px',
  'borderRadius': '10px',
  'color': '#8BC34A',
  'borderColor': '#8BC34A',
  'margin': '5px',
}


const tShirtImageStyle = {
  'position': 'fixed',
  'width': '500px',
  'zIndex': '-1',
  'left': '50%',
  'marginLeft': '-250px',
  'top': '130px'
}
