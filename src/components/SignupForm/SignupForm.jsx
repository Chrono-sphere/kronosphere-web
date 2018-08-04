import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import SimpleButton from 'components/SimpleButton/SimpleButton';
import TextBox from 'components/TextBox/TextBox';
import Validation, { ValidationType } from 'utils/Validation';
import signupMutation from 'mutations/Signup';
import currentUserQuery from 'queries/CurrentUser';

import './SignupForm.scss';

class SignupForm extends Component {
  state = {
    isReadyButtonDisable: true,
    emailValue: '',
    passwordValue: '',
    isEmailValid: false,
    isPasswordValid: false,
    isConfirmPasswordValid: false,
  }

  /**
   * Callback for whenever email field value is changed
   */
  onEmailValueChange = emailValue => this.setState({ emailValue });

  /**
   * Callback for whenever password field value is changed
   */
  onPasswordValueChange = (passwordValue) => {
    this.setState({ passwordValue });
    this.confirmPasswordFieldValidations[0].args = [passwordValue];
  }

  /**
   * TODO
   */
  onEmailValidityChange = (isValid) => {
    const isReadyButtonDisable = !(
      isValid &&
      this.state.isPasswordValid &&
      this.state.isConfirmPasswordValid
    );
    this.setState({ isReadyButtonDisable, isEmailValid: isValid });
  }

  /**
   * TODO
   */
  onEmailValidityChange = (isValid) => {
    const isReadyButtonDisable = !(
      isValid &&
      this.state.isPasswordValid
    );
    this.setState({ isReadyButtonDisable, isEmailValid: isValid });
  }

  /**
   * TODO
   */
  onPasswordValidityChange = (isValid) => {
    const isReadyButtonDisable = !(
      isValid &&
      this.state.isEmailValid &&
      this.state.isConfirmPasswordValid
    );
    this.setState({ isReadyButtonDisable, isPasswordValid: isValid });
  }

  /**
   * TODO
   */
  onConfirmPasswordValidityChange = (isValid) => {
    const isReadyButtonDisable = !(
      isValid &&
      this.state.isEmailValid &&
      this.state.isPasswordValid
    );
    this.setState({ isReadyButtonDisable, isConfirmPasswordValid: isValid });
  }

  /**
   * Action handler when the signup form buton is clicked.
   */
  onSignupSubmitBtnClicked = () => {
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

  // Validators related to the confirm password field
  confirmPasswordFieldValidations = [
    new Validation(ValidationType.Match, [this.state.passwordValue]),
  ];

  render = () => (
    <div className="signup-form-controls">
      <TextBox
        placeholder={this.props.emailPlaceholder}
        validations={this.emailFieldValidations}
        onValueChange={this.onEmailValueChange}
        onValidityChange={this.onEmailValidityChange}
      />
      <TextBox
        placeholder={this.props.passwordPlaceholder}
        inputType="password"
        validations={this.passwordFieldValidations}
        onValueChange={this.onPasswordValueChange}
        onValidityChange={this.onPasswordValidityChange}
      />
      <TextBox
        placeholder={this.props.confirmPasswordPlaceholder}
        onValidityChange={this.onConfirmPasswordValidityChange}
        validations={this.confirmPasswordFieldValidations}
        inputType="password"
      />
      <SimpleButton
        title={this.props.buttonLabel}
        btnDisabled={this.state.isReadyButtonDisable}
        onBtnClick={this.onSignupSubmitBtnClicked}
      />
    </div>
  )
}

SignupForm.propTypes = {
  mutate: PropTypes.func,
  emailPlaceholder: PropTypes.string,
  passwordPlaceholder: PropTypes.string,
  confirmPasswordPlaceholder: PropTypes.string,
  buttonLabel: PropTypes.string,
};

SignupForm.defaultProps = {
  mutate: () => null,
  emailPlaceholder: null,
  passwordPlaceholder: null,
  confirmPasswordPlaceholder: null,
  buttonLabel: null,
};

export default graphql(signupMutation)(SignupForm);
