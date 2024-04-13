
export const createTables = () => {
  const data = `
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar, GridValueFormatterParams } from '@mui/x-data-grid';

import TabsNavigationCustom from '../../../../components/common/TabsNavigationCustom';
import DataTableCustom from '../../../../components/common/DataTableCustom';
import { users } from '../../../../../mock/users';

import { HiOutlinePencil, HiOutlineDotsVertical } from "react-icons/hi";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { useLayoutContext } from '../../../../context/LayoutContext';

const Tables = () => {
  const { openSidebar } = useLayoutContext();
  const columnsUnCustom: GridColDef[] = Object.keys(users[0]).map((key) => ({
    field: key,
    headerName: key,
    flex: 1,
  }));

  const rows = [...users];

  const tableSimple = (
    <>
      <DataGrid
        rows={rows}
        columns={columnsUnCustom}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 25]}
      />
    </>
  );

  const tableFilterSlot = (
    <DataGrid
      rows={rows}
      columns={columnsUnCustom}
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
  );

  const tableVoid = (
    <DataTableCustom
      rows={[]}
      columns={columnsUnCustom}
    />
  )


  const columns: GridColDef[] = [
    { field: "id", width: 180 },
    {
      field: "avatar",
      width: 200,
      renderCell: (params: GridRenderCellParams<any, any>) => (
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar alt="Remy Sharp" src={params.row.avatarUrl} />
          <Typography variant='body2'>{params.row.name}</Typography>
        </Box>
      ),
    },
    { field: "company", headerName: "Company", width: 250 },
    {
      field: "isVerified",
      renderCell: (params: GridRenderCellParams<any, any>) => {
        const isVerified = params.row.isVerified;
        return (
          <Chip
            label={isVerified ? "si" : "no"}
            color={isVerified ? "success" : "error"}
            variant="outlined"
          />
        )
      }
    },
    {
      field: "status",
      renderCell: (params: GridRenderCellParams<any, any>) => {
        const status = params.row.status;
        return (
          <Chip
            label={status}
            color={status == "active" ? "success" : "error"}
            variant="outlined"
          />
        )
      }
    },
    { field: "role", headerName: "Roles", width: 150 },
    {
      field: "porcent",
      valueFormatter: (params: GridValueFormatterParams<number>) => {
        if (params.value == null) {
          return '';
        }
        return \`\${params.value.toLocaleString()} %\`;
      },
    },
    {
      field: " ",
      renderCell: (params: GridRenderCellParams<any, any>) => {
        return (
          <Box>
            <Tooltip title="Edit" placement='top'>
              <IconButton>
                <HiOutlinePencil />
              </IconButton>
            </Tooltip>

            <Tooltip title="Options" placement='top'>
              <IconButton>
                <HiOutlineDotsVertical />
              </IconButton>
            </Tooltip>
          </Box>
        )
      },
    }
  ];
  const tableCompleted = (
    <DataTableCustom
      columns={columns}
      rows={rows}
    />
  );




  return (
    <Grid container spacing={3}>
      <Grid xs={12}>
        <Typography variant="h6">Tables</Typography>
      </Grid>

      <div style={{ width: openSidebar ? "74vw" : "100%" }}>
        <Card
          component={Stack}
          spacing={1}
          direction="column"
          sx={{
            px: 1,
            py: 1,
            borderRadius: 2,
          }}
        >
          <TabsNavigationCustom
            tabs={[
              { value: "1", label: "Simple" },
              { value: "2", label: "filter slot" },
              { value: "3", label: "void" },
              { value: "4", label: "Custom" },
            ]}
            tabsPanels={[
              { value: "1", node: tableSimple },
              { value: "2", node: tableFilterSlot },
              { value: "3", node: tableVoid },
              { value: "4", node: tableCompleted },
            ]}
          />

        </Card>
      </div>
    </Grid>
  )
}

export default Tables
`;
  return data;
}
