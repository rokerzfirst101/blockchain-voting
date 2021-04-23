import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    return (
    	<div className="container">
				<div className="p-4 row bg-light">
					<h1 className="display-1 text-center">Blockchain Voting System</h1>
					<h1 className="display-5 text-center">A simple app to present our Project</h1>
				</div>
				<div className="p-4 row align-items-start">
					<div className="col"></div>
					<div className="col">
						<div className="mb-3">
							<label className="form-label">Enrollment Number</label>
							<input type="text" className="form-control" id="EnrollmentNumber" placeholder="Enter your Enrollment Number" />
						</div>
						<div className="mb-3">
							<label className="form-label">Password</label>
							<input type="password" className="form-control" id="Password" placeholder="Enter your Password" />
						</div>
						<div className="p-3 d-grid gap-2 col-6 mx-auto">
  						<button className="btn btn-primary" type="button">Register</button>
							<hr />
							<Link className="btn btn-outline-secondary" to="/login">Login</Link>
						</div>	
					</div>
					<div className="col"></div>
				</div>
			</div>
    )
}

export default Register
