import React, { memo, useContext } from "react";
import { TableContext } from "../pages/MineSearch";
import Tr from "./MineSearchTr";

const Table = memo(() => {
  const { tableData } = useContext(TableContext);
  return (
    <table style={{ borderCollapse: "collapse" }}>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr rowIndex={i} />
        ))}
    </table>
  );
});

export default Table;
