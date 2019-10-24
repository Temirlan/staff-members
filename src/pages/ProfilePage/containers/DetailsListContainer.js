import React from "react";
import { connect } from "react-redux";

import { getStaffMember } from "../../../redux/selectors";
import DetailsList from "../components/DetailsList/DetailsList";

class DetailsListContainer extends React.Component {
  render = () => {
    return <DetailsList staffMember={this.props.staffMember} />;
  };
}

const mapStateToProps = state => ({
  staffMember: getStaffMember(state)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsListContainer);
