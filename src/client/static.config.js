import path from 'path'
import axios from 'axios'

export default {
	getRoutes: async () => {
		const { data: artists } = await axios.get('http://localhost/api/artists')

		return [
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
