import { Typography, Button, IconButton } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import { useState } from 'react';
import { styled } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Users() {
  const [profileType, setProfileType] = useState('User Profile');

  const handleProfileChange = (newProfile) => {
    setProfileType(newProfile);
  };

  const getUserColumns = () => [
    {
      name: 'email',
      label: 'Email ID',
      options: {
        filter: false,
        sort: false
      }
    },
    {
      name: 'name',
      label: 'Full Name',
      options: {
        filter: false,
        sort: false
      }
    },
    {
      name: 'dob',
      label: 'Date of Birth',
      options: {
        filter: false,
        sort: false
      }
    },
    {
      name: 'country',
      label: 'Country',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: 'sex',
      label: 'Sex',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: 'action',
      label: 'Action',
      options: {
        filter: false,
        sort: false,
        print: false,
        download: false,
        customBodyRender: (value, tableMeta) => {
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

  const getHealthColumns = () => [
    { name: 'email', label: 'Email ID', options: { filter: false, sort: false } },
    { name: 'DiabetesType', label: 'Diabetes Type', options: { filter: true, sort: false } },
    { name: 'BMI', label: 'BMI', options: { filter: true, sort: true } },
    { name: 'BMR', label: 'BMR', options: { filter: true, sort: true } },
    { name: 'HBA1c', label: 'HBA1c', options: { filter: true, sort: true } },
    { name: 'GlucoseLevels', label: 'Glucose Levels', options: { filter: true, sort: true } },
    { name: 'InsulinLevels', label: 'Insulin Levels', options: { filter: true, sort: true } },
    { name: 'CaloricNeeds', label: 'Caloric Needs', options: { filter: true, sort: true } },
    { name: 'Fatper', label: 'Fat %', options: { filter: true, sort: true } },
    { name: 'Carbsper', label: 'Carbs %', options: { filter: true, sort: true } },
    { name: 'Proteinper', label: 'Protein %', options: { filter: true, sort: true } },
    { name: 'Likes', label: 'Likes', options: { filter: true, sort: true } },
    { name: 'Dislikes', label: 'Dislikes', options: { filter: true, sort: true } },
    { name: 'Allergies', label: 'Allergies', options: { filter: true, sort: true } },
    { name: 'action', label: 'Action', options: { filter: false, sort: false } }
  ];

  const columns = profileType === 'User Profile' ? getUserColumns() : getHealthColumns();

  const data = [
    { email: 'ahmedali.syed359@gmail.com', name: 'Ahmed Ali', dob: '10/11/2002', country: 'Pakistan', sex: 'M' },
    { email: 'mohammad@gmail.com', name: 'Mohammad Ali', dob: '06/01/2002', country: 'Saudi Arabia', sex: 'M' },
    { email: 'khizar@gmail.com', name: 'Khizar Iqbal', dob: '28/04/2001', country: 'Pakistan', sex: 'M' },
    { email: 'hamail@gmail.com', name: 'Hamail Shahbaz', dob: '16/06/2003', country: 'Pakistan', sex: 'F' },
    { email: 'safoora@gmail.com', name: 'Safoora Masood', dob: '18/02/2002', country: 'Pakistan', sex: 'F' }
  ];

  const options = {
    filterType: 'checkbox',
    selectableRows: 'none',
    elevation: 1,
    rowsPerPage: 8,
    rowsPerPageOptions: [2, 5, 10, 20, 30],
    sortable: false,
    responsive: 'standard',
    tableBodyHeight: 'auto',
    tableBodyMaxHeight: '',
    pagination: true,
    fixedHeader: true,
    maxWidth: 50,
    draggableColumns: {
      enabled: true
    }
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

  const StyledButton = styled(Button)(({ active }) => ({
    position: 'relative',
    marginRight: '20px',
    paddingBottom: '5px',
    color: active ? 'green' : 'inherit',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '2px',
      backgroundColor: 'green',
      transform: active ? 'scaleX(1)' : 'scaleX(0)',
      transition: 'transform 0.3s ease'
    },
    '&:hover::after': {
      transform: 'scaleX(1)'
    },
    '&:hover': {
      color: 'green'
    }
  }));

  return (
    <div>
      <div className="mb-5 ml-1">
        <Typography variant="h2" className="font-roboto">
          User Table
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
          <StyledButton variant="text" onClick={() => handleProfileChange('User Profile')} active={profileType === 'User Profile'}>
            User Profile
          </StyledButton>
          <StyledButton variant="text" onClick={() => handleProfileChange('Health Profile')} active={profileType === 'Health Profile'}>
            Health Profile
          </StyledButton>
        </div>
      </div>

      <div style={{ overflowX: 'hidden', width: '100%' }}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </div>
    </div>
  );
}

export default Users;
