/** @format */

import HomeSection from "@/components/home/HomeSection";
import { Box } from "@mui/material";
import React from "react";
import Features from "@/components/home/Features";
import ChosePlan from "@/components/home/ChosePlan";
import AllTool from "@/components/home/AllTool";
import PartChenge from "@/components/home/PartChenge";
import Frequently from "@/components/home/Frequently";

const Home = () => {
  return (
    <Box>
      <HomeSection />
      <Features />
      <ChosePlan />
      <AllTool />
      <PartChenge />
      <Frequently />
    </Box>
  );
};

export default Home;
