import React from "react";
import { connect } from "react-redux";
import ReactTable from "react-table";
import "react-table/react-table.css";

import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import Button from "../../../components/Button/Button";
import BoardMain from "../components/BoardMain";
import BoardManagerCountRows from "../components/BoardManagerCountRows";
import AddHolidayModal from "../components/AddHolidayModal";

import * as a from "../../../redux/actions";
import FilterHolidayForm from "../components/FilterHolidayForm";
import * as s from "../../../redux/selectors";

const rows = [
  { id: 1, number: 6, label: "Days accured current tax year (Estimated)" },
  { id: 2, number: 9, label: "Paid days logged in current tax year" },
  { id: 3, number: 9, label: "Unpaid days logged in current tax year" }
];

const columns = [
  {
    Header: () => {
      return (
        <div className="boss-table__cell boss-table__cell_role_header">
          Types
        </div>
      );
    },

    Cell: ({ original }) => {
      return (
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Types</p>
            <p className="boss-table__text">{original.holidayType.name}</p>
          </div>
        </div>
      );
    }
  },
  {
    Header: () => {
      return (
        <div className="boss-table__cell boss-table__cell_role_header">
          Status
        </div>
      );
    },

    Cell: ({ original }) => {
      return (
        <div className="boss-table__info">
          <p className="boss-table__label">Status</p>
          <p className="boss-table__text boss-table__text_role_pending-status">
            {original.status}
          </p>
        </div>
      );
    }
  },
  {
    Header: () => {
      return (
        <div className="boss-table__cell boss-table__cell_role_header">
          Dates
        </div>
      );
    },

    Cell: ({ original }) => {
      return (
        <div className="boss-table__info">
          <p className="boss-table__label">Dates</p>
          <p className="boss-table__text boss-table__text_role_pending-status">
            {original.date}
          </p>
        </div>
      );
    }
  },
  {
    Header: () => {
      return (
        <div className="boss-table__cell boss-table__cell_role_header">
          Note
        </div>
      );
    },

    Cell: ({ original }) => {
      return (
        <div className="boss-table__info">
          <p className="boss-table__label">Dates</p>
          <p className="boss-table__text boss-table__text_role_pending-status">
            {original.note}
          </p>
        </div>
      );
    }
  },
  {
    Header: () => {
      return (
        <div className="boss-table__cell boss-table__cell_role_header">
          Created
        </div>
      );
    },

    Cell: ({ original }) => {
      return (
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Created</p>
            <div className="boss-table__info-group">
              {original.creates.map(create => {
                return (
                  <>
                    <p className="boss-table__text">
                      <span className="boss-table__text-line">
                        <span className="boss-table__text-label">
                          {create.status}:{" "}
                        </span>
                        {create.name}
                      </span>
                      <span className="boss-table__text-meta">
                        ({create.created})
                      </span>
                    </p>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  },
  {
    Header: () => {
      return (
        <div className="boss-table__cell boss-table__cell_role_header">
          Payslip Date
        </div>
      );
    },

    Cell: ({ original }) => {
      return (
        <div className="boss-table__info">
          <p className="boss-table__label">Dates</p>
          <p className="boss-table__text boss-table__text_role_pending-status">
            {original.payslipDate}
          </p>
        </div>
      );
    }
  },
  {
    Header: () => {
      return (
        <div className="boss-table__cell boss-table__cell_role_header"></div>
      );
    },

    Cell: ({ original }) => {
      return (
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Action</p>
            <div className="boss-table__actions">
              <a
                href="#"
                className="boss-button boss-button_type_small boss-button_role_update boss-table__action"
              >
                Edit
              </a>
              <a
                href="#"
                className="boss-button boss-button_type_small boss-button_role_cancel boss-table__action"
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      );
    }
  }
];

const Loader = props => <></>;

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
              <ReactTable
                showPageSizeOptions={false}
                showPaginationBottom={false}
                showPagination={false}
                LoadingComponent={Loader}
                data={this.props.holidays}
                columns={columns}
                minRows={this.props.holidays.length}
              >
                {(state, makeTable, instance) => {
                  return (
                    <div className="boss-board__manager-table">
                      <div className="boss-table boss-table_page_smp-holiday-requests">
                        {makeTable()}
                      </div>
                    </div>
                  );
                }}
              </ReactTable>
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
    filterTypes: state.filterTypes,
    holidays: s.getHolidays(state)
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
