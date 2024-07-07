"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles";
import Image from "next/image";
import Profile from "./Profile";
import { IconBellRinging, IconHelp, IconMenu2 } from "@tabler/icons-react";
import Badge from "@mui/material/Badge";

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
          sx={{ mr: "20px" }}
          onClick={handleDrawerToggle}
        >
          <IconMenu2 />
        </IconButton>

        <Image
          src="/images/logo.png"
          alt="Logo"
          width={30}
          height={30}
          style={{ marginRight: "20px" }}
        />
        <TitleTypography variant="h5">
          Nursery Vision Management
        </TitleTypography>
        {!isMobile && (
          <>
            <Badge variant="dot" color="primary">
              <IconBellRinging size="21" stroke="1.5" />
            </Badge>

            <IconButton>
              <IconHelp />
            </IconButton>
          </>
        )}
        <Profile />
      </Toolbar>
    </StyledAppBar>
  );
};

export default CustomAppBar;
