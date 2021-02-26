import MUIDataTable from "mui-datatables";
import {Box, Button, Grid, LinearProgress} from "@material-ui/core";
import React, {useState} from "react";

const TableComponent = () => {

    const [state, setState] = useState({data:[], loading:false});
    const consultar = () => {
        setState({...state, loading:true})
        fetch('http://127.0.0.1:8000/Cliente/').
        then(r => r.json()).then(r => setState({...state, data:r, loading:false}))
    }

    const columns = [
        {
            name: "id",
            label: "id",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "name",
            label: "Name",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "email",
            label: "Email",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];

    const options = {
        filterType: 'checkbox',
    };

    return(
        <Grid>
            <Button variant="contained" color={state.visible ? "primary" : 'secondary'} onClick={consultar}>Consultar</Button>
            <Box mt={3}>
                {state.loading && <LinearProgress color="secondary" />}
                    <MUIDataTable
                    title={"Employee List"}
                    data={state.data}
                    columns={columns}
                    options={options}
                />
            </Box>
        </Grid>)
}

export default TableComponent