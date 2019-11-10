import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ReactTable from "react-table";
import classnames from "classnames";

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

const TableCell = props => {
  const { label, text, creates, actions } = props;

  return (
    <div className="boss-table__info">
      <p className="boss-table__label">{label}</p>
      {text && <p className="boss-table__text">{text}</p>}
      {creates && (
        <div className="boss-table__info-group">
          {creates.map(create => {
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
      )}
      {actions && (
        <div className="boss-table__actions">
          <Link
            to="#"
            className="boss-button boss-button_type_small boss-button_role_update boss-table__action"
          >
            Edit
          </Link>
          <Link
            to="#"
            className="boss-button boss-button_type_small boss-button_role_cancel boss-table__action"
          >
            Delete
          </Link>
        </div>
      )}
    </div>
  );
};

const columns = [
  {
    Header: "Types",
    Cell: ({ original }) => (
      <TableCell label="Types" text={original.holidayType.name} />
    )
  },
  {
    Header: "Status",
    // boss-table__text_role_pending-status
    Cell: ({ original }) => <TableCell label="Status" text={original.status} />
  },
  {
    Header: "Dates",
    Cell: ({ original }) => <TableCell label="Dates" text={original.date} />
  },
  {
    Header: "Note",
    Cell: ({ original }) => <TableCell label="Note" text={original.note} />
  },
  {
    Header: "Created",
    Cell: ({ original }) => (
      <TableCell label="Created" creates={original.creates} />
    )
  },
  {
    Header: "Payslip Date",
    Cell: ({ original }) => (
      <TableCell label="Created" text={original.payslipDate} />
    )
  },
  {
    Header: "",
    Cell: ({ original }) =>
      original.frozen ? <></> : <TableCell label="Action" actions />
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
                className="boss-board__manager-table"
                getTheadProps={() => ({
                  style: {
                    borderBottom: "1px solid #eee"
                  }
                })}
                getTrGroupProps={() => ({
                  style: {
                    borderBottom: "1px solid #eee"
                  }
                })}
                getTheadTrProps={() => ({
                  className: "boss-table__row"
                })}
                getTrProps={(state, rowInfo, column, instance) => ({
                  className: classnames("boss-table__row", {
                    "boss-table__row boss-table__row_state_frozen":
                      rowInfo.original.frozen
                  })
                })}
                getTdProps={() => ({
                  className: "boss-table__cell"
                })}
                getTheadThProps={() => ({
                  className: "boss-table__cell boss-table__cell_role_header"
                })}
                getTableProps={() => ({
                  className: "boss-table boss-table_page_smp-holiday-requests"
                })}
              >
                {(state, makeTable, instance) => {
                  return <>{makeTable()}</>;
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
