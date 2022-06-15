import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AccountCard from './AccountCard'

export default function BasicGrid(props) {
  return (
    <Box padding={5} sx={{ flexGrow: 0 }}>
      <Grid container spacing={3}>
        {Array.isArray(props.data) && props.data.map((acc) => (
            <Grid item xs={6}>
            <AccountCard id={acc.id} name={acc.name} balance={acc.credit} accountLink={"/konto/" + acc.id}/>
            </Grid>
        ))}
      </Grid>
    </Box>
  );
}
