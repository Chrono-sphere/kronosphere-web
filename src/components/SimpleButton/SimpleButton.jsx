
import React from 'react';
import PropTypes from 'prop-types';

import './SimpleButton.scss';

const SimpleButton = ({ title, onBtnClick, btnDisabled }) => (
  <button
    className="simplebutton"
    onClick={onBtnClick}
    disabled={btnDisabled}
  >
    {title}
  </button>
);

SimpleButton.propTypes = {
  title: PropTypes.string,
  btnDisabled: PropTypes.bool,
  onBtnClick: PropTypes.func,
};

SimpleButton.defaultProps = {
  title: '',
  btnDisabled: false,
  onBtnClick: () => null,
};

export default SimpleButton;
