import { Box, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import DataForm from "./dataForm";
import CardList from "./cardList";

export default function Page() {
    const [page, setPage] = useState('form');
    const [arr, setArr] = useState([]);

    function handleChange(e, val) {
        setPage(val)
    }

    function getData(data) {
        setArr([...arr, data])
    }
    
    return (
        <>
            <ToggleButtonGroup
            sx={{marginX: 'auto'}}
                color="primary"
                value={page}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                <ToggleButton value="form">Form</ToggleButton>
                <ToggleButton value="list">List</ToggleButton>
            </ToggleButtonGroup>
            <Box>
                {page === 'form'? <DataForm getData={getData}/>:<CardList arr={arr} />}
            </Box>
        </>
    )
}