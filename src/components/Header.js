import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <div className='header'>{props.title}</div>
);
Header.propTypes = {
  title: PropTypes.string,
};
Header.defaultProps = {
  title: 'App',
};

export default Header;
