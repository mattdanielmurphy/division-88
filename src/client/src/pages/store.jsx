import React, { Component } from 'react'
import Page from 'components/jsx/Page'
import Cart from 'components/jsx/store/Cart'
import Categories from 'components/jsx/store/Categories'
import Products from 'components/jsx/store/Products'

class Product extends Component {
	render = () => (
		<div className='product'>
			<img src={this.props.imgSrc} alt='' />
			<div className='name'>{this.props.name}</div>
			<div className='description'>{this.props.description}</div>
			<div className='add-to-cart-wrapper'>
				<button className='add-to-cart' onClick={this.props.addToCart}>
					Add to cart
				</button>
			</div>
		</div>
	)
}
export default class Store extends Component {
	state = {
		category: '',
		cart: [
			{ id: 0, quantity: 1 },
			{ id: 1, quantity: 1 },
			{ id: 2, quantity: 1 },
			{ id: 3, quantity: 1 },
			{ id: 4, quantity: 1 },
			{ id: 5, quantity: 1 }
		],
		products: [
			{
				imgSrc: '/images/t-shirt.png',
				name: 't-shirt',
				price: 20,
				id: 0,
				category: 'apparel'
			},
			{
				imgSrc: '/images/hat.png',
				name: 'hat',
				price: 15,
				id: 1,
				category: 'apparel'
			},
			{
				imgSrc: '/images/realistic-pack.jpg',
				name: 'realistic pack',
				price: 100,
				id: 2,
				category: 'producer-tools'
			},
			{
				imgSrc: '/images/realistic-pack.jpg',
				name: 'realistic pack',
				price: 100,
				id: 3,
				category: 'producer-tools'
			},
			{
				imgSrc: '/images/realistic-pack.jpg',
				name: 'realistic pack',
				price: 100,
				id: 4,
				category: 'producer-tools'
			},
			{
				imgSrc: '/images/realistic-pack.jpg',
				name: 'realistic pack',
				price: 100,
				id: 5,
				category: 'producer-tools'
			}
		],
		categories: [ 'apparel', 'producer-tools' ]
	}
	getProductsForCategory = () => {
		if (this.state.category)
			return this.state.products.filter((product) => product.category === this.state.category)
		else return this.state.products
	}
	updateProductAndCategory = () => {
		const params = this.props.match.params
		let product
		if (params.productId !== undefined) {
			product = this.state.products.find((product) => product.id === Number(params.productId))
		}
		this.setState({ product, category: params.category })
	}
	componentDidMount = () => this.updateProductAndCategory()
	componentDidUpdate = (prevProps) => {
		if (JSON.stringify(prevProps.match.params) !== JSON.stringify(this.props.match.params))
			this.updateProductAndCategory()
	}
	addToCart(id) {
		// look for existing item in cart
		const existingCartItemIndex = this.state.cart.findIndex((item) => item.id === id)
		console.table({ existingCartItemIndex })
		const cart = this.state.cart
		if (existingCartItemIndex !== -1) {
			console.log(cart)
			cart[existingCartItemIndex].quantity++
			console.log(cart)
		} else cart.push({ id, quantity: 1 })
		this.setState({ cart })
	}
	removeFromCart(id) {
		const cart = this.state.cart
		delete cart[id]
		this.setState({ cart })
	}
	render = () => (
		<div>
			<h1 style={{ textAlign: 'center' }}>Store coming (very) soon.</h1>
			{/* <Cart
				cart={this.state.cart}
				removeFromCart={(id) => this.removeFromCart(id)}
				products={this.state.products}
			/>
			<Page noHeading>
				<Categories categories={this.state.categories} />
				{this.state.product ? (
					<Product {...this.state.product} />
				) : (
					<Products
						products={this.getProductsForCategory()}
						addToCart={(id) => this.addToCart(id)}
						category={this.state.category}
					/>
				)}
			</Page> */}
		</div>
	)
}
