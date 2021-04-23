import React from 'react'
import {Link} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { Button, TextField, Typography } from '@material-ui/core'

function Login() {
    return (
		<Container style={{textAlign: 'center'}}>
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
		</Container>
    )
}

export default Login
