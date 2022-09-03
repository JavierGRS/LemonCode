import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem } from "@mui/material";
import { Link } from "@mui/material";
import Fade from "@mui/material/Fade";

export default function MenuDropDown() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick}>
        <IconButton
          size="large"
          edge="start"
          color="default"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose} component={Link} href="/members-list">
          <Typography>Search Github using Button</Typography>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          href="/members-debounce-list"
        >
          <Typography>Search Github using Debounce</Typography>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          href="/rick-and-morty-list"
        >
          <Typography>Search Rick And Morty</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
