import React from 'react';
import PropTypes from 'prop-types';

/**
 * A timeline item represents a step in a timeline view.
 */
export class TimelineItem extends React.Component {

  renderHeader = () => {
    const isCurrentStep = this.props.stepIndex === 0;
    const backgroundColor = isCurrentStep ? 'white' : 'rgb(242, 242, 242)';

    return [
      <div key="step" style={{ gridArea: 'step', backgroundColor }}>
        {
          (this.props.stepIndex < 0) &&
            <span style={{ color: 'green' }}>✓</span>
        }
        {
          (this.props.stepIndex > 0) &&
            <span>{this.props.itemStep + 1}</span>
        }
        {
          (isCurrentStep) &&
            <span>{this.props.itemStep + 1} of {this.props.totalSteps}</span>
        }
      </div>,
      <div key="header" style={{ gridArea: 'header', backgroundColor }}>
        {
          this.props.completeHeader && this.props.stepIndex < 0
            ? this.props.completeHeader
            : this.props.header
        }
      </div>
    ];
  }

  renderChildren = () =>
    this.props.stepIndex === 0
      ? <div style={{ gridArea: 'body' }} >{this.props.children}</div>
      : null

  render () {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '40px 40px auto',
          gridTemplateRows: '40px auto',
          gridTemplateAreas: ' \'. step header\' \'. line body \' '
        }}
      >
        {this.renderHeader()}
        {this.renderChildren()}
      </div>
    );
  }
}

TimelineItem.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  completeHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  stepIndex: PropTypes.number, // injected by timeline
  totalSteps: PropTypes.number, // injected by timeline
  itemStep: PropTypes.number // injected by timeline
};
