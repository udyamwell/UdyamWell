import React, { useState } from "react";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
const StyledInput = styled(Input)({
  "&.MuiInput-root": {
    borderBottom: "none",
    "&:hover": {
      borderBottom: "none",
    },
  },
});
const SearchBox = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <StyledInput
        placeholder="Search Services"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        fullWidth
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleSearch} color="primary">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        sx={{
          border: "none",
          borderRadius: "100px",
          background: "#2E84462a",
          width: "400px",
          height: "60px",
          padding: "8px 50px",
          fontSize: "16px",
          "&:hover": {
            border: "2px solid #2E8446",
          },
        }}
      />
    </div>
  );
};

export default SearchBox;
