import React, { useState, useEffect } from 'react';
import MarketDialog from './MarketDialog';

import axios from 'axios';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const URL = "https://yfapi.net/v6/finance/quote/marketSummary?lang=en&region=US"

const HEADERS = {
    'x-api-key': "Sm4w4PI9zn41hLthRkNXV3Mw5884q2yyaeWm1hMl"
}

const Markets = ({isLoggedIn}) => {

    const [markets, setMarkets] = useState([]);
    const [selectedMarket, setSelectedMarket] = useState();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    var options = {
        method: 'GET',
        url: URL,
        headers: HEADERS
    };

    useEffect(() => {
        if (!isLoggedIn) {
            setMarkets([]);
        } else {
            getAllMarkets();
        }
    }, [isLoggedIn])

    const getAllMarkets = async () => {
        setMarkets([]);
        axios.request(options).then(function (response) {
            setMarkets(response.data.marketSummaryResponse.result);
        }).catch(function (error) {
            console.error(error);
        });
    }

    const handleSelectedMarketChanged = (marketSymbol) => {
        setIsDialogOpen(true);

        markets.forEach(market => {
            if (market.symbol === marketSymbol.target.innerText) {
                setSelectedMarket(market);
            }
        })
    }

    const closeMarketDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Synbol</th>
                        <th>State</th>
                        <th>Time</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Change Percent</th>
                    </tr>
                    {markets.map(market =>
                    (
                        <tr key={market.symbol} onClick={handleSelectedMarketChanged}>
                            <td>{market.symbol}</td>
                            <td>{market.marketState}</td>
                            <td>{market.regularMarketTime.fmt}</td>
                            <td>{market.regularMarketPrice.fmt}</td>
                            <td>{market.regularMarketChange.fmt}</td>
                            <td>{market.regularMarketChangePercent.fmt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <MarketDialog market={selectedMarket} isOpen={isDialogOpen} onClose={closeMarketDialog}/>
        </div>
    )
};

export default Markets;

