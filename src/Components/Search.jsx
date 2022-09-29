import { Autocomplete, Box, TextField } from "@mui/material";
import React from "react";

const Search = ({ id, onChange, options, onSelectionChange }) => {
  return (
    <div>
      <Box>
        <Autocomplete
          id="auto-complete"
          autoComplete={false}
          options={options || []}
          onChange={onSelectionChange}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={(params) => (
            <TextField
              id="autocomplete"
              onChange={onChange}
              {...params}
              style={{ borderRadius: "30" }}
            />
          )}
        />
      </Box>
    </div>
  );
};

export default Search;
