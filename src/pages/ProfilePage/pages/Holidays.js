import React from "react";

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
import TableCell from "../components/TableCell";

const rows = [
  { id: 1, number: 6, label: "Days accured current tax year (Estimated)" },
  { id: 2, number: 9, label: "Paid days logged in current tax year" },
  { id: 3, number: 9, label: "Unpaid days logged in current tax year" }
];

const columns = [
  {
    Header: "Types",
    width: "auto",
    className: "boss-table__cell",
    headerClassName: "boss-table__cell boss-table__cell_role_header",
    Cell: ({ original }) => (
      <TableCell label="Types" text={original.holidayType.name} />
    )
  },
  {
    Header: "Status",
    width: "auto",
    className: "boss-table__cell",
    headerClassName: "boss-table__cell boss-table__cell_role_header",
    Cell: ({ original }) => <TableCell label="Status" text={original.status} />
  },
  {
    Header: "Dates",
    width: "auto",
    className: "boss-table__cell",
    headerClassName: "boss-table__cell boss-table__cell_role_header",
    Cell: ({ original }) => <TableCell label="Dates" text={original.date} />
  },
  {
    Header: "Note",
    width: "auto",
    className: "boss-table__cell",
    headerClassName: "boss-table__cell boss-table__cell_role_header",
    Cell: ({ original }) => <TableCell label="Note" text={original.note} />
  },
  {
    Header: "Created",
    width: "auto",
    className: "boss-table__cell",
    headerClassName: "boss-table__cell boss-table__cell_role_header",
    Cell: ({ original }) => (
      <TableCell label="Created" creates={original.creates} />
    )
  },
  {
    Header: "Payslip Date",
    width: "auto",
    className: "boss-table__cell",
    headerClassName: "boss-table__cell boss-table__cell_role_header",
    Cell: ({ original }) => (
      <TableCell label="Created" text={original.payslipDate} />
    )
  },
  {
    Header: "",
    width: "auto",
    className: "boss-table__cell",
    headerClassName: "boss-table__cell boss-table__cell_role_header",
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
      filterTypes,
      onFilterHolidaysByDate,
      onFilterParamsDate
    } = this.props;

    return (
      <ContentWrapper>
        <section className="boss-board">
          <header className="boss-board__header">
            <h2 className="boss-board__title">Holidays and holiday requests</h2>
            <div className="boss-board__button-group">
              <Button addHoliday onClick={onToggleAddHolidayModal}>
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
              <FilterHolidayForm
                filterTypes={filterTypes}
                onFilterHolidaysByDate={onFilterHolidaysByDate}
                onFilterParamsDate={onFilterParamsDate}
              />
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
    },
    onFilterHolidaysByDate: values => {
      dispatch(a.filterHolidaysByDate(values));
    },
    onFilterParamsDate: values => {
      dispatch(a.filterParamsDate(values));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Holidays);
