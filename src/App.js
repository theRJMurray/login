import React from 'react'
import Login from './Login'

const container_styles = {
	position: 'absolute',
	right: 0,
	bottom: 0,
	width: '100%',
	height: '100%',
	background: '#8a5a44',
	fontFamily: 'Roboto'
}

const App = () => {
	return <div style={container_styles}>
		<Login />
	</div>
}

export default App