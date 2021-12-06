import React from 'react';
import { apiKey } from '../state/state';
import { useRecoilState } from 'recoil';
import { createStyles, makeStyles, TextField, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            width: '100%',
            height: '80vh',
            justifyContent: 'center',
            alignItems: 'center'
        },
        main: {
            height: 375,
            maxHeight: '100vh',
            width: '100vw',
            maxWidth: 550,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(2)
        },
        textfield: {
            width: '100%',
            "&.input" : {
                'text-align' :'center'
            }
        },
        apikey: {
            width: '100%'
        },
        sourcecode :{
            position: 'absolute',
            right: theme.spacing(2),
            bottom: theme.spacing(2),
        }
    }),
);

export const ApiKeyPage = () => {
    const classes = useStyles();
    const [key, setKey] = useRecoilState<string | null>(apiKey);
    const handleTextfieldChange = (e: any) => {
        if (e.target.value.length === 36) {
            setKey(e.target.value);
        }
    }

    if (key && key.length === 36) return null;

    return (
        <div className={classes.root}>
            <div className={classes.main}>
                <div>
                    <Typography variant="h4" paragraph>
                        Cesium and leaflet Demo
                    </Typography>
                    <Typography variant="caption" color='secondary' paragraph>
                        This is a demo of Norkart's Maptiles and 3D-Tiles combined, where you can swich between views.
                    </Typography>
                </div>
                <div className={classes.apikey}>
                    <TextField
                        className={classes.textfield}
                        label="Enter API-key here"
                        value={key}
                        onChange={handleTextfieldChange}
                        variant="outlined"
                    />
                </div>
            </div>
            <Typography className={classes.sourcecode} variant='caption' color='secondary'>
                Source code: https://github.com/Norkart/API-documentation
            </Typography>
        </div>
    )
}
