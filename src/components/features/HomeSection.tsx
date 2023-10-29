/** @format */

import { Box, Typography } from "@mui/material";
import React from "react";

const HomeSection = () => {
  return (
    <Box
      color="#fff"
      width={{ xs: "75%", md: "56%" }}
      height={{ xs: "58vh", sm: "65vh", md: "75vh" }}
      m="auto"
      textAlign="center"
      display="flex"
      alignItems="center">
      <Box
        sx={{
          backgroundImage: 'url("/images/featuresBg.svg")',
          position: "absolute",
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          right: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}></Box>
      <Box>
        <Typography>THE #1 CRM FOR SALES PEOPLE</Typography>
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", md: "2.5vw" },
            my: 1,
          }}
          component="p"
          fontFamily="Righteous"
          fontWeight={600}>
          Explore The Features of SalesPro Direct
        </Typography>
        <Typography>
          SalesPro Direct offers the most comprehensive all in one solutions
          combining 15 softwares in 1 for sales & marketing professionals.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeSection;
