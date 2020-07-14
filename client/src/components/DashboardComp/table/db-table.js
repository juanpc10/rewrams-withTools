import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';

const styles = (theme) => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  table: {
    // temporary right-to-left patch, waiting for
    // https://github.com/bvaughn/react-virtualized/issues/454
    '& .ReactVirtualized__Table__headerRow': {
      flip: false,
      paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined,
    },
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: 'initial',
  },
});

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48,
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns, classes } = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: 'inherit',
            }}
            headerHeight={headerHeight}
            className={classes.table}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={(headerProps) =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number.isRequired,
    }),
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

// ---

const sample = [
  ['Eduardo Sanchez', 'eduardo_442', '2 days ago', 24, '$40', '20%', 18, 0.75],
  ['John Hernandez', 'jhdez_873', '28 days ago', 7, '$22', '40%', 3, 0.42],
  ['Pablo Carrillo', 'dbzerian_996', '1 days ago', 1013, '$1,463', '60%', 895, 0.88],
  ['Joaquin Guzman', 'chapu_$$11', '77 days ago', 400, '$1,000,000', '10%', 396, 0.99],
  ['John Anderson', 'pablitomoney_9389', '18 days ago', 568, '$80,345', '5%', 765, 0.05],
];

function createData(id, name, username, lastActivity, orders, averageOrderValue, currentDiscount, mediaShares, shareRatio) {
  return { id, name, username, lastActivity, orders,averageOrderValue, currentDiscount, mediaShares, shareRatio };
}

const rows = [];

for (let i = 0; i < 200; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createData(i, ...randomSelection));
}











export default function DbTable() {
  return (
    <Paper style={{ height: 400, width: '100%' }}>
      <VirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        columns={[
          {
            width: 200,
            label: 'Name',
            dataKey: 'name',
          },
          {
            width: 120,
            label: 'Username',
            dataKey: 'username',
            numeric: true,
          },
          {
            width: 120,
            label: 'Last Activity',
            dataKey: 'lastActivity',
            numeric: true,
          },
          {
            width: 120,
            label: 'Orders',
            dataKey: 'orders',
            numeric: true,
          },
          {
            width: 120,
            label: 'Avg. Order $',
            dataKey: 'averageOrderValue',
            numeric: true,
          },
          {
            width: 120,
            label: 'Discount %',
            dataKey: 'currentDiscount',
            numeric: true,
          },
          {
            width: 120,
            label: 'Shares',
            dataKey: 'mediaShares',
            numeric: true,
          },
          {
            width: 120,
            label: 'Share Ratio',
            dataKey: 'shareRatio',
            numeric: true,
          },
          
        ]}
      />
    </Paper>
  );
}