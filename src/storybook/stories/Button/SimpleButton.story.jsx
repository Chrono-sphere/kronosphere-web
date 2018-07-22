import React from 'react';
import SimpleButton from 'components/SimpleButton/SimpleButton';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
  .add('SimpleButton', () => (
    <SimpleButton title="Login" />
  ));
