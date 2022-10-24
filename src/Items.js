import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name,vendor, qty,reOrderLevel, valuatintMethod, value) {
  return { id, date, name, vendor,qty,reOrderLevel, valuatintMethod, value };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Item 1',
    'Vendor 1',
    362,
    300,
    'WAC',
    3127.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Item 2',
    'Vendor 2',
    674,
    550,
    'FIFO',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Item 3','Vendor 3', 56,60, 'WAC', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Item 4',
    'Vendor 4',
    78,
    80,
    'FIFO',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Item 5',
    'Vendor 5',
    56,
    40,
    'FIFO',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Items() {
  return (
    <React.Fragment>
      <Title>Items In Inventory</Title>
      
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell> Item Name</TableCell>
            <TableCell> Vendor Name</TableCell>
            <TableCell align="justify">Qty Available</TableCell>
            <TableCell align="justify">Re-Order Level</TableCell>
            <TableCell align='center'>Valuation Method</TableCell>
            <TableCell  align="right">Total Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.vendor}</TableCell>
              <TableCell>{row.qty}</TableCell>
              <TableCell>{row.reOrderLevel}</TableCell>
              <TableCell align="center">{row.valuatintMethod}</TableCell>
              <TableCell align="right">{`$${row.value}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Items
      </Link>
    </React.Fragment>
  );
}