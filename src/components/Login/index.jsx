import React from 'react';
import styled from 'styled-components';

import Image from '../../assets/img/yjGLEvI-secret-service-wallpaper.jpeg';

const LoginContainer = styled.div`
  margin: 0;
  height: 80vh;
`;

const LoginImg = styled.img`
  height: 100vh;
  width: 100vw;
`;

function Login() {
  return (
    <LoginContainer>
      <LoginImg src={Image} alt="Login" />
    </LoginContainer>
  );
}

export default Login;
