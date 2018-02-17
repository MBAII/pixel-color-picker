import React, { Component } from 'react';
import { SwatchesPicker } from 'react-color';
import {Motion, spring, presets} from 'react-motion';

class Picker extends Component {

  render() {
    if(this.props.firstRender){
      return (
        <div style={pickerContainerStyle}>
          <SwatchesPicker height='200px' width = '100%' onChangeComplete = { this.props.handleChangeComplete }/>
        </div>
      );
    }
    return (
      <div style={pickerContainerStyle}>
        {this.props.open ?
          <Motion defaultStyle={{height: 0}} style={{height: spring(200, presets.gentle)}}>
            {interpolatingStyle => <SwatchesPicker height={interpolatingStyle.height} width = '100%' onChangeComplete = { this.props.handleChangeComplete }/>}
          </Motion>
          :
          <Motion defaultStyle={{height: 200}} style={{height: spring(0, presets.gentle)}}>
            {interpolatingStyle => <SwatchesPicker height={interpolatingStyle.height} width = '100%' onChangeComplete = { this.props.handleChangeComplete }/>}
          </Motion>
        }
      </div>
    );
  }

}

const pickerContainerStyle = {
  width: '50%',
  margin: 'auto',
  marginTop: '20px',
  position: 'fixed',
  left: '25%',
  top: '460px'
};

export default Picker;
