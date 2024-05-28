import React from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';
import Logo from './logo.png'; // Update this import to the correct path of your logo image

const theme = createTheme({
  palette: {
    primary: {
      main: '#6fa58e'
    }
  }
});

const SignupForm = () => {
  //   const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <div className="flex h-screen">
        {/* Left side (displayed on larger screens) */}
        <div className="hidden sm:flex w-1/2 items-center justify-center" style={{ backgroundColor: '#6fa58e' }}>
          <img src={Logo} alt="SugarSage Logo" className="h-70" />
        </div>

        {/* Right side */}
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center p-8">
          <Typography component="h4" variant="h4" className="mb-12 tracking-wide font-extrabold text-center" style={{ color: '#4c4c4c' }}>
            Enter your Personal Details
          </Typography>
          <Box
            component="form"
            sx={{
              width: '100%', // Fix IE 11 issue.
              maxWidth: '400px'
            }}
            noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{ mb: 2, borderRadius: '200px' }}
              InputProps={{
                style: {
                  borderRadius: '10px'
                }
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{ mb: 2 }}
              InputProps={{
                style: {
                  borderRadius: '10px'
                }
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Confirm Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{ mb: 2 }}
              InputProps={{
                style: {
                  borderRadius: '10px'
                }
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                margin: (theme) => theme.spacing(3, 0, 2),
                bgcolor: '#70a68f', // Tailwind 'green-500'
                borderRadius: '10px',
                color: 'white',
                padding: '9px'
              }}
            >
              Continue
            </Button>
          </Box>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default SignupForm;
