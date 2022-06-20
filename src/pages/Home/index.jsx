import * as React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';
import Login from '../../components/Login';

const App = styled.div`
  margin: 0;
  height: 100%;
  overflow: hidden;
`;

function Home() {
  return (
    <App className="App">
      <Header />
      <Login />
    </App>
  );
}

export default Home;
