import React, {useState} from 'react';
import { TextField, Button } from '@mui/material';

const INITIAL_SEARCH_VALUE = ""

const Search = ({ filterTable, updateMarketToAll }) => {

    const [searchInput, setSearchInput] = useState(INITIAL_SEARCH_VALUE);

    /**
     * Delete the current search value and update the markets to all
     */
    const deleteSearch = () => {
        if (searchInput) {
            setSearchInput(INITIAL_SEARCH_VALUE);
            updateMarketToAll();
        }
    }

    /**
     * Update the new serach input
     * @param {*} e 
     */
    const handleSearchValueChanged = (e) => {
        const newSearchValue = e.target.value;
        setSearchInput(newSearchValue);
    }

    /**
     * Filter the markets by the search value
     */
    const handleSearch = () => {
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
