import * as React from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ThemeProvider } from '@emotion/react';
import theme from '../theme'

export default function TransactionsList(props) {
  return (
    <ThemeProvider theme={theme}>
    <TableContainer elevation={0} sx = {{padding: 0}} component={Paper}>
      <Table sx={{ minWidth: 650 }} size="large">
        <TableHead>
          <TableRow size="20">
            <TableCell sx = {{padding: 0}} align="left">An</TableCell>
            <TableCell align="left">Von</TableCell>
            <TableCell align="left">Betrag</TableCell>
            <TableCell align="left">Verwendungszweck</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(props.data) && props.data.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

              <TableCell align="left"> {row.ReceiverId} </TableCell>
              <TableCell align="left"> {row.SenderId} </TableCell>
              <TableCell align="left"> {row.amount} </TableCell>
              <TableCell align="left"> {row.purposeofuse} </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>
  );
}