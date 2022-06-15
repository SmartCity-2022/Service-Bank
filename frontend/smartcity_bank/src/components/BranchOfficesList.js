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

export default function BranchOfficesList(props) {
  return (
    <ThemeProvider theme={theme}>
    <TableContainer elevation={0} sx = {{padding: 5}} component={Paper}>
      <Table sx={{ minWidth: 650 }} size="large">
        <TableHead>
          <TableRow size="20">
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Adresse</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(props.data) && props.data.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

              <TableCell align="center"> {row.name} </TableCell>
              <TableCell align="center"> {row.address} </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>
  );
}