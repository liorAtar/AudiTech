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
                        primary="State"
                        secondary={market.marketState} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Time"
                        secondary={market.regularMarketTime.fmt} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Price"
                        secondary={market.regularMarketPrice.fmt} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Change Percent"
                        secondary={market.regularMarketChangePercent.fmt} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Change"
                        secondary={market.regularMarketChange.fmt} />
                </ListItem>
            </List>
        </Dialog>
    )
};

export default MarketDialog;
