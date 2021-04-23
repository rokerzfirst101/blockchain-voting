import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button, Typography } from '@material-ui/core'

function Home() {
    const [value, setValue] = React.useState('abc');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
		<div className="d-flex flex-column justify-content-center align-items-center" style={{height: '100vh'}}>
            <Typography  variant="h2"  style={{marginBottom: '30px'}}>
                Cost Ballet
			</Typography>
            <Typography  variant="h6" >
                Select a option from below
			</Typography>
            <FormControl component="fieldset">
                <RadioGroup aria-label="option" name="option" value={value} onChange={handleChange}>
                    <FormControlLabel value="abc" control={<Radio />} label="abc" />
                    <FormControlLabel value="def" control={<Radio />} label="def" />
                    <FormControlLabel value="ghi" control={<Radio />} label="ghi" />
                </RadioGroup>
            </FormControl>
            <Button style={{margin: 10}} variant="contained" color="primary">
				Next
			</Button>
        </div>
    )
}

export default Home
