import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Moment from 'components/Moment/Moment';

describe('SimpleButton', () => {
  const date = new Date('December 9, 1992 03:24:00');

  it('should render without throwing an error', () => {
    expect(shallow(<Moment />).find('div.moment').exists()).toBe(true);
  });

  it('should set the props correctly', () => {
    const wrapper = shallow(<Moment time={date} />);
    const { className, children } = wrapper.props();
    const dayContent = children[0];
    const timeContent = children[1];
    const dayContentDay = dayContent.props.children[0];
    const dayContentMonth = dayContent.props.children[1];

    expect(className).toBe('moment');
    expect(dayContent.type).toBe('div');
    expect(timeContent.type).toBe('div');

    expect(dayContent.props.className).toBe('moment-day-content');
    expect(timeContent.props.className).toBe('moment-time-content');
    expect(timeContent.props.children).toBe('3:24 AM');

    expect(dayContentDay.props.className).toBe('moment-day-number');

    expect(dayContentMonth.props.className).toBe('moment-month');
    expect(dayContentMonth.props.children).toBe('December 1992');
  });

  it('should render deep correctly', () => {
    const tree = renderer.create(<Moment time={date} />);
    expect(tree).toMatchSnapshot();
  });
});
