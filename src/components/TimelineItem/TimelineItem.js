import React from 'react';
import PropTypes from 'prop-types';

/**
 * A timeline item represents a step in a timeline view.
 */
export class TimelineItem extends React.Component {

  renderChildren = () =>
    this.props.currentStep
      ? this.props.children
      : null

  render () {
    const { header } = this.props;
    return (
      <div style={{ color: 'red' }}>
        <div style={{ color: 'green' }}>{header}</div>
        {this.renderChildren()}
      </div>
    );
  }
}

TimelineItem.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  currentStep: PropTypes.bool
};
