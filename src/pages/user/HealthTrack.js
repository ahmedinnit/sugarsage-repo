import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, CircularProgress, FormControl, Select, MenuItem } from '@mui/material';
import {
  Bar,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  LineChart,
  Line,
  Area,
  AreaChart
} from 'recharts';
import MainCard from 'components/MainCard';

// const sleepData = [
//   { day: 'Sunday', Hours: 7 },
//   { day: 'Monday', Hours: 6 },
//   { day: 'Tuesday', Hours: 8 },
//   { day: 'Wednesday', Hours: 5 },
//   { day: 'Thursday', Hours: 7 },
//   { day: 'Friday', Hours: 6 },
//   { day: 'Saturday', Hours: 9 }
// ];

const data = [];
for (let i = 1; i <= 12; i++) {
  // Loop through 12 months
  for (let j = 1; j <= 30; j++) {
    // Assume 30 days for simplicity
    const month = i.toString().padStart(2, '0');
    const day = j.toString().padStart(2, '0');
    const bloodSugar = Math.floor(Math.random() * (180 - 100 + 1) + 100); // Random blood sugar between 100 and 180
    data.push({
      date: `2023-${month}-${day}`,
      bloodSugar
    });
  }
}

const gramsOfFats = Math.random() * 70 + 50; // between 50g and 120g
const gramsOfProteins = Math.random() * 90 + 60; // between 60g and 150g
const gramsOfCarbs = Math.random() * 100 + 150; // between 150g and 250g

const nutritions_data = [
  { name: 'Fats', grams: gramsOfFats.toFixed(2), calories: gramsOfFats * 9 },
  { name: 'Proteins', grams: gramsOfProteins.toFixed(2), calories: gramsOfProteins * 4 },
  { name: 'Carbs', grams: gramsOfCarbs.toFixed(2), calories: gramsOfCarbs * 4 }
];

nutritions_data.forEach((item) => {
  item.grams = parseFloat(item.grams).toFixed(2);
  item.calories = parseFloat(item.calories);
});

const colors = ['#6ea393', '#92c2ad', '#7ad0b6'];

const weight_data = [
  { name: 'January', YourWeight: 100, IdealWeight: 65 },
  { name: 'February', YourWeight: 102, IdealWeight: 65 },
  { name: 'March', YourWeight: 104, IdealWeight: 65 },
  { name: 'April', YourWeight: 106, IdealWeight: 64 },
  { name: 'May', YourWeight: 108, IdealWeight: 64 },
  { name: 'June', YourWeight: 100, IdealWeight: 63 },
  { name: 'July', YourWeight: 95, IdealWeight: 63 },
  { name: 'August', YourWeight: 90, IdealWeight: 62 },
  { name: 'September', YourWeight: 61, IdealWeight: 80 },
  { name: 'October', YourWeight: 61, IdealWeight: 81 },
  { name: 'November', YourWeight: 60, IdealWeight: 85 },
  { name: 'December', YourWeight: 59, IdealWeight: 85 }
];

const insulin_data = [
  { date: '2024-01-01', insulin: 25, glucose: 120 },
  { date: '2024-01-02', insulin: 30, glucose: 110 },
  { date: '2024-01-03', insulin: 28, glucose: 115 },
  { date: '2024-01-04', insulin: 32, glucose: 105 },
  { date: '2024-01-05', insulin: 25, glucose: 110 },
  { date: '2024-01-06', insulin: 27, glucose: 100 }
  // Continue with more data
];

export default function HealthTracker() {
  const [animatedValue, setAnimatedValue] = useState(0);
  const current_cals = 500;
  const total_cals = 2800;
  const completion = Math.min(100, (current_cals / total_cals) * 100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(completion); // Gradually set the value to match completion
    }, 250); // Starts animation 500ms after component mounts

    return () => clearTimeout(timer); // Clean up the timer
  }, [completion]);

  const [year, setYear] = useState(2023); // Default to current year
  const years = [2021, 2022, 2023]; // Example years you might have data for

  // Filter data based on selected year
  const yearlyData = data.filter((item) => new Date(item.date).getFullYear() === year);

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
        Health Tracking
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <MainCard elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Calories Track
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* Background Circle */}
                <CircularProgress variant="determinate" value={100} size={200} thickness={3} sx={{ color: 'rgba(0, 0, 0, 0.1)' }} />
                {/* Foreground Circle (Actual Progress) */}
                <CircularProgress
                  variant="determinate"
                  value={animatedValue}
                  size={200}
                  thickness={3}
                  sx={{ position: 'absolute', color: '#6ea393' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Typography variant="h3" component="div">
                    {`${Math.round(completion)}%`}
                  </Typography>
                  <Typography variant="h6">{`${current_cals}/${total_cals} Cals`}</Typography>
                </Box>
              </Box>
            </ResponsiveContainer>
          </MainCard>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <MainCard elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Nutrition Breakdown
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={nutritions_data}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="calories"
                  nameKey="name"
                  label={(entry) =>
                    `${entry.name}: ${parseFloat(entry.grams).toFixed(2)}g (${((entry.calories / total_cals) * 100).toFixed(2)}%)`
                  }
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name, props) =>
                    `${parseFloat(props.payload.grams).toFixed(2)}g, ${value.toFixed(0)} cal (${((value / total_cals) * 100).toFixed(2)}%)`
                  }
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </MainCard>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <MainCard elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Insulin Dosage Track
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={insulin_data}>
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" orientation="left" stroke="#6ea393" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="insulin" barSize={20} fill="#6ea393" />
                <Line yAxisId="right" type="monotone" dataKey="glucose" stroke="#82ca9d" />
              </ComposedChart>
            </ResponsiveContainer>
          </MainCard>
        </Grid>

        <Grid item xs={12}>
          <MainCard elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Ideal Weight
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={weight_data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="gradYourWeight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gradIdealWeight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" stackId="1" dataKey="YourWeight" stroke="#8884d8" fill="url(#gradYourWeight)" />
                <Area type="monotone" stackId="1" dataKey="IdealWeight" stroke="#82ca9d" fill="url(#gradIdealWeight)" />
              </AreaChart>
            </ResponsiveContainer>
          </MainCard>
        </Grid>

        <Grid item xs={12}>
          <MainCard elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5" sx={{ mb: 5 }} gutterBottom>
              Blood Sugar History
            </Typography>
            {/* <ResponsiveContainer width="100%" height={300}> */}
            <Box sx={{ marginBottom: 2, textAlign: 'right' }}>
              <FormControl>
                <Select value={year} onChange={(e) => setYear(e.target.value)} inputProps={{ 'aria-label': 'Without label' }}>
                  {years.map((yr) => (
                    <MenuItem key={yr} value={yr}>
                      {yr}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={yearlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={['dataMin - 10', 'dataMax + 10']} />
                <Tooltip />
                <Line type="monotone" dataKey="bloodSugar" stroke="#82ca9d" fill="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
            {/* </Card> */}
            {/* </ResponsiveContainer> */}
          </MainCard>
        </Grid>
      </Grid>
    </Box>
  );
}
