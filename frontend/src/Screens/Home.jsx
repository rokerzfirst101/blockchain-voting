import React, { useEffect } from 'react'
import { useHistory } from 'react-router';

function Home() {

    const history = useHistory()
    const [value, setValue] = React.useState('abc');
    const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('user')));

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleLogout = () => {
        localStorage.removeItem('user')
        history.push('/login')
    }
    
    return (
		<div className="container">
            <div className="p-4 row bg-light">
                <button onClick={handleLogout} type="button" class="btn-close" aria-label="Close"></button>
                <h1 className="display-1 text-center">Blockchain Voting System</h1>
                <h1 className="display-5 text-center020">Cast Ballot</h1>
            </div>
            <div className="p-4 row align-items-start">
                <div className="col"></div>
                <div className="col">
                <h1 className="p-3 display-6 text-center">Hi <b className="text-primary">{ user.name }</b>, select a candidate to vote for</h1>
                <div style={{marginTop: 30}} class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        <h5 className="lead">Donald Trump</h5>
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label" for="flexRadioDefault2">
                        <h5 className="lead">Barack Obama</h5>
                    </label>
                </div>
                    {
                        user.balance == 0 ? (
                            <div style={{marginTop: 30}} className="alert alert-success" role="alert">
                                Your vote has been casted.
                            </div>
                        ) : (
                            <div style={{marginTop: 20}} className="p-3 d-grid gap-2 col-6 mx-auto">
                                <button className="btn btn-primary" type="button">Submit Vote</button>
                            </div>	
                        )
                    }
                </div>
                <div className="col"></div>
			</div>
            
		</div>
    )
}

export default Home
