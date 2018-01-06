import React from 'react';
import { storiesOf } from '@storybook/react';
import Timeline from '../src/components/Timeline/Timeline';

storiesOf('Timeline', module)
  .add(
    'with one element',
    () => <Timeline />
  )
  .add(
    'with multiple elements',
    () => <Timeline />
  );
 