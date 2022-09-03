import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDebounce } from "use-debounce";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@mui/icons-material";

const useUsersFiltered = () => {
  const [filter, setFilter] = React.useState("rick");
  const [list, setList] = React.useState([]);
  const [debouncedFilter] = useDebounce(filter, 1000);

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?name=${filter}`)
      .then((r) => r.json())
      .then((result) => setList(result.results));
  }, [debouncedFilter]);

  return {
    list,
    filter,
    setFilter,
  };
};

export const RickAndMortyList = () => {
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
        Show Rick and Morty Characters
      </Button>
      {isShown && (
        <>
          <div>
            <TextField
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              label="Search character by name"
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
            <span className="header">Gender</span>
            {list ? (
              list.map((item) => (
                <React.Fragment key={item.id}>
                  <img src={item.image} />
                  <span>{item.id}</span>
                  <span>{item.gender}</span>
                </React.Fragment>
              ))
            ) : (
              <>Loading...</>
            )}
          </div>
        </>
      )}
    </>
  );
};