import { Typography, /*Button,*/ IconButton } from '@mui/material';
import MUIDataTable from 'mui-datatables';
// import { useState } from 'react';
// import { styled } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Food() {
  const foodCols = [
    {
      name: 'foodNo',
      label: '#',
      options: {
        filter: false,
        sort: true
      }
    },
    {
      name: 'foodid',
      label: 'Food ID',
      options: {
        filter: false,
        sort: true
      }
    },
    {
      name: 'foodname',
      label: 'Food Name',
      options: {
        filter: false,
        sort: false
      }
    },
    {
      name: 'category',
      label: 'Food Category',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: 'season',
      label: 'Season',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: 'energy',
      label: 'Energy (KCal)',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'fats',
      label: 'Fats (G)',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'protein',
      label: 'Protein (G)',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'carbs',
      label: 'Carbs (G)',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'gi',
      label: 'GI',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'action',
      label: 'Action',
      options: {
        filter: false,
        sort: false,
        customBodyRender: (tableMeta) => {
          return (
            <>
              <IconButton aria-label="edit" onClick={() => handleEdit(tableMeta.rowIndex)}>
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete" onClick={() => handleDelete(tableMeta.rowIndex)}>
                <DeleteIcon />
              </IconButton>
            </>
          );
        }
      }
    }
  ];

  const data = [
    {
      foodNo: 1,
      foodid: 0,
      foodname: 'Boiled Potatoes',
      category: 'Vegetables',
      season: 'Any',
      energy: 93,
      fats: 0.1,
      proteins: 1.95,
      carbs: 21.45,
      gi: 80
    },
    {
      foodNo: 2,
      foodid: 1,
      foodname: 'Mashed Potatoes',
      category: 'Vegetables',
      season: 'Any',
      energy: 88,
      fats: 0.2,
      proteins: 1.8,
      carbs: 20.1,
      gi: 70
    },
    {
      foodNo: 3,
      foodid: 2,
      foodname: 'Baked Potatoes',
      category: 'Vegetables',
      season: 'Any',
      energy: 96,
      fats: 0.15,
      proteins: 2.0,
      carbs: 22.3,
      gi: 85
    },
    {
      foodNo: 4,
      foodid: 3,
      foodname: 'Fried Potatoes',
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
    responsive: 'standard'
    // responsive: 'scrollFullHeight'
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
          Food Table
        </Typography>
      </div>

      <div style={{ overflowX: 'auto', width: '100%' }}>
        <MUIDataTable data={data} columns={foodCols} options={options} />
      </div>
    </div>
  );
}

export default Food;
