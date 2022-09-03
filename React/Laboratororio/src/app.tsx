import React from "react";
import { MembersTable } from "./members-table";
import { GitHubMembersDebounce } from "./Components/GitHubMembersDebounce";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./login";
import Navbar from "./Components/Navbar";
import { Box } from "@mui/system";
import { RickAndMortyList } from "./RickAndMortyList";

export const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Box
        sx={{
          m: 2,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/members-list" element={<MembersTable />} />
            <Route
              path="/members-debounce-list"
              element={<GitHubMembersDebounce />}
            />
            <Route path="/rick-and-morty-list" element={<RickAndMortyList />} />
          </Routes>
        </Router>
      </Box>
    </>
  );
};
