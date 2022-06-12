import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

import Logo from '../../assets/logo-atwim.svg';

const NavContainer = styled.header`
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.background};
`;

function Header() {
  return (
    <nav>
      <NavContainer>
        <img src={Logo} alt="Atwim logo" />
        <Link to="/">Accueil</Link>
        <Link to="/myjournal">Mon Journal</Link>
      </NavContainer>
    </nav>
  );
}

export default Header;
