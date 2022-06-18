import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Main from './../pages/Main/Main'
import About from './../pages/About/About';


const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Main/>}/>
			<Route path="/about" element={<About/>}/>
		</Routes>
	)
}

export default AppRoutes