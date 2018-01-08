import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tester } from '../src/components';

storiesOf('Timeline', module)
  .add(
    'with one element',
    () => (
      <Tester>
      </Tester>
    )
  )
  .add(
    'with multiple elements',
    () => (
      <Tester>
      </Tester>
    )
  );
