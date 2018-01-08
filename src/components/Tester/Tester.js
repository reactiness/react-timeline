import React from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from '..';

const ZERO = 0;
const ONE = 1;

/**
 * The tester is a temporary component that provides buttons
 * to step forwards/backwards through the steps.
 */
export class Tester extends React.Component {

  constructor (props) {
    super(props);
    this.state = { step: 0 };
  }

  handlePrevious = () =>
    this.setState({ step: this.state.step === ZERO ? ZERO : this.state.step - ONE });

  handleNext = () =>
    this.setState({ step: this.state.step + ONE });

  render () {

    return (
      <div>
        <Timeline step={this.state.step} steps={[
          <TimelineItem key={0} header="Header for step 0">This is the step 0</TimelineItem>,
          <TimelineItem key={1} header="Header for step 1">This is the step 1</TimelineItem>,
          <TimelineItem key={2} header="Header for step 2">This is the step 2</TimelineItem>,
          <TimelineItem key={3} header="Header for step 3">This is the step 3</TimelineItem>,
          <TimelineItem key={4} header="Header for step 4">This is the step 4</TimelineItem>,
          <TimelineItem key={5} header="Header for step 5">This is the step 5</TimelineItem>,
          <TimelineItem key={6} header="Header for step 6">This is the step 6</TimelineItem>,
          <TimelineItem key={7} header="Header for step 7">This is the step 7</TimelineItem>,
          <TimelineItem key={8} header="Header for step 8">This is the step 8</TimelineItem>,
          <TimelineItem key={9} header="Header for step 9">This is the step 9</TimelineItem>
        ]} />
        <div>
          <button onClick={this.handlePrevious}>Previous</button>
          <button onClick={this.handleNext}>Next</button>
        </div>
      </div>
    );
  }
}

Tester.propTypes = {
  step: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(TimelineItem).isRequired
};
