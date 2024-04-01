import React, { useState } from "react";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  borderRadius: "100px",
  background: "#2E84462a",
  width: "100%",
  height: "60px",
  padding: "8px 16px",
  fontSize: "16px",
  border: "2px solid transparent",
  transition: "border-color 0.3s",
  "&:hover": {
    borderColor: "#2E8446",
  },
});

const Input = styled("input")({
  border: "none",
  outline: "none",
  flex: 1,
  background: "transparent",
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
    <Container>
      <Input
        placeholder="Search Services"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <IconButton onClick={handleSearch} color="primary">
        <SearchIcon />
      </IconButton>
    </Container>
  );
};

export default SearchBox;
