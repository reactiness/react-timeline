import React from 'react';
import { shallow } from 'enzyme';
import Component from '../App';

describe('<App />', () => {
  it ('should render an image', () => {
    const wrapper = shallow(<Component />);
    const expectedAmount = 1;
    expect(wrapper.find('img').length).toEqual(expectedAmount);
  });
});
