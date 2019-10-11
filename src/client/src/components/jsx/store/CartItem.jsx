import React, { Component } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

export default class CartItem extends Component {
	render = () => (
		<div className='cart-item'>
			<div className='price'>${this.props.price}</div>
			<div className='image'>
				<img src={this.props.imgSrc} alt='' />
			</div>
			<div className='name'>{this.props.name}</div>
			<div className='quantity'>x{this.props.quantity}</div>
			<div className='delete-button-wrapper'>
				<button className='delete-button' onClick={this.props.removeFromCart}>
					<FaTrashAlt />
				</button>
			</div>
		</div>
	)
}
