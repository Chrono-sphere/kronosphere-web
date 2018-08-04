import React, { Component } from 'react';
import $ from 'jquery';
import SimpleButton from 'components/SimpleButton/SimpleButton';
import TextBox from 'components/TextBox/TextBox';
import Utils from 'utils/Utils';
import Validation, { ValidationType } from 'utils/Validation';
import Logo from 'images/logo/kronosphere_logo_without_shadow.png';
import Resources from './Landing.resource';

import './Landing.scss';

class Landing extends Component {
  state = {
    showLogin: false,
    showSignup: false,
    isReadyButtonDisable: true,
    passwordValue: '',
    isEmailValid: false,
    isPasswordValid: false,
    isConfirmPasswordValid: false,
  }

  onLoginBtnClicked = () => this.setState({ showLogin: true, showSignup: false })

  onSignupBtnClicked = () => this.setState({ showSignup: true, showLogin: false })

  onEmailValidityChange = (isValid) => {
    const isReadyButtonDisable = !(
      isValid &&
      this.state.isPasswordValid &&
      // Only validate the confirm password field if the its a signup form
      (
        (
          this.state.showSignup &&
          this.state.isConfirmPasswordValid
        ) ||
        this.state.showLogin
      )
    );
    this.setState({ isReadyButtonDisable, isEmailValid: isValid });
  }

  onPasswordValidityChange = (isValid) => {
    const isReadyButtonDisable = !(
      isValid &&
      this.state.isEmailValid &&
      // Only validate the confirm password field if the its a signup form
      (
        (
          this.state.showSignup &&
          this.state.isConfirmPasswordValid
        ) ||
        this.state.showLogin
      )
    );
    this.setState({ isReadyButtonDisable, isPasswordValid: isValid });
  }

  onConfirmPasswordValidityChange = (isValid) => {
    const isReadyButtonDisable = !(
      isValid &&
      this.state.isEmailValid &&
      this.state.isPasswordValid
    );
    this.setState({ isReadyButtonDisable, isConfirmPasswordValid: isValid });
  }

  onPasswordValueChange = (passwordValue) => {
    this.setState({ passwordValue });
    this.confirmPasswordFieldValidations[0].args = [passwordValue];
  }

  emailFieldValidations = [
    new Validation(ValidationType.Required),
    new Validation(ValidationType.Email),
  ];

  passwordFieldValidations = [
    new Validation(ValidationType.Required),
  ];

  confirmPasswordFieldValidations = [
    new Validation(ValidationType.Match, [this.state.passwordValue]),
  ];

  showLoginForm = () => {
    const signupBtn = $('.simplebutton:eq(0)');
    const loginBtn = $('.simplebutton:eq(1)');

    loginBtn.hide();
    signupBtn.show();

    return (
      <div className="landing-form-controls">
        <TextBox
          placeholder="Email"
          validations={this.emailFieldValidations}
          onValidityChange={this.onEmailValidityChange}
        />
        <TextBox
          placeholder="Password"
          inputType="password"
          onValueChange={this.onPasswordValueChange}
          validations={this.passwordFieldValidations}
          onValidityChange={this.onPasswordValidityChange}
        />
        <SimpleButton
          title={Resources.Button.ready}
          btnDisabled={this.state.isReadyButtonDisable}
        />
      </div>
    );
  }

  showSignUpForm = () => {
    const signupBtn = $('.simplebutton:eq(0)');
    const loginBtn = $('.simplebutton:eq(1)');

    signupBtn.hide();
    loginBtn.show();

    return (
      <div className="landing-form-controls">
        <TextBox
          placeholder="Email"
          validations={this.emailFieldValidations}
          onValidityChange={this.onEmailValidityChange}
        />
        <TextBox
          placeholder="Password"
          inputType="password"
          validations={this.passwordFieldValidations}
          onValueChange={this.onPasswordValueChange}
          onValidityChange={this.onPasswordValidityChange}
        />
        <TextBox
          placeholder="Confirm Password"
          onValidityChange={this.onConfirmPasswordValidityChange}
          validations={this.confirmPasswordFieldValidations}
          inputType="password"
        />
        <SimpleButton
          title={Resources.Button.ready}
          btnDisabled={this.state.isReadyButtonDisable}
        />
      </div>
    );
  }

  showForm = () => {
    if (this.state.showLogin) {
      this.triggerShowFormAnimation();
      return this.showLoginForm();
    } else if (this.state.showSignup) {
      this.triggerShowFormAnimation();
      return this.showSignUpForm();
    }

    return null;
  }

  removeFormAnimation = () => {
    const landingBackground = $('.landing-background');
    const landingForm = $('.landing-form');

    landingBackground.removeClass('landing-animation-move-out-bottom');
    landingForm.removeClass('landing-animation-fade-in');
  }

  triggerShowFormAnimation = () => {
    const landingBackground = $('.landing-background');
    const landingForm = $('.landing-form');

    Utils.addClassUniquely(
      landingBackground,
      'landing-animation-move-out-bottom',
      true,
    );

    Utils.addClassUniquely(
      landingForm,
      'landing-animation-fade-in',
      true,
    );
  }

  render = () => (
    <div className="landing">
      <div className="landing-background" />
      <div className="landing-details">
        <div className="landing-heading">
          <img className="landing-logo-image" alt="logo" src={Logo} />
          <div className="landing-logo-text">
            ronosphere
          </div>
        </div>
        <div className="landing-body">
          {Resources.Content.body}
        </div>
        <div className="landing-button-container">
          <SimpleButton
            title={Resources.Button.signup}
            onBtnClick={this.onSignupBtnClicked}
          />
          <SimpleButton
            title={Resources.Button.login}
            onBtnClick={this.onLoginBtnClicked}
          />
        </div>
        <div className="landing-form">
          {this.showForm()}
        </div>
      </div>
    </div>
  )
}

export default Landing;
