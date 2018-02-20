import React from "react";
import PropTypes from "prop-types";
import { Button } from "components/common/core";

import "./index";

const defaultStyle = {
  maxHeight: "1000px",
  overflow: "hidden"
};

const transitionStart = {
  //transition: '400ms ease-in-out',
  overflow: "hidden",
  maxHeight: "0px"
};

let timer;

class OpenSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    timer = setTimeout(() => {
      this.setState({ show: true });
    }, 0);
  }

  componentWillUnmount() {
    clearTimeout(timer);
  }

  render() {
    const { section, current, total, onNextSection } = this.props;
    const { show } = this.state;
    let styles = defaultStyle;

    return (
      <div
        className="cp-section-open show"
        id="accordion-transition"
        style={show ? { ...styles } : { ...transitionStart }}
      >
        <div className="cp-accordion-left">
          <hr width="1" size="500" className={current == 0 ? "hide" : ""} />
          <div className="cp-circle-open">
            {" "}
            <strong>{current + 1}</strong> of {total}
          </div>
          <hr
            width="1"
            size="500"
            className={current == total - 1 ? "hide" : ""}
          />
        </div>
        <div className="cp-accordion-right">
          {section.open}

          {current + 1 !== total && (
            <Button disabled={!section.valid} onClick={onNextSection}>
              Continue
            </Button>
          )}
          {/* <Button onClick={onNextSection}>Continue</Button> */}
        </div>
      </div>
    );
  }
}

OpenSection.propTypes = {
  section: PropTypes.object.isRequired,
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onNextSection: PropTypes.func
};
export default OpenSection;
