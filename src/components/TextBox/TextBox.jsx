import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import $ from 'jquery';
import './TextBox.scss';

class TextBox extends Component {
  state = {
    value: '',
  };

  onInputChange = ({ target: { value } }) => {
    this.props.onValueChange(value);
    this.setState({ value }, () => this.isValid(this.state.value));
  };

  controlId = this.props.id ? this.props.id : uuidv4();

  isValid = (value) => {
    const badValidations = this.props.validations.filter(validation => !validation.isValid(value));
    const isValid = badValidations.length === 0;

    this.props.onValidityChange(isValid);

    if (this.props.showValidations && !isValid) {
      $(`#${this.controlId}`).css('border-right', '5px solid #f16b6b');
    } else {
      $(`#${this.controlId}`).css('border-right', '');
    }

    return isValid;
  }

  render = () => {
    const { value } = this.state;
    const { placeholder, inputType } = this.props;

    return (
      <div id={this.controlId} className="textbox">
        <input
          onChange={this.onInputChange}
          placeholder={placeholder}
          value={value}
          spellCheck={false}
          type={inputType}
        />
        <span className="input-highlight">
          {value.replace(/ /g, '\u00a0')}
        </span>
      </div>
    );
  }
}

TextBox.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  validations: PropTypes.arrayOf(PropTypes.object),
  showValidations: PropTypes.bool,
  inputType: PropTypes.string,
  onValueChange: PropTypes.func,
  onValidityChange: PropTypes.func,
};

TextBox.defaultProps = {
  id: null,
  placeholder: '',
  validations: [],
  showValidations: true,
  inputType: 'normal',
  onValueChange: () => null,
  onValidityChange: () => null,
};

export default TextBox;
