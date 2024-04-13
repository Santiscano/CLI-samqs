
export const createDataTable = () => {
  const data = `import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { FC } from 'react';

interface DataTableProps {
  rows: any[];
  columns: any[];
}
const DataTableCustom: FC<DataTableProps> = ({ rows, columns }) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5, 10, 25]}
      checkboxSelection
      disableRowSelectionOnClick
      disableColumnFilter
      disableColumnSelector
      disableDensitySelector
      slots={{ toolbar: GridToolbar }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
        },
      }}
    />
  )
}

export default DataTableCustom
`;
  return data;
}
