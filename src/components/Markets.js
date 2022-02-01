import React, { useState, useEffect } from 'react';
import MarketDialog from './MarketDialog';
import Search from './Search';

import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const URL = "https://yfapi.net/v6/finance/quote/marketSummary?lang=en&region=US"

const HEADERS = {
    'x-api-key': "Sm4w4PI9zn41hLthRkNXV3Mw5884q2yyaeWm1hMl"
}

const INITIAL_SEARCH_VALUE = ""

const Markets = () => {

    const [markets, setMarkets] = useState([]);
    const [selectedMarket, setSelectedMarket] = useState(INITIAL_SEARCH_VALUE);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [searchValue, setSearchValue] = useState(INITIAL_SEARCH_VALUE);
    const [filteredMarket, setFilteredMarket] = useState([]);

    var options = {
        method: 'GET',
        url: URL,
        headers: HEADERS
    };

    useEffect(() => {
        if (markets.length === 0) {
            getAllMarkets();
        }
    }, [filteredMarket])

    const getAllMarkets = async () => {
        setMarkets([]);
        axios.request(options).then(function (response) {
            setMarkets(response.data.marketSummaryResponse.result);
            setFilteredMarket(response.data.marketSummaryResponse.result)
        }).catch(function (error) {
            console.error(error);
        });
    }

    const handleSelectedMarketChanged = (marketSymbol) => {
        setIsDialogOpen(true);
        console.log(marketSymbol);

        markets.forEach(market => {
            if (market.symbol === marketSymbol) {
                setSelectedMarket(market);
            }
        })
    }

    const closeMarketDialog = () => {
        setIsDialogOpen(false);
    };

    const filterTable = () => {
        var filtered = []
        var searchFound = false;

        markets.map(market => {
            if (market.symbol.includes(searchValue) ||
                market.marketState.includes(searchValue) ||
                market.regularMarketTime.fmt.includes(searchValue) || 
                market.regularMarketPrice.fmt.includes(searchValue) ||
                market.regularMarketChange.fmt.includes(searchValue) ||
                market.regularMarketChangePercent.fmt.includes(searchValue)) {
                searchFound = true;
            }
            if (searchFound) {
                filtered.push(market);
                searchFound = false;
            }
        })

        if (filtered.length === 0) {
            alert('No market was found')
        } else {
            setFilteredMarket(filtered);
        }
    }

    const updateMarketToAll = () => {
        setFilteredMarket(markets);
    }

    return (
        <div>
            <Search
                setSearchValue={setSearchValue}
                filterTable={filterTable}
                updateMarketToAll={updateMarketToAll} />
            <TableContainer >
                <Table sx={{ minWidth: '70%' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Symbol</TableCell>
                            <TableCell align="center">State</TableCell>
                            <TableCell align="center">Time</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Change</TableCell>
                            <TableCell align="center">Change Percent</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredMarket.map(market =>
                            <TableRow
                                key={market.symbol}
                                onClick={handleSelectedMarketChanged.bind(this, market.symbol)}>
                                <TableCell align="center">
                                    {market.symbol}
                                </TableCell>
                                <TableCell align="center">
                                    {market.marketState}
                                </TableCell>
                                <TableCell align="center">
                                    {market.regularMarketTime.fmt}
                                </TableCell>
                                <TableCell align="center">
                                    {market.regularMarketPrice.fmt}
                                </TableCell>
                                <TableCell align="center">
                                    {market.regularMarketChange.fmt}
                                </TableCell>
                                <TableCell align="center">
                                    {market.regularMarketChangePercent.fmt}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <MarketDialog market={selectedMarket} isOpen={isDialogOpen} onClose={closeMarketDialog}/>
        </div>
    )
};

export default Markets;

