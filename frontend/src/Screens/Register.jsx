import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Register() {

	const [registerData, setRegisterData] = useState({
		name: "",
		adhaar: "",
		password: ""
	})
	const [isLoading, setIsLoading] = useState(false)
	const [enrollment, setEnrollment] = useState("")

	const handleChange = (event) => {
		const value = event.target.value;
		const name = event.target.name;

		setRegisterData((preValue) => {
			return {
				...preValue,
				[name]: value
			}
		})
	}

	const handleRegister = () => {
		if (registerData.adhaar && registerData.name && registerData.password) {
			setIsLoading(true)
			axios.post('user/register', registerData)
			.then((res) => {
				setEnrollment(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
			})			
		} else {
			alert("Please fill the fields.")
		}
	}

    return (
    	<div className="container">
				<div className="p-4 row bg-light">
					<h1 className="display-1 text-center">Blockchain Voting System</h1>
					<h1 className="display-5 text-center text-primary">Fill in the details to create account</h1>
				</div>
				<div style={{marginTop: 50}} className="p-4 row align-items-start">
					<div className="col"></div>
					<div className="col">
						<div className="mb-3">
							<label className="form-label">Name</label>
							<input type="text" className="form-control" name="name" id="Name" placeholder="Enter your Name" onChange={handleChange} />
						</div>
						<div className="mb-3">
							<label className="form-label">Aadhar Number</label>
							<input type="text" className="form-control" name="adhaar" id="AadharNumber" placeholder="Enter your Aadhar Number" onChange={handleChange} />
						</div>
						<div className="mb-3">
							<label className="form-label">Password</label>
							<input type="password" className="form-control" name="password" id="Password" placeholder="Enter a Password" onChange={handleChange} />
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
								<button onClick={handleRegister} className="btn btn-primary" type="button">Register</button>
							)
						}
						<hr />
						<Link className="btn btn-outline-secondary" to="/login">Login</Link>
					</div>
					{
						enrollment ? (
							<p className="lead p-4 text-center">Your enrollment number is <b>{enrollment}</b>. Use it to login.</p>
						) : null
					}	
				</div>
				<div className="col"></div>
			</div>
		</div>
    )
}

export default Register
