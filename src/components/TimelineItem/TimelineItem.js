import React from 'react';
import PropTypes from 'prop-types';

/**
 * A timeline item represents a step in a timeline view. If this step is
 * the active step, it's children (body) is rendered, otherwise just
 * the header.
 */
export default class TimelineItem extends React.Component {
  render () {
    const { header, children } = this.props;
    return (
      <div>
        <div>{header}</div>
        {children}
      </div>
    );
  }
}

TimelineItem.propTypes = {
  activeStep: PropTypes.bool,
  header: PropTypes.oneOf([PropTypes.string, PropTypes.node]).isRequired,
  children: PropTypes.oneOf([PropTypes.string, PropTypes.node]).isRequired
};
