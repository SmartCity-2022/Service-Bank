import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function card(name, balance) {
    return (
    <React.Fragment>
        <CardContent>
        <Typography align="center" variant="h5" component="div">
            {name}
        </Typography>
        <Typography align="center" variant="body2">
            {balance}
        </Typography>
        </CardContent>
    </React.Fragment>
    )
}

export default function OutlinedCard(name, balance) {
  return (
    <Box sx={{ minWidth: 275 }}>
     {card(name, balance)}
    </Box>
  );
}
