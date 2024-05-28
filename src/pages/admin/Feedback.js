import { Typography, IconButton } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

function Feedback() {
  const dishCols = [
    {
      name: 'fbid',
      label: 'Dish ID',
      options: {
        filter: false,
        sort: true,
        setCellHeaderProps: () => ({
          style: {
            width: '10%',
            paddingLeft: '20px'
          }
        })
      }
    },
    {
      name: 'userid',
      label: 'User ID',
      options: {
        filter: false,
        sort: false,
        setCellHeaderProps: () => ({
          style: {
            width: '10%'
          }
        })
      }
    },
    {
      name: 'description',
      label: 'Description',
      options: {
        filter: true,
        sort: false,
        setCellHeaderProps: () => ({
          style: {
            width: '20%',
            paddingLeft: '30px'
          }
        })
      }
    },
    {
      name: 'fbtype',
      label: 'Feedback Type',
      options: {
        filter: true,
        sort: false,
        setCellHeaderProps: () => ({
          style: {
            width: '15%'
          }
        })
      }
    },
    {
      name: 'time',
      label: 'Time',
      options: {
        filter: true,
        sort: true,
        setCellHeaderProps: () => ({
          style: {
            width: '15%'
          }
        })
      }
    },
    {
      name: 'date',
      label: 'Date',
      options: {
        filter: true,
        sort: true,
        setCellHeaderProps: () => ({
          style: {
            width: '15%'
          }
        })
      }
    },
    {
      name: 'action',
      label: 'Action',
      options: {
        filter: false,
        sort: false,
        setCellHeaderProps: () => ({
          style: {
            paddingLeft: '10px',
            textAlign: 'center',
            width: '15%'
          }
        }),
        customBodyRender: (value, tableMeta) => {
          return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <IconButton aria-label="view" onClick={() => handleView(tableMeta.rowIndex)}>
                <VisibilityIcon />
              </IconButton>
              <IconButton aria-label="edit" onClick={() => handleEdit(tableMeta.rowIndex)}>
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete" onClick={() => handleDelete(tableMeta.rowIndex)}>
                <DeleteIcon />
              </IconButton>
            </div>
          );
        }
      }
    }
  ];

  const data = [
    {
      dishNo: 1,
      dishid: 0,
      dishname: 'Chapati',
      category: 'Bread',
      season: 'Any',
      energy: 93,
      fats: 0.1,
      proteins: 1.95,
      carbs: 21.45,
      gi: 80
    },
    {
      dishNo: 2,
      dishid: 1,
      dishname: 'Mashed Potatoes',
      category: 'Vegetables',
      season: 'Any',
      energy: 88,
      fats: 0.2,
      proteins: 1.8,
      carbs: 20.1,
      gi: 70
    },
    {
      dishNo: 3,
      dishid: 2,
      dishname: 'Baked Potatoes',
      category: 'Vegetables',
      season: 'Any',
      energy: 96,
      fats: 0.15,
      proteins: 2.0,
      carbs: 22.3,
      gi: 85
    },
    {
      dishNo: 4,
      dishid: 3,
      dishname: 'Fried Potatoes',
      category: 'Vegetables',
      season: 'Any',
      energy: 312,
      fats: 15.0,
      proteins: 3.5,
      carbs: 41.5,
      gi: 75
    }
  ];

  const options = {
    filterType: 'checkbox',
    selectableRows: false,
    elevation: 1,
    rowsPerPage: 8,
    rowsPerPageOptions: [2, 5, 10, 20, 30],
    sortable: false,
    responsive: 'standard',
    tableBodyHeight: 'auto',
    tableBodyMaxHeight: '',
    pagination: true,
    fixedHeader: true,
    draggableColumns: {
      enabled: true
    }
  };

  const handleView = (rowIndex) => {
    // Implement your view logic here
    console.log('View row:', rowIndex);
  };

  const handleEdit = (rowIndex) => {
    // Implement your edit logic here
    console.log('Edit row:', rowIndex);
  };

  const handleDelete = (rowIndex) => {
    // Implement your delete logic here
    console.log('Delete row:', rowIndex);
  };

  return (
    <div>
      <div className="mb-5 ml-1">
        <Typography variant="h2" className="font-roboto text-gray-800">
          Feedback Table
        </Typography>
      </div>

      <div style={{ overflowX: 'auto', width: '100%' }}>
        <MUIDataTable data={data} columns={dishCols} options={options} />
      </div>
    </div>
  );
}

export default Feedback;
