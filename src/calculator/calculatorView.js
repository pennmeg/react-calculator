import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const CalculatorView = ({ total, fontSize }) => (
   <div style={{ fontSize: fontSize }} className='total'>{total}</div>
);

CalculatorView.defaultProps = {
  total: '',
  fontSize: '24px',
};

CalculatorView.propTypes = {
  total: PropTypes.string,
  fontSize: PropTypes.string,
};

export default CalculatorView;
