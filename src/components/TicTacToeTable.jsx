import React, { memo } from "react";
import Tr from "./TicTacToeTr";

const Table = memo(({ onClick, tableData, dispatch }) => {
  return (
    <table style={{ borderCollapse: "collapse" }}>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr key={i} dispatch={dispatch} rowIndex={i} rowData={tableData[i]} />
        ))}
    </table>
  );
});

export default Table;
