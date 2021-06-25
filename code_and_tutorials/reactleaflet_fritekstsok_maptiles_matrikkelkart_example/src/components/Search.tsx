import React, { useEffect, useState } from 'react'
import { createStyles, InputBase, List, ListItem, ListItemText, makeStyles, Paper, Theme } from '@material-ui/core';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Address, apiKey, selectedAddress } from '../state/state';
import { getGateadresseByQuery } from '../utils/fritekstsoekapi';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'right',
        width: 400,
      },
    searchbox: {
        padding: '2px 4px',
        textAlign: 'left',
        width: 400,
      },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    suggestions: {
        width: 300,
        backgroundColor: 'white',
        borderRadius: 4
    }
  }),
);


export const Search = () => {
    const classes = useStyles();
    const [query, setQuery] = useState<string | null>(null);
    const [suggestedAdress, setSuggestedAddresses] = useState<Address[] | null>(null);
    const apiKeyState = useRecoilValue<string | null>(apiKey);
    const setAddress = useSetRecoilState<Address | null>(selectedAddress);

    useEffect(() => {
        
        async function runFritekstoek(){
            if(query && apiKeyState){
                const suggestions = new Array<Address>();
                const apiResult = await getGateadresseByQuery(query, apiKeyState);
                if(apiResult.status === 200){
                    const json = await apiResult.json();
                    json.Options.forEach((suggestion: any) => {
                        suggestions.push({id: suggestion.Id,  text: suggestion.Text, latLng: {lat: suggestion.PayLoad.Posisjon.Y, lng: suggestion.PayLoad.Posisjon.X}})
                    });
                    setSuggestedAddresses(suggestions);
                }
            }
        }
        runFritekstoek();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    const onAddressSelected = (address: Address) => {
        setQuery("");
        setAddress(address);
        setSuggestedAddresses(null);
    }

    return (
        <div>
            {apiKeyState &&
            <div className={classes.searchbox}>
                <div className={classes.searchbox}>
                    <Paper component='form'>
                    <InputBase
                        value={query}
                        className={classes.input}
                        placeholder="Søk opp adresse"
                        inputProps={{ 'aria-label': 'Søk opp adresse' }}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </Paper>
                </div>
                <div className={classes.suggestions}>
                    {suggestedAdress && <List dense>
                            {suggestedAdress.map((address : Address) => <ListItem button key={address.id} onClick={onAddressSelected.bind(this, address)}><ListItemText primary={address.text}/></ListItem>)}
                        </List>}
                </div>
            </div>                 
            }
        </div>
    )
}
