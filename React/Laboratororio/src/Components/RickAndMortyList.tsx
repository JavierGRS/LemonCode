import { Button, Pagination, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDebounce } from "use-debounce";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const useUsersFiltered = () => {
  const [filter, setFilter] = React.useState("rick");
  const [list, setList] = React.useState([]);
  const [debouncedFilter] = useDebounce(filter, 1000);
  const [totalPages, setTotalPages] = React.useState(1);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${filter}`
    )
      .then((r) => r.json())
      .then((result) => {
        setList(result.results);
        setTotalPages(result.info.pages);
      });
  }, [debouncedFilter, page]);

  React.useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${filter}`
    )
      .then((r) => r.json())
      .then((result) => {
        setTotalPages(result.info.pages);
      });
  }, []);

  return {
    list,
    filter,
    setFilter,
    totalPages,
    setPage,
    page,
  };
};

export const RickAndMortyList = () => {
  const { list, filter, setFilter, totalPages, page, setPage } =
    useUsersFiltered();
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        sx={{
          mb: 2,
          mt: 1,
        }}
      />
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
          <span className="header">Status</span>
          <span className="header">Link</span>
          {list ? (
            list.map((item) => (
              <React.Fragment key={item.id}>
                <img src={item.image} />
                <span>{item.status}</span>
                <Link to={`/character/${item.id}`}>{item.name}</Link>
              </React.Fragment>
            ))
          ) : (
            <>Loading...</>
          )}
        </div>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          sx={{
            mb: 2,
            mt: 2,
          }}
        />
      </>
    </>
  );
};
