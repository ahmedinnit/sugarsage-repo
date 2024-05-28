// import { Link } from 'react-router-dom';

// // material-ui
// import { Grid, Stack, Typography, Box } from '@mui/material';

// // project import
// import AuthLogin from './auth-forms/AuthLogin';
// import AuthWrapper from './AuthWrapper';

// // ================================|| LOGIN ||================================ //

// const Login = () => (
//   <AuthWrapper>
//     <Grid container spacing={4}>
//       <Grid item xs={12}>
//         <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
//           <Typography variant="h3">Login</Typography>
//           <Typography component={Link} to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
//             Don&apos;t have an account?
//           </Typography>
//         </Stack>
//       </Grid>
//       <Grid item xs={12}>
//         <AuthLogin />
//       </Grid>
//     </Grid>
//     <Box sx={{ display: 'flex', width: '100%' }}>

//     </Box>
//   </AuthWrapper>
// );

// export default Login;

import React /* , { useState } */ from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Logo from './logo.png'; // Update this import to the correct path of your logo image

const theme = createTheme({
  palette: {
    primary: {
      main: '#6fa58e'
    }
  }
});

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <div className="flex h-screen">
        {/* Left side (displayed on larger screens) */}
        <div className="hidden sm:flex w-1/2 items-center justify-center" style={{ backgroundColor: '#6fa58e' }}>
          <img src={Logo} alt="SugarSage Logo" className="h-70" />
        </div>

        {/* Right side */}
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center p-8">
          <Typography component="h1" variant="h4" className="mb-12 tracking-wide font-extrabold text-center" style={{ color: '#4c4c4c' }}>
            Welcome to SugarSage!
            {/* Login */}
          </Typography>
          <Box
            component="form"
            sx={{
              width: '100%', // Fix IE 11 issue.
              maxWidth: '400px'
            }}
            noValidate
          >
            <Typography variant="h6" className="mb-0.5 font-extrabold tracking-wide text-left" style={{ color: '#4c4c4c' }}>
              Log in
              {/* Login */}
            </Typography>
            <Typography className="mb-3 text-xs tracking-wide text-left" style={{ color: 'gray' }}>
              Don&apos;t Have an account?{' '}
              <button
                onClick={() => navigate('/signup')}
                className="underline text-xs tracking-wide hover:cursor-pointer"
                style={{ color: '#6fa58e' }}
              >
                Register
              </button>
            </Typography>

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
            <Typography variant="body2" className="mb-2 font-extrabold text-right pr-2" style={{ color: 'gray' }}>
              Forgot your password?
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => navigate('/admin/')}
              sx={{
                margin: (theme) => theme.spacing(3, 0, 2),
                bgcolor: '#70a68f', // Tailwind 'green-500'
                borderRadius: '10px',
                color: 'white',
                padding: '9px'
              }}
            >
              Login
            </Button>
          </Box>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LoginPage;
