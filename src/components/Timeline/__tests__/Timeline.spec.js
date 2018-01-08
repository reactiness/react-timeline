import React from 'react';
import { shallow } from 'enzyme';
import { TimelineItem, Timeline } from '../..';

describe('<Timeline />', () => {

  it ('should render all of the timeline items', () => {
    const wrapper = shallow(
      <Timeline step={0} steps={[
        <TimelineItem key={0} header="Header 0">Body 0</TimelineItem>,
        <TimelineItem key={1} header="Header 1">Body 1</TimelineItem>
      ]} />
    );
    expect(wrapper.find('TimelineItem').length).toEqual(2);
  });

  it ('should render the first body', () => {
    const wrapper = shallow(
      <Timeline step={0} steps={[
        <TimelineItem key={0} header="Header 0">Body 0</TimelineItem>,
        <TimelineItem key={1} header="Header 1">Body 1</TimelineItem>
      ]} />
    );
    expect(wrapper.findWhere(x => x.text() === 'Body 0').length).toEqual(1);
  });

});
