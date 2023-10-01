import React from 'react';
import './Header.css';

import { WalletAdapter } from './components/WalletAdapter';

function Header() {
    return (
      <header className="header">
        <nav className="navbar">
          <h1>SynthX</h1>
          <WalletAdapter />
        </nav>
      </header>
    );
  }
  

export default Header;