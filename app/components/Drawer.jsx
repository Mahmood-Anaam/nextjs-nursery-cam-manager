'use client';

import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import FaceIcon from '@mui/icons-material/Face';
import ImageIcon from '@mui/icons-material/Image';
import GestureIcon from '@mui/icons-material/Gesture';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';

const drawerWidth = 240;

const DrawerPaper = styled('div')(({ theme }) => ({
  width: drawerWidth,
  boxSizing: 'border-box',
  paddingTop: theme.spacing(8), // Adjust padding to ensure it is below the App Bar
}));

const SectionTitle = styled(Typography)({
  margin: '10px',
});

const CustomDrawer = ({ open, handleDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const visionItems = [
    { text: 'Object Detection', icon: <FaceIcon /> },
    { text: 'Image Classification', icon: <ImageIcon /> },
    { text: 'Image Segmentation', icon: <GestureIcon /> },
    { text: 'Interactive Segmentation', icon: <GestureIcon /> },
    { text: 'Gesture Recognition', icon: <GestureIcon /> },
    { text: 'Hand Landmark Detection', icon: <GestureIcon /> },
    { text: 'Image Embedding', icon: <GestureIcon /> },
    { text: 'Face Stylization', icon: <GestureIcon /> },
    { text: 'Face Detection', icon: <GestureIcon /> },
    { text: 'Face Landmark Detection', icon: <GestureIcon /> },
    { text: 'Pose Landmark Detection', icon: <GestureIcon /> },
  ];

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={handleDrawerToggle}
      variant={isMobile ? 'temporary' : 'persistent'}
      sx={{ [`& .MuiDrawer-paper`]: { boxSizing: 'border-box', width: drawerWidth } }}
    >
      <DrawerPaper>
        <List>
          <ListItem button key="home">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          <SectionTitle variant="subtitle1">
            VISION
          </SectionTitle>
          {visionItems.map((item, index) => (
            <ListItem button key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </DrawerPaper>
    </Drawer>
  );
};

export default CustomDrawer;
