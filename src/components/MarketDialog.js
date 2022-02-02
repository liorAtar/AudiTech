import React from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const MarketDialog = ({ market, isOpen, onClose}) => {
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>{market.symbol}</DialogTitle>
            <List>
                <ListItem>
                    <ListItemText
                        primary="Exchange"
                        secondary={market.exchange} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Exchange Data Delayed By"
                        secondary={market.exchangeDataDelayedBy} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Exchange Timezone Name"
                        secondary={market.exchangeTimezoneName} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Exchange Timezone Short Name"
                        secondary={market.exchangeTimezoneShortName} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="First Trade Date Milliseconds"
                        secondary={market.firstTradeDateMilliseconds} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Full Exchange Name"
                        secondary={market.fullExchangeName} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Gmt Off Set Milliseconds"
                        secondary={market.gmtOffSetMilliseconds} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Language"
                        secondary={market.language} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Market"
                        secondary={market.market} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="State"
                        secondary={market.marketState} />
                </ListItem>
                {market.priceHint !== undefined &&
                    <ListItem>
                        <ListItemText
                            primary="Price Hint"
                            secondary={market.priceHint} />
                    </ListItem>
                }
                {market.quoteSourceName !== undefined &&
                    <ListItem>
                        <ListItemText
                            primary="Quote Source Name"
                            secondary={market.quoteSourceName} />
                    </ListItem>
                }
                <ListItem>
                    <ListItemText
                        primary="Quote Type"
                        secondary={market.quoteType} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Region"
                        secondary={market.region} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Change"
                        secondary={market.regularMarketChange.fmt} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Change Percent"
                        secondary={market.regularMarketChangePercent.fmt} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Previous Close"
                        secondary={market.regularMarketPreviousClose.fmt} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Price"
                        secondary={market.regularMarketPrice.fmt} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Time"
                        secondary={market.regularMarketTime.fmt} />
                </ListItem>
                {market.shortName !== undefined &&
                    <ListItem>
                        <ListItemText
                            primary="Short Name"
                            secondary={market.shortName} />
                    </ListItem>
                }
                <ListItem>
                    <ListItemText
                        primary="Source Interval"
                        secondary={market.sourceInterval} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Tradeable"
                        secondary={String(market.tradeable)} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Triggerable"
                        secondary={String(market.triggerable)} />
                </ListItem>
            </List>
        </Dialog>
    )
};

export default MarketDialog;
