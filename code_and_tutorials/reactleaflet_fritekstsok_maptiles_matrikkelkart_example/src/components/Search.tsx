import { TextField } from '@material-ui/core';
import React, { useState } from 'react'

export const Search = () => {
    
    
    const [query, setQuery] = useState<string | null>(null);

    
    return (
        <div>
            <form noValidate autoComplete="off">
                <TextField
                    id="standard-basic"
                    label="Søk opp adresse"
                    onChange={(e) => setQuery(e.target.value)}
            />
            </form>
            {query && <p>{query}</p>}
        </div>
    )
}
