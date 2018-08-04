import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import SimpleButton from 'components/SimpleButton/SimpleButton';
import TextBox from 'components/TextBox/TextBox';
import Validation, { ValidationType } from 'utils/Validation';
import loginMutation from 'mutations/Login';
import currentUserQuery from 'queries/CurrentUser';

import './LoginForm.scss';

class LoginForm extends Component {
  state = {
    isReadyButtonDisable: true,
    emailValue: '',
    passwordValue: '',
    isEmailValid: false,
    isPasswordValid: false,
  }

  onPasswordValueChange = passwordValue => this.setState({ passwordValue });

  onEmailValueChange = emailValue => this.setState({ emailValue });

  onEmailValidityChange = (isValid) => {
    const isReadyButtonDisable = !(
      isValid &&
      this.state.isPasswordValid
    );
    this.setState({ isReadyButtonDisable, isEmailValid: isValid });
  }

  onPasswordValidityChange = (isValid) => {
    const isReadyButtonDisable = !(
      isValid &&
      this.state.isEmailValid
    );
    this.setState({ isReadyButtonDisable, isPasswordValid: isValid });
  }

  onLoginSubmitBtnClicked = () => {
    const email = this.state.emailValue;
    const password = this.state.passwordValue;

    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query: currentUserQuery }],
    });
  }

  // Validators related to the email field
  emailFieldValidations = [
    new Validation(ValidationType.Required),
    new Validation(ValidationType.Email),
  ];

  // Validators related to the password field
  passwordFieldValidations = [
    new Validation(ValidationType.Required),
  ];

  render = () => (
    <div className="login-form-controls">
      <TextBox
        placeholder={this.props.emailPlaceholder}
        validations={this.emailvalidations}
        onValueChange={this.onEmailValueChange}
        onValidityChange={this.onEmailValidityChange}
      />
      <TextBox
        placeholder={this.props.passwordPlaceholder}
        inputType="password"
        onValueChange={this.onPasswordValueChange}
        validations={this.passwordFieldValidations}
        onValidityChange={this.onPasswordValidityChange}
      />
      <SimpleButton
        title={this.props.buttonLabel}
        btnDisabled={this.state.isReadyButtonDisable}
        onBtnClick={this.onLoginSubmitBtnClicked}
      />
    </div>
  )
}

LoginForm.propTypes = {
  mutate: PropTypes.func,
  emailPlaceholder: PropTypes.string,
  passwordPlaceholder: PropTypes.string,
  buttonLabel: PropTypes.string,
};

LoginForm.defaultProps = {
  mutate: () => null,
  emailPlaceholder: null,
  passwordPlaceholder: null,
  buttonLabel: null,
};

export default graphql(loginMutation)(LoginForm);
