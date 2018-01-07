import React from 'react';

/**
 * Renders the TimelineItem component depending on whether it is the active step or not.
 * @param {TimelineItem} WrappedComponent The TimelineItem component to render.
 * @param {boolean} activeStep is this the active step?
 */
const TimelineItemRenderer = (WrappedComponent, activeStep) =>
  class Renderer extends React.Component {
    render () {
      return (
        <WrappedComponent {...this.props} activeStep={activeStep === true} />
      );
    }
  };

export default TimelineItemRenderer;
