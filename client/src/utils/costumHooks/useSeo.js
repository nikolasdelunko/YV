import React from 'react'
import { Helmet } from 'react-helmet'


const UseSeo = ({
	lang = 'en',
	title,
	description = 'page description',
	keywords = 'React developer, Js developer, front-end development, experience with JavaScript,experience with HTML, experience with CSS, experience with React.js, React.js Hooks, Redux, Node.js, Responsive Web Design, Preprocessor SCSS, Preprocessor SASS,work with Gulp, Experience with MongoDB,Experience with Figma,Experience with SEO,Experience with control systems Git',
}) => {
	return (
		<Helmet>
			<html lang={lang} />
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
		</Helmet>
	)
}

export default UseSeo
