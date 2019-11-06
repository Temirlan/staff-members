import React from "react";
import { connect } from "react-redux";

import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import Button from "../../../components/Button/Button";
import BoardMain from "../components/BoardMain";
import BoardManagerCountRows from "../components/BoardManagerCountRows";
import AddHolidayModal from "../components/AddHolidayModal";

import * as a from "../../../redux/actions";

const rows = [
  { id: 1, number: 6, label: "Days accured current tax year (Estimated)" },
  { id: 2, number: 9, label: "Paid days logged in current tax year" },
  { id: 3, number: 9, label: "Unpaid days logged in current tax year" }
];

const Holidays = props => {
  return (
    <ContentWrapper>
      <section className="boss-board">
        <header className="boss-board__header">
          <h2 className="boss-board__title">Holidays and holiday requests</h2>
          <div className="boss-board__button-group">
            <Button type="add-holiday" onClick={props.onToggleAddHolidayModal}>
              Add Holiday
            </Button>
            <AddHolidayModal
              isOpen={props.isOpenAddHolidayModal}
              closeModal={props.onToggleAddHolidayModal}
            />
          </div>
        </header>
        <BoardMain>
          <div className="boss-board__manager-stats boss-board__manager-stats_layout_row">
            <BoardManagerCountRows rows={rows} />
          </div>
        </BoardMain>
      </section>
    </ContentWrapper>
  );
};

const mapStateToProps = state => {
  return {
    isOpenAddHolidayModal: state.holiday.isOpenAddHolidayModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleAddHolidayModal: () => {
      dispatch(a.toggleAddHolidayModal());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Holidays);
