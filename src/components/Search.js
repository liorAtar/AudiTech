import React, {useState} from 'react';
import { TextField, Button } from '@mui/material';

const INITIAL_SEARCH_VALUE = ""

const Search = ({ setSearchValue, filterTable, updateMarketToAll }) => {

    const [searchInput, setSearchInput] = useState(INITIAL_SEARCH_VALUE);

    const deleteSearch = () => {
        if (searchInput) {
            setSearchInput(INITIAL_SEARCH_VALUE);
            updateMarketToAll();
        }
    }

    const handleSearchValueChanged = (e) => {
        const newSearchValue = e.target.value;
        setSearchInput(newSearchValue);
    }

    const handleSearch = () => {
        setSearchValue(searchInput);
        filterTable(searchInput);
    }

    return (
        <div>
            <Button onClick={deleteSearch} variant="outlined">X</Button>
            <TextField
                value={searchInput}
                onChange={handleSearchValueChanged}
                size="small"
                type="text"
                label="Search..."
                variant="outlined" />
            <Button onClick={handleSearch} variant="outlined">Search</Button>
        </div>
    )
};

export default Search;
