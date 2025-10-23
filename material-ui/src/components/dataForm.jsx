import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, FormGroup, FormLabel, Input, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function DataForm({ getData }) {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [role, setRole] = useState('user')
    const [skills, setSkills] = useState({
        React: false,
        Angular: false,
        NodeJs: false,
    })

    const data = {name, age, role, skills}

    function handleChecked(e, ) {
        setSkills({...skills, [e.target.name]: e.target.checked})
    }

    console.log(name)
    console.log(age)
    console.log(role)
    console.log(skills)

    function clearData(e) {
        setName('')
        setAge('')
        setRole('')
        setkills({
        React: false,
        Angular: false,
        NodeJs: false,
    })
    }
    return (
        <Container sx={{ marginTop: 8 }}>
            <Typography variant="h3" gutterBottom >Enter Data</Typography>
            <form onSubmit={(e) => { e.preventDefault(); getData(data); clearData() }}>
                <Stack spacing={2} maxWidth={'350px'} marginX={'auto'}>

                    <TextField value={name} onChange={(e) => { setName(e.target.value) }} id="inputName" label="Name" variant="outlined" />
                    <TextField value={age} id="inputAge" onChange={(e) => { setAge(e.target.value) }} label="Age" variant="outlined" />
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
                        <RadioGroup
                            onChange={(e) => { setRole(e.target.value) }}
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="user"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="user" control={<Radio />} label="User" />
                            <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                        </RadioGroup>
                    </FormControl>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} onChange={handleChecked} label="React" name="React" />
                        <FormControlLabel control={<Checkbox />} onChange={handleChecked} label="Angular" name="Angular" />
                        <FormControlLabel control={<Checkbox />} onChange={handleChecked} label="NodeJs" name="NodeJs" />
                    </FormGroup>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Stack>
            </form>
        </Container>
    )
}