import React from 'react';
import Logo from './Logo';
import NAV from './Nav';
import Container from '@material-ui/core/Container';
const Header = () => {
    return <header>
    <Container fixed>
    <Logo/>
    <NAV/>
    </Container>    
    <style jsx>{`
    header {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      display:flex;
    }
    `}</style>
    </header>
}

export default Header;