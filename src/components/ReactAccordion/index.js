import React from "react";
import PropTypes from "prop-types";
import ClosedSection from "./ClosedSection";
import OpenSection from "./OpenSection";

import "./index.scss";

export default class ReactAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      show: true
    };
    this.handleNextSection = this.handleNextSection.bind(this);
  }

  handleNextSection() {
    //const { onNextSection } = this.props;
    this.setState({ current: this.state.current + 1 });
    //onNextSection(this.state.current);
  }

  renderedSections() {
    const { sections } = this.props;
    const { current } = this.state;

    return sections.map((section, i) => {
      let sec;
      if (current === i) {
        sec = (
          <OpenSection
            key={section.id}
            section={section}
            current={i}
            total={sections.length}
            onNextSection={this.handleNextSection}
          />
        );
      } else {
        sec = (
          <ClosedSection
            key={section.id}
            section={section}
            current={i}
            total={sections.length}
            goToSection={() => this.setState({ current: i })}
          />
        );
      }
      return sec;
    });
  }

  render() {
    const renderedSections = this.renderedSections();
    return <div className="cp-react-accordion">{renderedSections}</div>;
  }
}

ReactAccordion.propTypes = {
  sections: PropTypes.array.isRequired,
  onNextSection: PropTypes.func
};
