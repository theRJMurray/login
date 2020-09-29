import React, { useState } from 'react'
import { container } from './styles'

const Login = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const handleUsernameUpdate = input => setUsername(input)
	const handlePasswordUpdate = input => setPassword(input)

	return <div style={container}>
		<div style={{ width: 500, margin: '80px 0 0 30px', display: 'flex', flexDirection: 'column' }}>
			<form style={{display: 'flex', flexDirection: 'column'}}>
				<p>Username:</p>
				<input type="text" name="username" style={{width: 200, marginTop: 20}} onChange={e => handleUsernameUpdate(e.target.value)} />

				<p>Password:</p>
				<input type="text" name="password" style={{width: 200, marginTop: 20}} onChange={e => handlePasswordUpdate(e.target.value)} />

				<input type="submit" value="Submit" style={{width: 200, marginTop: 20}} onClick={e =>{
					e.preventDefault()
					console.log(username, password)
				}}/>
			</form>
		</div>
	</div>
}

export default Login