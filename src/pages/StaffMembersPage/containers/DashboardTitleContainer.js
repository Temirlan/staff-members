import React from "react";
import { connect } from "react-redux";
import DashboardTitle from "../components/DashboardTitle/DashboardTitle";

const DashboardTitleContainer = props => {
  return <DashboardTitle info={props.info} />;
};

const mapStateToProps = state => {
  return {
    info: state.staffMembers.length
  };
};

export default connect(
  mapStateToProps,
  {}
)(DashboardTitleContainer);
