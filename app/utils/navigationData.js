'use client'

import {
  
    IconLayoutDashboard,
    IconFaceId,
    IconDatabasePlus,
    IconDatabaseEdit,
    IconDatabaseMinus,

    
  } from "@tabler/icons-react";
  
  import { uniqueId } from "lodash";
  
  const navigationData = [
    {
      navlabel: true,
      subheader: "Home",
    },

    {
      id: uniqueId(),
      title:"Dashboard",
      icon: IconLayoutDashboard,
      href: "/",
    },

    {
      navlabel: true,
      subheader: "Vision",
    },

    {
      id: uniqueId(),
      title: "Face Detection",
      icon: IconFaceId,
      href: "/Vision/FaceDetection",
    },


    {
      navlabel: true,
      subheader: "Data Base",
    },
    {
      id: uniqueId(),
      title: "Add",
      icon:  IconDatabasePlus ,
      href: "/DataBase/Add",
    },
    {
      id: uniqueId(),
      title: "Update",
      icon: IconDatabaseEdit,
      href: "/DataBase/Update",
    },
    {
      id: uniqueId(),
      title: "Remove",
      icon: IconDatabaseMinus,
      href: "/DataBase/Remove",
    },

  ];
  
  export default navigationData;
  