import React from 'react'
import {atom, selector, useRecoilState} from 'recoil';
import { apiKey } from '../state/state'
import { Typography, TextField } from '@material-ui/core';

interface Props {
    
}

export const ApiKey = (props: Props) => {
    const [key, setKey]= useRecoilState(apiKey);
    console.log(key)
    const handleTextfieldChange = (e: any) => {
        setKey(e.target.value);
    }

    return (
        key.length < 36 ?
        <div>
            <TextField id="outlined-basic" label="Enter API-key here" value={key} onChange={handleTextfieldChange} variant="outlined" />
            <Typography variant="h1" component="h2">
                {"Get it at developer.norkart.no"}
            </Typography>
        </div>
        : null
    )
}
