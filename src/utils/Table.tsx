import * as React from "react";
import {
  Box,
  FormControlLabel,
  Paper,
  styled,
  Switch,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { ThemeProvider } from "@mui/material/styles";
// next
import dynamic from "next/dynamic";
// project
import axios from "axios";
import { useEffect, useState } from "react";
import { createTheme } from "@mui/material";
// import { useSelector } from "react-redux";

const theme = createTheme({
  palette: {
    // type: 'light',
    primary: {
      main: "#546e7a",
    },
    secondary: {
      main: "#cfd8dc",
    },
  },
  typography: {
    fontFamily: "Droid Serif",
    fontWeightBold: 800,
    body2: {
      fontSize: "1.6rem",
    },
    body1: {
      fontSize: "1.7rem",
    },
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: `#212121`,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: `#212121`,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

//Sort Functions:
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: any }, b: { [key in Key]: any }) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
export default function DataTable() {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Data>("profit");
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows]: any = useState([]);
  //Get data from database
  // useEffect(() => {
  //   fetchData();
  // });

  // const fetchData: any = async () => {
  //   const response: any = await axios.get(`/api/get-canceled`);
  //   let dataRows: any[] = response.data;
  //   console.log("response", response.data);
  //   setRows(dataRows);
  // };
  // console.log(fetchData);

  interface Data {
    price: number;
    exchange: any;
    coin: any;
    ticker: string;
    action: typeof Button;
    profit: number;
  }
  interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
  }

  const headCells: readonly HeadCell[] = [
    {
      id: "coin",
      numeric: true,
      disablePadding: false,
      label: "Coin",
    },
    {
      id: "ticker",
      numeric: true,
      disablePadding: false,
      label: "Ticker",
    },
    {
      id: "price",
      numeric: false,
      disablePadding: false,
      label: "Price",
    },
    {
      id: "exchange",
      numeric: false,
      disablePadding: true,
      label: "Exchange",
    },
    {
      id: "profit",
      numeric: true,
      disablePadding: true,
      label: "Profit",
    },
    {
      id: "action",
      numeric: false,
      disablePadding: true,
      label: "Action"
    }
  ];

  interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (
      event: React.MouseEvent<unknown>,
      property: keyof Data
    ) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
  }

  //Define head (top) row of table.  Column names will go in this function.
  function EnhancedTableHead(props: EnhancedTableProps) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler =
      (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
      };

    return (
      <ThemeProvider theme={theme}>
        <TableHead>
          <StyledTableRow>
            {headCells.map((headCell) => (
              <StyledTableCell
                key={headCell.id}
                align={"right"}
                padding={"normal"}
                sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === "desc"
                        ? "sorted descending"
                        : "sorted ascending"}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </StyledTableCell>
            ))}
          </StyledTableRow>
        </TableHead>
      </ThemeProvider>
    );
  }

  //Define what will exist within the toolbar.
  // interface EnhancedTableToolbarProps {
  //     numSelected: number;
  // }

  const EnhancedTableToolbar = () => {
    // const { numSelected } = props;
    // Could add search bar to this component as well...

    return (
      <ThemeProvider theme={theme}>
        <Toolbar>
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h3"
            id="tableTitle"
            component="div"
          >
            {"Exchange based arbitrage..."}
          </Typography>
        </Toolbar>
      </ThemeProvider>
    );
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%" }}>
        {/* <Paper sx={{ width: "100%", mb: 2 }} elevation={5}> */}
          {/* <EnhancedTableToolbar /> */}
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                                            rows.slice().sort(getComparator(order, orderBy)) */}
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.price);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <StyledTableRow
                        hover
                        onClick={(event) => handleClick(event, row.profit)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.profit}
                        selected={isItemSelected}
                      >
                        <StyledTableCell align="right">
                          {row.coin}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.ticker}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.price}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.exchange}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.profit}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <Button variant="contained">
                            <Typography>
                              Execute Trade
                            </Typography>
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <StyledTableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <StyledTableCell colSpan={6} />
                  </StyledTableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        {/* </Paper> */}
        {/* <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Compact Rows"
        /> */}
      </Box>
    </ThemeProvider>
  );
}
