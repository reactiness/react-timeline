import React from 'react';
import PropTypes from 'prop-types';

/**
 * A timeline item represents a step in a timeline view.
 */
export class TimelineItem extends React.Component {

  renderHeader = () =>
    [
      <div key="step" style={{ gridArea: 'step' }}>Step</div>,
      <div key="header"  style={{ gridArea: 'header' }}>
        {this.props.header}
      </div>
    ]

  renderChildren = () =>
    this.props.currentStep
      ? <div style={{ gridArea: 'body', backgroundColor: '#ddddff' }} >{this.props.children}</div>
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
  currentStep: PropTypes.bool
};
