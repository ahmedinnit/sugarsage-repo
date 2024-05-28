import { Typography, IconButton } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

function Dish() {
  const dishCols = [
    {
      name: 'dishNo',
      label: '#',
      options: {
        filter: false,
        sort: true
      }
    },
    {
      name: 'dishid',
      label: 'Dish ID',
      options: {
        filter: false,
        sort: true
      }
    },
    {
      name: 'dishname',
      label: 'Dish Name',
      options: {
        filter: false,
        sort: false
      }
    },
    {
      name: 'category',
      label: 'Dish Category',
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
      name: 'tcalories',
      label: 'Total Calories (Per 100g)',
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
      name: 'proteins',
      label: 'Proteins (G)',
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
      name: 'gl',
      label: 'GL',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'ingredients',
      label: 'Ingredients',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'recipe',
      label: 'Recipe',
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
        setCellHeaderProps: () => ({
          style: {
            paddingLeft: '37px'
          }
        }),
        customBodyRender: (value, tableMeta) => {
          return (
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
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
      tcalories: 93,
      fats: 0.1,
      proteins: 1.95,
      carbs: 21.45,
      gl: 80,
      ingredients: 'Wheat, Flour, Salt, Water',
      recipe: 'Add Salt in flour and ...'
    },
    {
      dishNo: 2,
      dishid: 1,
      dishname: 'Daal Masoor',
      category: 'Lentils',
      season: 'Any',
      tcalories: 88,
      fats: 0.2,
      proteins: 1.8,
      carbs: 20.1,
      gl: 70,
      ingredients: 'Lentils, Oil, Garlic, Salt',
      recipe: 'Add Salt in flour and ...'
    },
    {
      dishNo: 3,
      dishid: 2,
      dishname: 'Alu Ghosht',
      category: 'Curry',
      season: 'Any',
      tcalories: 96,
      fats: 0.15,
      proteins: 2.0,
      carbs: 22.3,
      gl: 85,
      ingredients: 'Beef, Oil, Potatoes, Onion',
      recipe: 'Add Salt in flour and ...'
    },
    {
      dishNo: 4,
      dishid: 3,
      dishname: 'Fried Potatoes',
      category: 'Vegetables',
      season: 'Any',
      tcalories: 312,
      fats: 15.0,
      proteins: 3.5,
      carbs: 41.5,
      gl: 75,
      ingredients: 'Minced Beef, Onion, Green Chilli',
      recipe: 'Add Salt in flour and ...'
    }
  ];

  const options = {
    filterType: 'checkbox',
    selectableRows: false,
    elevation: 1,
    rowsPerPage: 8,
    rowsPerPageOptions: [2, 5, 10, 20, 30],
    sortable: false,
    fixedHeader: true,
    responsive: 'standard'
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
          Dish Table
        </Typography>
      </div>

      <div style={{ overflowX: 'auto', width: '100%' }}>
        <MUIDataTable data={data} columns={dishCols} options={options} />
      </div>
    </div>
  );
}

export default Dish;
