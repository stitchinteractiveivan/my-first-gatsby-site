module.exports = {
	siteMetadata: {
		title: "My First Gatsby Site",
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: `blog`,
				path: `${__dirname}/blog`,
			},
		},
		"gatsby-plugin-mdx",
		"gatsby-remark-images",
		"gatsby-remark-prismjs",
		"gatsby-remark-autolink-headers",
		"gatsby-transformer-sharp",
	],
}
