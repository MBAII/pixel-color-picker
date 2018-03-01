import React, { Component } from 'react';

import plusIcon from'../../assets/plus.png';
import removeIcon from'../../assets/remove.png';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
const sizeOptions = [
  'XS', 'S', 'M', 'L', 'XL', 'XXL'
]
const quantityOptions = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9'
]

class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      info: []
    };
    this.addRow = this.addRow.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderRows = this.renderRows.bind(this);
  }
  
  componentWillMount(){
    this.setState({info: this.props.addToCart});
  }
  
  componentDidUpdate(){
    // this.props.updateAddToCart(this.state.info);
  }

  addRow(){
    this.props.updateAddToCart(this.props.addToCart.concat([{size: null,quantity: null}]));
    // this.setState({info: this.state.info.concat([{size: null,quantity: null}])});
  }

  renderRow(row, i){
    return (
      <div key={i}>
        <div style={cellStyle}>
          <Dropdown
            options={sizeOptions}
            onChange={(v) => {
              this.props.addToCart[i].size = v.value;
            }}
            value={this.props.addToCart[i].size}
            placeholder="Select A Size"
          />
        </div>
        <div style={cellStyle}>
          <Dropdown
            options={quantityOptions}
            onChange={(v) => {
              this.props.addToCart[i].quantity = v.value;
            }}
            value={this.props.addToCart[i].quantity}
            placeholder="Select Quantity"
          />
        </div>
        <div style={{textAlign:'center', display:'inline-block', width:'10%'}}>
          <img
          style={{width:'50%', marginBottom:'14px'}}
          src={removeIcon}
          onClick={() => {
            this.props.updateAddToCart(this.props.addToCart.filter((o, index) => i !== index));
          }}/>
        </div>
      </div>
    );
  }

  renderRows(){
    let rows = [];
    this.props.addToCart.forEach((row, i) => {
      rows.push(this.renderRow(row, i));
    });
    return rows;
  }

  render() {
    return (
      <div style={{width:'500px',textAlign:'left', fontFamily: 'SANS-SERIF'}}>
        <div style={{borderBottomStyle:'solid'}}>
          <h1>Add To Cart</h1>
        </div>
        {this.renderRows()}
        <div style={{borderTopStyle:'solid'}}>
          <img style={{float:'right', margin:'5px', height:'30px'}} src={plusIcon} onClick={this.addRow}/>
        </div>
      </div>
    );
  }

}

const cellStyle = {
  display:'inline-block',
  width:'45%',
  lineHeight: '35px',
}

export default Cart;
