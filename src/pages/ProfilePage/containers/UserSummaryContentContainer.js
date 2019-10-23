import React from "react";
import { connect } from "react-redux";

import { getStaffMember } from "../../../redux/selectors";
import UserSummaryContent from "../components/DashboardGroup/UserSummaryContent/UserSummaryContent";
import UserSummaryHeader from "../components/DashboardGroup/UserSummaryHeader/UserSummaryHeader";
import UserSummaryReviewList from "../components/DashboardGroup/UserSummaryReviewList/UserSummaryReviewList";
import UserSummaryContacts from "../components/DashboardGroup/UserSummaryContacts/UserSummaryContacts";

class UserSummaryContentContainer extends React.Component {
  render = () => {
    return (
      <UserSummaryContent
        staffMember={this.props.staffMember}
        renderUserSummaryHeader={() => (
          <UserSummaryHeader fullName={this.props.staffMember.fullName} />
        )}
        renderUserSummaryReviewList={() => (
          <UserSummaryReviewList venue={this.props.staffMember.venue} />
        )}
        renderUserSummaryContacts={() => (
          <UserSummaryContacts
            email={this.props.staffMember.email}
            phoneNumber={this.props.staffMember.phoneNumber}
          />
        )}
      />
    );
  };
}

const mapStateToProps = state => ({
  staffMember: getStaffMember(state)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSummaryContentContainer);
