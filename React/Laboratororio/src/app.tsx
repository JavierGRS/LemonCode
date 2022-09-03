import React from "react";
import { MembersTable } from "./members-table";
import { GitHubMembersDebounce } from "./GitHubMembersDebounce";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./login";
import Navbar from "./Components/Navbar";
import { Box } from "@mui/system";
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
          </Routes>
        </Router>
      </Box>
    </>
  );
};
