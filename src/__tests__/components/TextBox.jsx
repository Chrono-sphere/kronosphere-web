import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import TextBox from 'components/TextBox/TextBox';

describe('TextBox', () => {
  const placeholder = 'text';

  it('should render without throwing an error', () => {
    expect(shallow(<TextBox placeholder={placeholder} />).find('div.textbox').exists()).toBe(true);
  });

  it('should set the props correctly', () => {
    const wrapper = shallow(<TextBox placeholder={placeholder} />);
    const { className, children } = wrapper.props();
    expect(className).toBe('textbox');
    expect(children).toBe(placeholder);
  });

  it('should render deep correctly', () => {
    const tree = renderer.create(<TextBox placeholder={placeholder} />);
    expect(tree).toMatchSnapshot();
  });
});
