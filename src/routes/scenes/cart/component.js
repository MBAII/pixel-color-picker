"use strict";

import React, {Component} from 'react';
import Header from '../../interface/Header';
import Cookies from 'js-cookie';
import removeIcon from'../../assets/remove.png';

export default class extends Component {

	constructor(props) {
		super(props);

		this.state = {
			removedCookieKey: 0
		}

		this.renderRow = this.renderRow.bind(this);
		this.renderRows = this.renderRows.bind(this);
		this.renderDesign = this.renderDesign.bind(this);
		this.renderOptions = this.renderOptions.bind(this);
	}

	componentWillMount() {
		var currentCartKeys = Cookies.get('mendShoppingCart')
		if(!currentCartKeys){
			currentCartKeys = [];
		}else{
			currentCartKeys = JSON.parse(currentCartKeys);
		}
		this.props.loadCartRequest({
			'currentCartKeys': currentCartKeys
		});
	}

	renderDesign(design){
		const pixelWidth = 5;
		return (
			<div style={{
				width: pixelWidth * 11,
				padding: '20px',
				display: 'inline-block',
			}}>
				{design.map((h, i1) => {
					return (
						<div
							key={i1}
							style={{
								height: pixelWidth
							}}>
							{h.map((p, i2) => {
								return (
									<div
										key={i2}
										style={{
											width: pixelWidth,
											height: pixelWidth,
											backgroundColor: p,
											display: 'inline-block'
										}}></div>);
								})}
						</div>
					);
			})}
			</div>);
	}

	renderOptions(options){
		return options.map((o, i) => {
			return (
				<div key={i} style={{display: 'inline-block', marginLeft: '50px'}}>
					{o.size}  x  {o.quantity}
				</div>
			);
		})
	}

	renderRow(row, index){
		return (
			<div key={index} style={{borderBottomStyle: 'solid'}}>
				{this.renderDesign(row.design)}
				{this.renderOptions(row.options)}
				<img
					style={{width:"25px", float:'right', margin:'10px'}}
					src={removeIcon}
					onClick={() => {
						var currentCartKeys = JSON.parse(Cookies.get('mendShoppingCart'));
						currentCartKeys = currentCartKeys.filter((o)=>{
							return o != row.cookieKey
						});
						Cookies.set('mendShoppingCart', JSON.stringify(currentCartKeys));
						window.location.replace(window.location.href);
					}}
				/>
			</div>
		);
	}

	renderRows(){
		var rows = [];
		this.props.cartData.forEach((row, i) => {
			rows.push(this.renderRow(row, i));
		});
		return rows;
	}

  render () {
		return (
			<main style = {{fontFamily: 'SANS-SERIF'}}>
				<Header />
				{this.renderRows()}
			</main>
		);
	}
};
