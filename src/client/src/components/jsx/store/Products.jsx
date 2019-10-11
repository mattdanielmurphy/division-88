import React, { Component } from 'react'
import Product from './Product'

export default class extends Component {
	render = () => (
		<div>
			<h1>{this.props.category || 'All products'}</h1>
			<div id="products">
				{this.props.products.map((product) => (
					<Product addToCart={() => this.props.addToCart(product.id)} key={product.id} {...product} />
				))}
			</div>
		</div>
	)
}
