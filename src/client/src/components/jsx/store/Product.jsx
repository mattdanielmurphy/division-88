import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
	render = () => (
		<div className='product'>
			<Link to={`/store/${this.props.category}/${this.props.id}`}>
				<img src={this.props.imgSrc} alt='' />
			</Link>
			<Link to={`/store/${this.props.category}/${this.props.id}`} className='name'>
				{this.props.name}
			</Link>
			<div className='add-to-cart-wrapper'>
				<button className='add-to-cart' onClick={this.props.addToCart}>
					Add to cart
				</button>
			</div>
			<Link to={`/store/${this.props.category}/${this.props.id}`}>see details</Link>
		</div>
	)
}
