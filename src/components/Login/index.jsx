import React from 'react';
import { Button, InputAdornment, TextField } from '@mui/material';
import { AccountCircle, LockRounded } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import styled from 'styled-components';
/* import colors from '../../utils/style/colors'; */

import Image from '../../assets/img/home-wallpaper2.jpg';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#FFFFFF'
    }
  }
});

const LoginContainer = styled.div`
  margin: 0;
  min-height: 80vh;
  height: 80vh;
`;

const LoginImg = styled.div`
  height: 800px;
  width: 100%;
  background-image: url(${Image});
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
`;

function Login() {
  return (
    <ThemeProvider theme={customTheme}>
      <LoginContainer>
        <LoginImg>
          <TextContainer>
            <TextField
              color="primary"
              placeholder="Agent"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle color="primary" />
                  </InputAdornment>
                ),
                style: { color: 'black', backgroundColor: 'white' }
              }}
            />
            <TextField
              color="primary"
              placeholder="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockRounded color="primary" />
                  </InputAdornment>
                ),
                style: { color: 'black', backgroundColor: 'white' }
              }}
            />
          </TextContainer>
          <Button
            color="error"
            variant="contained"
            size="large"
            style={{ marginTop: '20px', width: '30vh' }}
          >
            Log In
          </Button>
        </LoginImg>
      </LoginContainer>
    </ThemeProvider>
  );
}

export default Login;
