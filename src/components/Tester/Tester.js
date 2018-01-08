import React from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from '..';

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
    this.setState({ step: this.state.step === 0 ? 0 : this.state.step - 1 });

  handleNext = () =>
    this.setState({ step: this.state.step + 1 });

  sampleBodyText = () =>
    <div>
      <h3>Sample text</h3>
      <p>
        This is some body text
      </p>
      <p>
        This is some body text
      </p>
      <p>
        This is some body text
      </p>
      <p>
        This is some body text
      </p>
      <p>
        This is some body text
      </p>
      <p>
        This is some body text
      </p>
    </div>

  render () {

    return (
      <div>
        <Timeline step={this.state.step} steps={[
          <TimelineItem key={0} header="Header for step 0" completeHeader="Contratulations, you have completed step 0">{this.sampleBodyText()}</TimelineItem>,
          <TimelineItem key={1} header="Header for step 1" completeHeader="Contratulations, you have completed step 1">{this.sampleBodyText()}</TimelineItem>,
          <TimelineItem key={2} header="Header for step 2" completeHeader="Contratulations, you have completed step 2">{this.sampleBodyText()}</TimelineItem>,
          <TimelineItem key={3} header="Header for step 3" completeHeader="Contratulations, you have completed step 3">{this.sampleBodyText()}</TimelineItem>,
          <TimelineItem key={4} header="Header for step 4" completeHeader="Contratulations, you have completed step 4">{this.sampleBodyText()}</TimelineItem>,
          <TimelineItem key={5} header="Header for step 5" completeHeader="Contratulations, you have completed step 5">{this.sampleBodyText()}</TimelineItem>,
          <TimelineItem key={6} header="Header for step 6" completeHeader="Contratulations, you have completed step 6">{this.sampleBodyText()}</TimelineItem>,
          <TimelineItem key={7} header="Header for step 7" completeHeader="Contratulations, you have completed step 7">{this.sampleBodyText()}</TimelineItem>,
          <TimelineItem key={8} header="Header for step 8" completeHeader="Contratulations, you have completed step 8">{this.sampleBodyText()}</TimelineItem>,
          <TimelineItem key={9} header="Header for step 9" completeHeader="Contratulations, you have completed step 9">{this.sampleBodyText()}</TimelineItem>
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
