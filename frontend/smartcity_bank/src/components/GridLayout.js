import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import OutlinedCard from '../components/AccountCard'

//const axios = require('axios').default;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function GridLayout() {

    return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                {OutlinedCard("Konto1", 200)}
            </Grid>
            <Grid item xs={6}>
                {OutlinedCard("Konto2", 1200)}
            </Grid>
            <Grid item xs={6}>
                {OutlinedCard("Konto3", 10)}
            </Grid>
            <Grid item xs={6}>
                 {OutlinedCard("Koto4", 1010)}
            </Grid>
      </Grid>
    </Box>
  );
}
