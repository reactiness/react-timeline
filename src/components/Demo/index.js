import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "react-redux-form";
import _ from "lodash";
import * as uiActions from "redux/actions/uiActions";
import * as utils from "utility/";
import { Header } from "components/common/core";
import ReactAccordion from "components/common/ReactAccordion";
import { getUIAddClaim } from "selectors/uISelectors";
import {
  isAllFormValid,
  getSelectedFlight,
  getPassengersLength,
  getFormValidity,
  getClaimData
} from "selectors/claimFormSelectors";
import * as models from "constants/formModels";
import CallContainer from "containers/claims/Add/Call";
import FlightContainer from "containers/claims/Add/Flight";
import FlightClaimContainer from "containers/claims/Add/FlightClaim";
import ClientContainer from "containers/claims/Add/Client";
import AddressContainer from "containers/claims/Add/Address";
import PassengersContainer from "containers/claims/Add/Passengers";
import AuthorityContainer from "containers/claims/Add/Authority";

import "./index.scss";

export class ClaimAdd extends React.Component {
  constructor(props) {
    super(props);
    this.restart = this.restart.bind(this);
  }

  restart() {
    const { actions, history } = this.props;
    actions.reset(models.formCall);
    actions.reset(models.formClaimDetails);
    actions.reset(models.formClientDetails);
    actions.reset(models.formClientAddress);
    actions.reset(models.formFlight);
    actions.reset(models.formPassengers);
    // history.push("/");
  }

  render() {
    const {
      forms,
      formState,
      formStates,
      formFlightSelected,
      formPassengerLength
    } = this.props;
    const {
      formCall: call,
      formFlight: flight,
      formClaimDetails: claim,
      formClientDetails: client,
      formClientAddress: address,
      formPassengers: passengers
    } = forms;

    const callHeader = (
      <div className="cp-accordion-header">
        <h3> Call Details </h3>
        {formStates.call && (
          <p>
            {utils.capitalise(
              call.title.value + " " + call.firstName + " " + call.lastName
            )}
          </p>
        )}
      </div>
    );

    const flightHeader = (
      <div className="cp-accordion-header">
        <h3>
          {" "}
          Flight Details{" "}
          {utils.capitalise(
            flight.airline.label + " " + flight.flightCodeIcao
          )}{" "}
        </h3>
        {formStates.flight && (
          <p>
            <strong>From </strong>{" "}
            {utils.capitalise(flight.depAirport.label + ", ")}
            <strong>To </strong>{" "}
            {utils.capitalise(flight.arrAirport.label + ", ")}
            <strong>On </strong>{" "}
            {utils.capitalise(flight.flightDate + flight.flightTime + ", ")}
          </p>
        )}
      </div>
    );

    const flightClaimHeader = (
      <div className="cp-accordion-header">
        <h3> Problem / Claim Details </h3>
        {formStates.claim && (
          <p>
            <strong>Delayed </strong>{" "}
            {utils.convertMinutesToHoursAndMinutes(claim.delayLength) + ", "}
            <strong>Due to </strong>{" "}
            {utils.capitalise(claim.problem.label + " booking, ")}
            <strong>Caused by </strong> {utils.capitalise(claim.reason.label)}
          </p>
        )}
      </div>
    );

    const clientHeader = (
      <div className="cp-accordion-header">
        <h3> Client Details</h3>
        {formStates.client && (
          <p>
            {utils.capitalise(
              client.title.value +
                " " +
                client.firstName +
                " " +
                client.lastName +
                ", " +
                client.email +
                ", " +
                client.mobile || client.phone
            )}
          </p>
        )}
      </div>
    );

    const addressHeader = (
      <div className="cp-accordion-header">
        <h3> Address </h3>
        {formStates.address && (
          <p>
            {utils.capitalise(
              address.house +
                ", " +
                (address.street ? address.street + ", " : "") +
                address.city +
                ", " +
                (address.county ? address.county + ", " : "") +
                address.postcode
            )}
          </p>
        )}
      </div>
    );

    const authorityHeader = (
      <div className="cp-accordion-header">
        <h3> Authority </h3>
      </div>
    );

    const passengerHeader = (
      <div className="cp-accordion-header">
        <h3> Additional Passengers</h3>
        {formStates.passengers &&
          passengers.passengerForms.map((p, i) => {
            if (!_.isEmpty(p)) {
              return (
                <p key={i}>
                  <strong>{i + 1} </strong>
                  <span>
                    {utils.capitalise(p.firstName + " " + p.lastName)}
                  </span>
                  <br />
                </p>
              );
            }
          })}
      </div>
    );

    const accordionSections = [
      {
        id: 1,
        closed: callHeader,
        open: <CallContainer />,
        valid: formStates.call
      },
      {
        id: 2,
        closed: flightHeader,
        open: <FlightContainer />,
        valid: formStates.flight || formFlightSelected === true
      },
      {
        id: 3,
        closed: flightClaimHeader,
        open: <FlightClaimContainer />,
        valid: formStates.claim
      },
      {
        id: 4,
        closed: clientHeader,
        open: <ClientContainer />,
        valid: formStates.client
      },
      {
        id: 5,
        closed: addressHeader,
        open: <AddressContainer />,
        valid: formStates.address
      },
      {
        id: 6,
        closed: passengerHeader,
        open: <PassengersContainer />,
        valid: formPassengerLength === 0 ? true : formStates.passengers
      },
      {
        id: 7,
        closed: authorityHeader,
        open: (
          <AuthorityContainer restart={this.restart} formState={formState} />
        ),
        valid: false
      }
    ];

    console.log("formstate: ", formState);
    return (
      <div id="cp-page-claim-add">
        <Header
          as="h1"
          title="Submit a new claim"
          description="Fill out all the required fields to submit a claim"
        />

        <ReactAccordion sections={accordionSections} />
      </div>
    );
  }
}

ClaimAdd.propTypes = {
  actions: PropTypes.object.isRequired,
  ui: PropTypes.object.isRequired,
  formFlightSelected: PropTypes.bool,
  formStates: PropTypes.object.isRequired,
  formState: PropTypes.bool.isRequired,
  formPassengerLength: PropTypes.number.isRequired,
  forms: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  console.log("auth ", isAllFormValid(state));
  return {
    ui: getUIAddClaim(state),
    forms: getClaimData(state),
    formStates: getFormValidity(state),
    formState: isAllFormValid(state),
    formFlightSelected: getSelectedFlight(state).selected,
    formPassengerLength: getPassengersLength(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, uiActions, actions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClaimAdd);
