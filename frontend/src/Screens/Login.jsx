import axios from 'axios'
import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'

function Login() {

	const history = useHistory();
	const [isLoading, setIsLoading] = useState(false)
	const [loginData, setLoginData] = useState({
		id: '',
		password: ''
	})

	const handleChange = (event) => {
		let value = event.target.value;
		let name = event.target.name;

		setLoginData((preValue) => {
			return {
				...preValue,
				[name]: value
			}
		});
	}

	const handleLogin = () => {
		if(loginData.id && loginData.password){
			setIsLoading(true)
			axios.post('user/login', loginData)
			.then((res) => {
				localStorage.setItem('user', JSON.stringify(res.data));
				history.push("/home");
				setIsLoading(false);
			})
			.catch((err) => {
				alert(err.response.data.error)
				setIsLoading(false)
			})
		} else {
			alert("Please fill the fields.")
		}
	}

    return (
		<div className="container">
				<div className="p-4 row bg-light">
					<h1 className="display-1 text-center">Blockchain Voting System</h1>
					<h1 className="display-5 text-center text-primary">Login or Register to proceed.</h1>
				</div>
				<div style={{marginTop: 50}} className="p-4 row align-items-start">
					<div className="col"></div>
					<div className="col">
						<div className="mb-3">
							<label className="form-label">Enrollment Number</label>
							<input type="text" className="form-control" name="id" id="EnrollmentNumber" placeholder="Enter your Enrollment Number" onChange={handleChange} />
						</div>
						<div className="mb-3">
							<label className="form-label">Password</label>
							<input type="password" className="form-control" name="password" id="Password" placeholder="Enter your Password" onChange={handleChange} />
						</div>
						<div style={{marginTop: 50}} className="p-3 d-grid gap-2 col-6 mx-auto">
  						{
							isLoading ? (
								<div className="d-flex justify-content-center">
									<div className="spinner-border text-primary" role="status">
										<span className="sr-only" />
									</div>
								</div>
							) : (
								<button onClick={handleLogin} className="btn btn-primary" type="button">Login</button>
							)
						}
						<hr />
						<Link className="btn btn-outline-secondary" to="/register">Register</Link>
					</div>	
				</div>
				<div className="col"></div>
			</div>
		</div>
    )
}

export default Login
