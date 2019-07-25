import React from 'react'
import path from 'path'
import axios from 'axios'
import producerTools from './src/components/js/producer-tools'

export default {
	Document: ({ Html, Head, Body, children, state: { siteData, renderMeta } }) => (
		<Html lang="en-US">
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				{/* <link
					href="https://fonts.googleapis.com/css?family=Nunito:200,300,400,600,700,800,900&display=swap"
					rel="stylesheet"
				/> */}
				<link
					href="https://fonts.googleapis.com/css?family=Libre+Baskerville:700|Roboto+Condensed&display=swap"
					rel="stylesheet"
				/>
				<script src="//www.youtube.com/player_api" />
			</Head>
			<Body>{children}</Body>
		</Html>
	),
	getRoutes: async () => {
		const { data: artists } = await axios.get('http://localhost/api/artists')
		const pages = [ 'artists', 'producer-tools', 'about' ]

		return [
			{
				path: '/admin',
				getData: () => ({
					page: 'index'
				}),
				template: 'src/containers/Admin',
				children: pages.map((page) => ({
					path: `/${page}`,
					template: 'src/containers/Admin',
					getData: () => ({
						page,
						artists,
						producerTools
					})
				}))
			},
			{
				path: '/artists',
				getData: () => ({
					artists
				}),
				children: Object.values(artists).map((artist) => ({
					path: `/${artist.page}`,
					template: 'src/containers/Artist',
					getData: () => ({
						artist
					})
				}))
			},
			{
				path: '/admin/artists',
				getData: () => ({
					page: 'artists',
					artists
				}),
				template: 'src/containers/Admin',
				children: Object.values(artists).map((artist) => ({
					path: `/${artist.page}`,
					template: 'src/containers/Artist',
					getData: () => ({
						artist
					})
				}))
			},
			{
				path: '/producer-tools',
				getData: () => ({
					producerTools
				}),
				children: producerTools.map((tool) => ({
					path: `/${tool.page}`,
					template: 'src/containers/ProducerTool',
					getData: () => ({
						tool
					})
				}))
			}
		]
	},
	plugins: [
		'react-static-plugin-sass',
		[
			require.resolve('react-static-plugin-source-filesystem'),
			{
				location: path.resolve('./src/pages')
			}
		],
		require.resolve('react-static-plugin-reach-router'),
		require.resolve('react-static-plugin-sitemap')
	]
}
