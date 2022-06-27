import React from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import "./Pagination.css";

const Pagination = ({ currentPage, setCurrentPage }) => {
  return (
    <Stack className="Pagination" direction="row" spacing={2}>
      {currentPage > 1 && (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous Page ({currentPage - 1})
        </Button>
      )}
      <span>Page: {currentPage}</span>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next Page ({currentPage + 1})
      </Button>
    </Stack>
  );
};

export default Pagination;
