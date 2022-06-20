import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

import Logo from '../../assets/logo/Logo-TheAgency.svg';

const NavContainer = styled.header`
  height: 4em;
  padding: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.background};
  box-shadow: 0 8px 6px -6px black;
`;

const LogoImg = styled.img`
  height: 4em;
  width: 15em;
`;

const NavBar = styled.nav`
  width: 10em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: Futura-med;
  font-size: 16pt;
  a {
    all: unset;
  }
`;

function Header() {
  return (
    <nav>
      <NavContainer>
        <LogoImg src={Logo} alt="Atwim logo" />
        <NavBar>
          <Link to="/">Accueil</Link>
          <Link to="/myjournal">Informations</Link>
        </NavBar>
      </NavContainer>
    </nav>
  );
}

export default Header;
