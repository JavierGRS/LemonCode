import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDebounce } from "use-debounce";
import { MemberRow } from "./member-row";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@mui/icons-material";
import { Box } from "@mui/system";

const useUsersFiltered = () => {
  const [filter, setFilter] = React.useState("lemoncode");
  const [list, setList] = React.useState([]);
  const [debouncedFilter] = useDebounce(filter, 1000);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${debouncedFilter}/members`)
      .then((r) => r.json())
      .then((result) => setList(result));
  }, [debouncedFilter]);

  return {
    list,
    filter,
    setFilter,
  };
};

export const GitHubMembersDebounce = () => {
  const { list, filter, setFilter } = useUsersFiltered();
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <Button
        variant="outlined"
        onClick={() => setIsShown(!isShown)}
        sx={{
          my: 2,
        }}
      >
        {!isShown ? <KeyboardArrowDownRounded /> : <KeyboardArrowUpRounded />}
        Show GitHub Members List using debounce
      </Button>
      {isShown && (
        <>
          <div>
            <TextField
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              label="Search on Github"
              type="search"
              sx={{
                mb: 2,
                mt: 1,
              }}
            />
          </div>
          <div className="user-list-container">
            <span className="header">Avatar</span>
            <span className="header">ID</span>
            <span className="header">Login</span>
            {list.map((item) => (
              <MemberRow key={item.id} item={item} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
