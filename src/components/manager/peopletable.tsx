import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'task1',
    headerName: 'Task 1 ',
    type: 'boolean',
    width: 90,
  },
  {
    field: 'task2',
    headerName: 'Task 2',
    type: 'boolean',
    width: 90,
  },

  {
    field: 'task3',
    headerName: 'Task 3',
    type: 'boolean',
    width: 90,
  },
];

const rows = [
  { id: 1, lastName: 'Schaefer', firstName: 'Caleb', task1: '', task2 : 'F', task3: ''},
  { id: 2, lastName: 'Kenobi', firstName: 'Obi-one', task1: 'F', task2: '', task3 : 'T'},
  
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
