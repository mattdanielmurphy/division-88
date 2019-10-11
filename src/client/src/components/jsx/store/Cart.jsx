import React, { Component } from 'react'
import CartItem from './CartItem'
import { FaShoppingCart } from 'react-icons/fa'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

export default class Cart extends Component {
	state = {
		cartOpen: true
	}
	toggleCartVisibility = () => this.setState({ cartOpen: !this.state.cartOpen })
	getTotalPrice = () =>
		this.getProductsInCart().reduce((totalPrice, product) => totalPrice + product.price * product.quantity, 0)
	getTotalQuantity = () =>
		this.getProductsInCart().reduce((totalQuantity, product) => totalQuantity + product.quantity, 0)
	getProductsInCart = () =>
		this.props.cart.map(({ id, quantity }) => {
			const product = this.props.products.find((p) => p.id === id)
			product.quantity = quantity
			return product
		})
	get cartEmpty() {
		return !this.props.cart.find((i) => i)
	}
	render = () => (
		<div id='cart' className={this.state.cartOpen ? 'cart-open' : ''}>
			<div id='cart-toggle-container'>
				<button id='cart-toggle-button' onClick={this.toggleCartVisibility}>
					<FaShoppingCart />
				</button>
			</div>

			{this.state.cartOpen && (
				<SimpleBar autoHide={false} id='cart-products'>
					{this.cartEmpty ? (
						<div>Your cart is empty.</div>
					) : (
						<div>
							{this.getProductsInCart().map((product, index) => (
								<div>
									<CartItem
										removeFromCart={() => this.props.removeFromCart(product.id)}
										key={product.id}
										{...product}
									/>

									{index !== this.getProductsInCart().length - 1 && <div className='item-divider' />}
								</div>
							))}

							<div id='total-price'>
								<div className='price'>${this.getTotalPrice()}</div>
								<div className='name'>Total</div>
								<div className='quantity'>x{this.getTotalQuantity()}</div>
							</div>
							<div className='checkout-button-wrapper'>
								<button className='checkout-button' onClick={this.checkout}>
									Checkout
								</button>
							</div>
						</div>
					)}
				</SimpleBar>
			)}
		</div>
	)
}
