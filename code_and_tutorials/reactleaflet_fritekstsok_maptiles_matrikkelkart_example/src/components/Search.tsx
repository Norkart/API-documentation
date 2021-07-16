import { useEffect, useState, useMemo } from 'react'
import { createStyles, InputAdornment, makeStyles, TextField, Theme, withStyles } from '@material-ui/core';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Address, apiKeyState, selectedAddress } from '../state/state';
import { fritekstsok } from '../api/fritekstsokapi';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import { debounce } from 'lodash';

const CustomTextField = withStyles((theme: Theme) => ({
    root: {
        backgroundColor: 'white',
        borderRadius: 10,
        '& .MuiInputBase-root': {
            paddingRight: `${theme.spacing(2)}px !important`,
        },
        '& .MuiAutocomplete-inputRoot': {
            padding: `${theme.spacing(1)}px !important`,
        },
    },
}))(TextField);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            [theme.breakpoints.down('xs')]: {
                width:'100vw',
              },
        },
        autocomplete: {
            width: 350,
            [theme.breakpoints.down('xs')]: {
                width:'95%',
              },
        },
        searchIcon: {
            opacity: 0.5
        }
    }),
);

export const Search = () => {
    const classes = useStyles();


    const apiKey = useRecoilValue<string | null>(apiKeyState);
    const [selectedAdress, setSelectedAdress] = useRecoilState<Address | null>(selectedAddress);
    const [inputValue, setInputValue] = useState('');
    const [adressOptions, setAdressOptions] = useState<Address[]>([])

    const fetchFromFritekstsok = useMemo(
        () =>
            debounce(async (input: string, callback: (results: Address[]) => void) => {
                if (input && apiKey) {
                    const results = await fritekstsok(input, apiKey)
                    callback(results)
                }
            }, 100),
        [apiKey],
    );

    useEffect(() => {
        let active = true;

        if (inputValue === '') {
            setAdressOptions([]);
        }

        fetchFromFritekstsok(inputValue, (results: Address[]) => {
            if (active) {

                let newOptions = [] as Address[];

                if (selectedAdress) {
                    newOptions = [selectedAdress];
                }

                if (results) {
                    newOptions = [...newOptions, ...results];
                }

                setAdressOptions(newOptions);
            }
        });


        return () => {
            active = false;
        };

    }, [selectedAdress, inputValue, fetchFromFritekstsok]);



    return (
        <div className={classes.root}>
            <Autocomplete
                id="fritekstsok-demo"
                options={adressOptions}
                value={selectedAdress}
                getOptionLabel={(s: Address) => s.text}
                filterOptions={(x) => x}
                className={classes.autocomplete}
                autoComplete
                includeInputInList
                filterSelectedOptions
                onChange={(_, newValue: Address | null) => {
                    setAdressOptions(newValue ? [newValue, ...adressOptions] : adressOptions);
                    setSelectedAdress(newValue);
                }}
                onInputChange={(_, newInputValue) => {
                    setInputValue(newInputValue);
                }}

                renderInput={(params: any) =>
                    <CustomTextField
                        {...params}
                        color="secondary"
                        id="standard-basic"
                        variant="outlined"
                        placeholder="Search Adress"
                        size="small"
                        InputProps={{
                            ...params.InputProps,
                            endAdornment:
                                <InputAdornment position="end">
                                    <SearchIcon className={classes.searchIcon} />
                                </InputAdornment>
                        }}
                    />}
            />
        </div>

    )
}
