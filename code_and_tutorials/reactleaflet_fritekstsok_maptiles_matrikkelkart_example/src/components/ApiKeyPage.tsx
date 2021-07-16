import { useRecoilState } from 'recoil';
import { apiKey } from '../state/state'
import { Button, createStyles, makeStyles, TextField, Theme, Typography } from '@material-ui/core';


//https://stackoverflow.com/a/63627688/13774540
const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            width: '100vw',
            height: '80vh',
            justifyContent: 'center',
            alignItems: 'center'
        },
        main: {
            height: 375,
            maxHeight: '100%',
            width: '100%',
            maxWidth: 600,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
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
                        Maptiles, Fritekstsøk and Matrikkelkart API Demo
                    </Typography>
                    <Typography variant="caption" color='secondary' paragraph>
                        This is a demo of Norkart's Maptiles, search and 'Matrikkelkart' APIs. These services give you detailed map tiles and property information for Norway. Read more  here: <a href="https://www.norkart.no/apikart/">https://www.norkart.no/apikart/</a>.
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

                <div>
                    <Typography variant="subtitle1">
                        You can get a free API key to try it out at
                    </Typography>

                    <Button color='primary' onClick={() => openInNewTab("https://developer.norkart.no/")}>
                        developer.norkart.no
                    </Button>

                </div>


            </div>


            <Typography className={classes.sourcecode} variant='caption' color='secondary'>
                Source code: <a href="https://github.com/Norkart/API-documentation/tree/main/code_and_tutorials/reactleaflet_fritekstsok_maptiles_matrikkelkart_example">github</a>
            </Typography>
            
        </div>

    )
}
