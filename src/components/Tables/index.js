import React from "react";
import CommonTable from "./CommonTable";
import TableRow from "./TableRow";

const TABLES = {};

TABLES.COMMON_TABLE = React.memo(CommonTable);
TABLES.TABLE_ROW = React.memo(TableRow);

export default TABLES;
