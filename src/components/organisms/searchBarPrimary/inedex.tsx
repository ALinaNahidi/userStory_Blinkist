import styled from "@emotion/styled";
import React, { useState } from "react";

const Search = styled("div")(({ theme }) => ({}));

const searchBarPrimary = () => {

  const [searchedData, setSearchedData] = useState<string>("");

  const handleSearchedData = () => {};

  return (
    <div>
      <Search></Search>
    </div>
  );
};

export default searchBarPrimary;
