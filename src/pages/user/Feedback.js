import React from 'react';
import { TextField, Typography, Button, Box, MenuItem } from '@mui/material';
import MainCard from 'components/MainCard';

const FeedbackForm = () => {
  return (
    <>
      <Typography variant="h3" component="h1" sx={{ mb: 4 }}>
        Feedbacks
      </Typography>
      <MainCard sx={{ p: 3 }}>
        {/* <Box sx={{ maxWidth: 800, mx: 'auto', mt: 5, px: 3 }}> */}
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mb: 4 }}>
          <TextField
            fullWidth
            label="Email Address"
            sx={{
              mr: 2,
              flex: 1
            }}
          />
          <TextField
            fullWidth
            label="Feedback Type"
            variant="outlined"
            select
            sx={{ flex: 1 }} // Ensures it occupies the remaining space on the line
          >
            <MenuItem value="Positive">Positive</MenuItem>
            <MenuItem value="Negative">Negative</MenuItem>
            <MenuItem value="Neutral" defaultValue>
              Neutral
            </MenuItem>
          </TextField>
        </Box>
        <TextField fullWidth label="Description" variant="outlined" multiline rows={12} sx={{ mb: 2 }} />
        <Button variant="contained" sx={{ mr: 2, backgroundColor: '#6ea393', '&:hover': { backgroundColor: '#5d8c7f' } }}>
          Upload
        </Button>
        <Button variant="contained" sx={{ mr: 2, backgroundColor: '#c36b6a', '&:hover': { backgroundColor: '#a95a5a' } }}>
          Cancel
        </Button>

        {/* </Box> */}
      </MainCard>
    </>
  );
};

export default FeedbackForm;
