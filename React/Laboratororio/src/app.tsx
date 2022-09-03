import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Box } from "@mui/system";
import LoginPage from "./Components/login";
import { MembersTable } from "./Components/members-table";
import { GitHubMembersDebounce } from "./Components/GitHubMembersDebounce";
import { RickAndMortyList } from "./Components/RickAndMortyList";
import CharacterDetail from "./Components/CharacterDetail";

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
            <Route path="/character/:id" element={<CharacterDetail />} />
          </Routes>
        </Router>
      </Box>
    </>
  );
};
