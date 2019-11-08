import React from "react";
import { connect } from "react-redux";

import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import Button from "../../../components/Button/Button";
import BoardMain from "../components/BoardMain";
import BoardManagerCountRows from "../components/BoardManagerCountRows";
import AddHolidayModal from "../components/AddHolidayModal";

import * as a from "../../../redux/actions";
import FilterHolidayForm from "../components/FilterHolidayForm";

const rows = [
  { id: 1, number: 6, label: "Days accured current tax year (Estimated)" },
  { id: 2, number: 9, label: "Paid days logged in current tax year" },
  { id: 3, number: 9, label: "Unpaid days logged in current tax year" }
];

class Holidays extends React.Component {
  componentDidMount() {
    this.props.onFetchHolidayData();
  }

  render() {
    const {
      onToggleAddHolidayModal,
      isOpenAddHolidayModal,
      holidayTypes,
      filterTypes
    } = this.props;

    return (
      <ContentWrapper>
        <section className="boss-board">
          <header className="boss-board__header">
            <h2 className="boss-board__title">Holidays and holiday requests</h2>
            <div className="boss-board__button-group">
              <Button type="add-holiday" onClick={onToggleAddHolidayModal}>
                Add Holiday
              </Button>
              <AddHolidayModal
                isOpen={isOpenAddHolidayModal}
                closeModal={onToggleAddHolidayModal}
                holidayTypes={holidayTypes}
              />
            </div>
          </header>
          <BoardMain>
            <div className="boss-board__manager-stats boss-board__manager-stats_layout_row">
              <BoardManagerCountRows rows={rows} />
            </div>
            <div className="boss-board__manager-group boss-board__manager-group_role_data">
              <FilterHolidayForm filterTypes={filterTypes} />
            </div>
          </BoardMain>
        </section>
      </ContentWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpenAddHolidayModal: state.holiday.isOpenAddHolidayModal,
    holidayTypes: state.holidayTypes,
    filterTypes: state.filterTypes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleAddHolidayModal: () => {
      dispatch(a.toggleAddHolidayModal());
    },
    onFetchHolidayData: () => {
      dispatch(a.fetchHolidayData());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Holidays);
