import React from 'react'
import { func, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import '../styles/_app.scss';


const Toggle = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark';
  return (
    <button  onClick={toggleTheme}  className="app__dark-mode-btn icon level-right">
        <FontAwesomeIcon color={isDark?'white':''} icon={faMoon} />
    </button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;