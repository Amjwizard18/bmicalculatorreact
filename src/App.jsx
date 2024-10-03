import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container, Paper, Grid } from '@mui/material';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      determineHealthStatus(bmiValue);
    }
  };

  const determineHealthStatus = (bmi) => {
    if (bmi < 18.5) {
      setStatus('Underweight');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setStatus('Normal weight');
    } else if (bmi >= 25 && bmi < 29.9) {
      setStatus('Overweight');
    } else {
      setStatus('Obesity');
    }
  };

  const resetCalculator = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setStatus('');
  };

  return (
    <Container maxWidth="xs" style={styles.container}>
      <Paper elevation={4} style={styles.calculator}>
        {/* Display Section */}
        <Box style={styles.display}>
          <Typography variant="h6" style={styles.resultText}>
            {bmi ? `BMI: ${bmi}` : 'BMI: --'}
          </Typography>
          <Typography variant="subtitle1" style={styles.statusText}>
            {status ? `Status: ${status}` : 'Status: --'}
          </Typography>
        </Box>

        {/* Keypad Section */}
        <Grid container spacing={2} justifyContent="center" style={styles.keypad}>
          <Grid item xs={12}>
            <TextField
              label="Weight (kg)"
              variant="outlined"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              fullWidth
              InputLabelProps={{ style: styles.label }}
              inputProps={{ style: styles.input }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Height (cm)"
              variant="outlined"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              fullWidth
              InputLabelProps={{ style: styles.label }}
              inputProps={{ style: styles.input }}
            />
          </Grid>
          <Grid item xs={12} style={styles.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              onClick={calculateBMI}
              fullWidth
              style={styles.button}
            >
              Calculate
            </Button>
          </Grid>
          <Grid item xs={12} style={styles.buttonContainer}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={resetCalculator}
              fullWidth
              style={styles.resetButton}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

const styles = {
  container: {
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'linear-gradient(120deg, #e0f7fa, #80deea)',
  },
  calculator: {
    borderRadius: '20px',
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  display: {
    backgroundColor: '#f5f5f5',
    borderRadius: '15px',
    padding: '20px',
    marginBottom: '20px',
    textAlign: 'center',
    boxShadow: 'inset 0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  resultText: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  statusText: {
    fontSize: '18px',
    color: '#ff5722',
    marginTop: '5px',
  },
  label: {
    fontSize: '14px',
    color: '#333',
  },
  input: {
    fontSize: '16px',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1976d2',
    color: '#fff',
    padding: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: '0.3s',
    borderRadius: '10px',
  },
  resetButton: {
    color: '#1976d2',
    padding: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '10px',
    border: '2px solid #1976d2',
  },
  keypad: {
    padding: '10px 0',
  },
  buttonContainer: {
    marginTop: '10px',
  },
};

export default BMICalculator;
