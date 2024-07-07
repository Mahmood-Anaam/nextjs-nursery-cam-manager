"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import HelpIcon from "@mui/icons-material/Help";
import NotificationsIcon from "@mui/icons-material/Notifications";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles";
import Image from "next/image";
import AccountMenu from "./AccountMenu";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
}));

const TitleTypography = styled(Typography)({
  marginLeft: "10px",
  flexGrow: 1,
});

const CustomAppBar = ({ handleDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={30}
          height={30}
        />
        <TitleTypography variant="h6">Nursery Vision Management</TitleTypography>
        {!isMobile && (
          <>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit">
              <HelpIcon />
            </IconButton>
          </>
        )}
        <AccountMenu />
      </Toolbar>
    </StyledAppBar>
  );
};

export default CustomAppBar;
