import React from 'react'
import { useRecoilState } from 'recoil';
import { apiKey } from '../state/state'
import { Box , Button, TextField, Typography } from '@material-ui/core';

interface Props {
    
}

//https://stackoverflow.com/a/63627688/13774540
const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

export const ApiKey = (props: Props) => {
    const [key, setKey]= useRecoilState<string | null>(apiKey);
    const handleTextfieldChange = (e: any) => {
        if (e.target.value.length === 36) {
            setKey(e.target.value);
        }
    }

    return (
        !key || key.length < 36 ?
        <Box display="flex" flexDirection="column"justifyContent='center' alignItems='center' padding={10}>
            <Typography variant="h4">Demo of Norkart Maptiles, Fritekstsøk and Matrikkelkart</Typography>
            <Typography variant="subtitle1">Paste apikey to see functionality in practice</Typography>
            <TextField id="outlined-basic" label="Enter API-key here" value={key} onChange={handleTextfieldChange} variant="outlined"/>

            <Typography variant="subtitle1">Need access?</Typography>
            <Typography variant="subtitle1">Get a free trial key at</Typography>
            <Button variant='contained' color='primary' onClick={() => openInNewTab("https://developer.norkart.no/")}>developer.norkart.no</Button>
        </Box>
        : null
    )
}
