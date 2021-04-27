/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.module.scss';

const Loader = ({ fixed }) => {
  const fixedStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%;',
    zIndex: '999',
  };

  const flexStyles = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <svg style={fixed ? fixedStyles : flexStyles} className={styles.spinner} viewBox='0 0 50 50'>
      <circle className={styles.path} cx='25' cy='25' r='20' fill='none' strokeWidth='5'></circle>
    </svg>
  );
};
Loader.propTypes = {
  fixed: PropTypes.bool,
};

Loader.defaultProps = {
  fixed: false,
};
export default Loader;