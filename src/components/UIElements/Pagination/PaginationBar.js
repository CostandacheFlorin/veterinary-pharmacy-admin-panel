import React from "react";

import { Pagination } from '@mui/material';

const PaginationBar = ({ page, count, onChangeHandler }) => {
  return <Pagination color="primary" count={count} page={page} onChange={onChangeHandler} />;
};

export default PaginationBar;
