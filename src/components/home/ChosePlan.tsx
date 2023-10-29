/** @format */

import React from "react";
import { Box } from "@mui/material";
import PricingPlans from "./PricingPlans";
import Twilio from "./Twilio";
import MobileApp from "./MobileApp";

const ChosePlan = () => {
  return (
    <Box position="relative">
      <Box
        sx={{
          backgroundImage: 'url("/images/featureBg.svg")',
          position: "absolute",
          backgroundSize: "contain",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          right: 0,
          top: "8%",
          width: { xs: "", md: "540px", lg: "580px" },
          height: "80%",
          zIndex: -1,
        }}></Box>
      <PricingPlans />
      <Twilio />
      <MobileApp />
    </Box>
  );
};

export default ChosePlan;
