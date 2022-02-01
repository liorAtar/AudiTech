import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const URL = "https://yfapi.net/v6/finance/quote/marketSummary?lang=en&region=US"

const HEADERS = {
    'x-api-key': "WSzrdnL0K03J9Mvw7pS9S1oUk2X8U4cb27hhLrAm"
}

const Markets = () => {

    const [markets, setMarkets] = useState([]);
    const [selectedMarket, setSelectedMarket] = useState(0)

    var options = {
        method: 'GET',
        url: URL,
        headers: HEADERS
    };

    useEffect(() => {

        getAllMarkets()
    }, [])

    const getAllMarkets = async () => {
        axios.request(options).then(function (response) {
            console.log(response.data.marketSummaryResponse.result);
            setMarkets(response.data.marketSummaryResponse.result);
        }).catch(function (error) {
            console.error(error);
        });
    }

    const handleSelectedMarketChanged = (event, newSelectedTab) => {
        setSelectedMarket(newSelectedTab);
    }

    return (
        <div>
            <Box sx={{ bgcolor: 'background.paper', display: 'flex', height: 224 }}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={selectedMarket}
                    onChange={handleSelectedMarketChanged}>
                    {markets.map(market => 
                        <Tab key={market.symbol} label={market.symbol}/>
                    )}
                </Tabs>
            </Box>
        </div>
    )
};

export default Markets;

