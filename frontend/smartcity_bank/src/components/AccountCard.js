import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import axios from "axios"

export default function AccountCard(props) {
  
  const handleDelete = async () => {

    const url = process.env.REACT_APP_API_URL + "/account/" + props.id

    await axios.delete(url, {withCredentials: true})
      .then(() => {
        console.log("DELETED")
    })
  }
  
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
        <Typography variant="h5" component="div">
            {props.name}
        </Typography>
        <Typography variant="body2">
            {"Kontostand: " + props.balance}
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" href={props.accountLink}>DETAILS</Button>
        <Button variant="outlined" color="error" onClick={handleDelete}>LÖSCHEN</Button>
        </CardActions>  
      </Card>
    </Box>
  );
}
