import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import SimpleButton from 'components/SimpleButton/SimpleButton';

describe('SimpleButton', () => {
  const title = 'Click';

  it('should render without throwing an error', () => {
    expect(shallow(<SimpleButton title={title} />).find('button.simplebutton').exists()).toBe(true);
  });

  it('should set the props correctly', () => {
    const wrapper = shallow(<SimpleButton title={title} />);
    const { className, children } = wrapper.props();
    expect(className).toBe('simplebutton');
    expect(children).toBe(title);
  });

  it('should render deep correctly', () => {
    const tree = renderer.create(<SimpleButton title={title} />);
    expect(tree).toMatchSnapshot();
  });
});
