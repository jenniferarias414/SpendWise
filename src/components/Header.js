import React, {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import AuthContext from '../store/AuthContext.js';
import CoffeeCup from './CoffeeCup.js';
import './Header.css';

const Header = () => {
  const { state, dispatch } = useContext(AuthContext);
  const { username } = state;

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.clear();
    return <Navigate to="/auth" />;
  };

  return (
    <header className="app-header">
      <div className='login-info'>
        <h4 className="header-title">Welcome, {username}!</h4>
        <button className="header-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="coffee-cup-wrapper">
        <CoffeeCup />
      </div>
    </header>
  );
}

export default Header