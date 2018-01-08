import React from 'react';
import PropTypes from 'prop-types';

export class Timeline extends React.Component {
  render () {
    const { steps, step } = this.props;
    return (
      <div>
        {steps.map((s, i) =>
          React.cloneElement(s, { currentStep: step === i } )
        )}
      </div>
    );
  }
}

Timeline.propTypes = {
  step: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(PropTypes.any).isRequired
};
