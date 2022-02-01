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
            {/* <List>
                {Object.entries(market).map(([key, value]) =>
                    <ListItem key={key}>
                        <ListItemText
                            primary={key}/>
                    </ListItem>    
                )}
            </List> */}
        </Dialog>
    )
};

export default MarketDialog;
