import React from 'react';
import { storiesOf } from '@storybook/react';
import { Timeline, TimelineItem, Tester } from '../src/components';

storiesOf('Timeline', module)
  .add(
    'with one element',
    () => (
      <Tester>
        <Timeline step={1} steps={[
          <TimelineItem key={0} header="Step 0">This is step 0</TimelineItem>,
          <TimelineItem key={1} header="Step 1">This is step 1</TimelineItem>
        ]} />
      </Tester>
    )
  )
  .add(
    'with multiple elements',
    () => (
      <Tester>
        <Timeline step={1} steps={[
          <TimelineItem key={0} header="Step 0">This is step 0</TimelineItem>,
          <TimelineItem key={1} header="Step 1">This is step 1</TimelineItem>
        ]} />
      </Tester>
    )
  );
