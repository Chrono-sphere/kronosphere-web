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
    const input = children[0];
    const span = children[1];

    expect(className).toBe('textbox');
    expect(input.props.placeholder).toBe(placeholder);
    expect(input.props.type).toBe('normal');
    expect(input.props.value).toBe('');
    expect(input.props.spellCheck).toBe(false);

    expect(span.props.className).toBe('input-highlight');
    expect(span.props.children).toBe('');
  });

  it('should render deep correctly', () => {
    const tree = renderer.create(<TextBox placeholder={placeholder} id="test" />);
    expect(tree).toMatchSnapshot();
  });
});
