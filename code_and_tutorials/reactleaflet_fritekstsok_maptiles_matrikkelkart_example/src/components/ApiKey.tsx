import React from 'react'
import { useRecoilState } from 'recoil';
import { apiKey } from '../state/state'
import { Box , TextField } from '@material-ui/core';

interface Props {
    
}

export const ApiKey = (props: Props) => {
    const [key, setKey]= useRecoilState(apiKey);
    const handleTextfieldChange = (e: any) => {
        if (e.target.value.length == 36) {
            setKey(e.target.value);
        }
    }

    return (
        key.length < 36 ?
        <Box display="flex" flexDirection="column"justifyContent='center' alignItems='center' padding={10}>
            <TextField id="outlined-basic" label="Enter API-key here" value={key} onChange={handleTextfieldChange} variant="outlined"/>
            <a href="https://developer.norkart.no/">Get it at Developer.Norkart.no</a>
        </Box>
        : null
    )
}
