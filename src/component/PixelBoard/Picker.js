import React, { Component } from 'react';
import { SwatchesPicker } from 'react-color';


class Picker extends Component {

  render() {
    return (
      <div style={{width: '500px', margin: 'auto', marginTop: '30px'}}>
        <SwatchesPicker width = '100%' onChangeComplete = { this.props.handleChangeComplete }/>
      </div>
    );
  }

}


export default Picker;
