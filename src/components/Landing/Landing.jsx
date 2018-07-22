import React from 'react';
import SimpleButton from 'components/SimpleButton/SimpleButton';
import Logo from 'images/logo/kronosphere_logo_without_shadow.png';
import Resources from './Landing.resource';

import './Landing.scss';

const Landing = () => (
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
        <SimpleButton title={Resources.Button.signup} />
        <SimpleButton title={Resources.Button.login} />
      </div>
    </div>
  </div>
);

export default Landing;
