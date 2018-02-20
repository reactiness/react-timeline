import React from "react";
import PropTypes from "prop-types";

import "./index";

const ClosedSection = ({ section, current, total, goToSection }) => (
  <div className="cp-section-closed">
    <div className="cp-accordion-left">
      <hr width="1" size="500" className={current === 0 ? "hide" : ""} />
      <div className="cp-circle-closed">
        {section.valid && <i className="fa fa-check" />}
        {!section.valid && <i className="fa fa-times" />}
      </div>
      <hr
        width="1"
        size="500"
        className={current === total - 1 ? "hide" : ""}
      />
    </div>
    <div className="cp-accordion-right">
      {section.closed}
      {section.valid && (
        <a className={"cp-accordion-hover"} onClick={goToSection}>
          edit
        </a>
      )}
    </div>
  </div>
);

ClosedSection.propTypes = {
  section: PropTypes.object.isRequired,
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  goToSection: PropTypes.func.isRequired
};
export default ClosedSection;
