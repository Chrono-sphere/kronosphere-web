
import React from 'react';
import PropTypes from 'prop-types';

import './SimpleButton.scss';

const SimpleButton = props => (
  <a href="https://gph.is/1sD7JH3" className="simplebutton">
    { props.title }
  </a>
);

SimpleButton.propTypes = {
  title: PropTypes.string,
};

SimpleButton.defaultProps = {
  title: '',
};

export default SimpleButton;
