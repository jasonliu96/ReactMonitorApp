import { Button } from '@mui/material';
import React, {useEffect, useRef} from 'react';
import axios from 'axios';
const Test2 = () => {
    const fetchAPI = ()=>{
        axios.defaults.withCredentials=false;
        axios.get('http://localhost:8090/db/boterrormsg').then((resp)=>{
            console.log(resp);
        })
    }
    return(
        <div>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
            <p>hello test component</p>
            <Button onClick={fetchAPI}>click here </Button>
        </div>
    )
}


export default Test2;