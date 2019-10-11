import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class extends Component {
	getCategoryName = (category) => category.split('-').join(' ')
	render = () => (
		<div id='categories'>
			{this.props.categories.map((category) => (
				<div id='category' key={category}>
					<NavLink to={`/store/${category}`}>{this.getCategoryName(category)}</NavLink>
				</div>
			))}
			<NavLink to='/store' exact>
				All Products
			</NavLink>
		</div>
	)
}
