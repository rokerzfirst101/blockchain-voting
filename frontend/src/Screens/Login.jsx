import React from 'react'
import {Link} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { Button, TextField, Typography } from '@material-ui/core'

function Login() {
    return (
		<div className="d-flex flex-column justify-content-center align-items-center" style={{height: '100vh'}}>
			<Typography  variant="h2" >
				Blockchain Voting App
			</Typography>
			<form style={{padding: 20}}>
				<Typography variant="h5">
					Enter your details to continue:
				</Typography>
				<div>
					<TextField id="standard-basic" label="Enrollment Number" />
				</div>
				<div>
					<TextField id="standard-basic" label="Enrollment Number" />
				</div>
			</form>
			<Button style={{margin: 10}} variant="contained" color="primary">
				Login
			</Button>
			<hr />
			<Button style={{margin: 10}} variant="outlined" color="secondary">
				Register
			</Button>
		</div>
    )
}

export default Login
