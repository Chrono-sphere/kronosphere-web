import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import SimpleButton from 'components/SimpleButton/SimpleButton';
import Routes from 'utils/Routes';
import Utils from 'utils/Utils';
import currentUserQuery from 'queries/CurrentUser';
import PropTypes from 'prop-types';
import Logo from 'images/logo/kronosphere_logo_without_shadow.png';
import Resources from './Landing.resource';

import './Landing.scss';
import LoginForm from '../LoginForm/LoginForm';
import SignupForm from '../SignupForm/SignupForm';

class Landing extends Component {
  state = {
    showLogin: false,
    showSignup: false,
  }

  onLoginBtnClicked = () => this.setState({ showLogin: true, showSignup: false })

  onSignupBtnClicked = () => this.setState({ showSignup: true, showLogin: false })

  getLandingRoute = () => (
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

  /**
   * Provides the JSX to display the login form.
   */
  showLoginForm = () => {
    const signupBtn = $('.simplebutton:eq(0)');
    const loginBtn = $('.simplebutton:eq(1)');

    loginBtn.hide();
    signupBtn.show();

    return (
      <LoginForm
        emailPlaceholder={Resources.Placeholder.email}
        passwordPlaceholder={Resources.Placeholder.password}
        buttonLabel={Resources.Button.ready}
      />
    );
  }

  /**
   * Provides the JSX to display the signup form.
   */
  showSignUpForm = () => {
    const signupBtn = $('.simplebutton:eq(0)');
    const loginBtn = $('.simplebutton:eq(1)');

    signupBtn.hide();
    loginBtn.show();

    return (
      <SignupForm
        emailPlaceholder={Resources.Placeholder.email}
        passwordPlaceholder={Resources.Placeholder.password}
        confirmPasswordPlaceholder={Resources.Placeholder.confirmPassword}
        buttonLabel={Resources.Button.ready}
      />
    );
  }

  /**
   * Depending on the state, this shows the appropriate form (Signup or Login).
   */
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

  /**
   * Based on if an active cookie for a logged in user exists, we direct to then
   * dashboard or show the signup box
   * @return {React.Component | Route} Component or Route(component) to render
   */
  renderRoute() {
    const { loading, user } = this.props.data;

    if (loading) {
      return (<div>Loading...</div>);
    } else if (!loading && !user) {
      return this.getLandingRoute();
    }

    return (<Redirect to={Routes.Dashboard} />);
  }

  render = () => this.renderRoute()
}

Landing.propTypes = {
  data: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Landing.defaultProps = {

  data: {},
};

export default graphql(currentUserQuery)(Landing);
