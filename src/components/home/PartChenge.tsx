/** @format */

import React from "react";
import { Box } from "@mui/material";
import ClientTestimonials from "./ClientTestimonials";
import FreeTrial from "./FreeTrial";

const PartChenge = () => {
  return (
    <Box position="relative">
      <Box
        sx={{
          backgroundImage: 'url("/images/clientBg.svg")',
          position: "absolute",
          backgroundSize: "contain",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          left: 0,
          top: "8%",
          width: { xs: "", md: "540px", lg: "580px" },
          height: "80%",
          zIndex: -1,
        }}></Box>
      <ClientTestimonials />
      <FreeTrial />
    </Box>
  );
};

export default PartChenge;
