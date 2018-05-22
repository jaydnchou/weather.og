import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <nav className="header">
    <span>{props.title}</span>
  </nav>
);
Header.propTypes = {
  title: PropTypes.string,
};
Header.defaultProps = {
  title: 'App',
};

export default Header;
