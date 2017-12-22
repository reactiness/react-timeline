import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Component from '../App';

describe('<App />', () => {
  it ('should render an image', () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.find('img').length).toEqual(1);
  });
});
