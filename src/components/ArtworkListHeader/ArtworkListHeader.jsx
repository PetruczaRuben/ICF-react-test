import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import "./ArtworkListHeader.css";

import { fetchSearchArtworks } from "../../api/fetchArtworks";

const ArtworkListHeader = ({ IPP, setIPP, setArtworks }) => {
  const handleChange = (event) => {
    setIPP(event.target.value);
  };
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      fetchSearchArtworks(event.target.value).then((data) =>
        setArtworks(data.data)
      );
      event.target.value = "";
    }
  };

  return (
    <div className="IPP">
      <TextField
        className="searchbar"
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
        onKeyDown={handleSearch}
      />
      <FormControl sx={{ m: 1, minWidth: 190 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Items Per Page
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={IPP}
          onChange={handleChange}
          autoWidth
          label="Items Per Page"
        >
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ArtworkListHeader;
