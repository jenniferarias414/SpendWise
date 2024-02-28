import React, {useContext} from 'react';
import AuthContext from '../store/AuthContext.js';

const Header = () => {
    const { state } = useContext(AuthContext);
  const { username } = state;

  return (
    <header>
        <h4>Welcome, {username}!</h4>
        <button>Logout</button>
    </header>
  )
}

export default Header