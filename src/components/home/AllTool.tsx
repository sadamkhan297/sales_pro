/** @format */

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

const AllTool = () => {
  return (
    <Box>
      <Box sx={{ width: { xs: "80%" }, m: "20px auto" }}>
        <Typography
          variant="body1"
          textAlign="center"
          color="#FF403E">
          All-In-One TOOL
        </Typography>
        <Typography
          textAlign="center"
          sx={{
            fontSize: { xs: "2rem", md: "3vw" },
          }}
          component="p"
          fontFamily="Righteous"
          color="#454238"
          fontWeight={500}>
          Reduce your Sales tools budget by 97% !
        </Typography>
      </Box>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
        my={5}
        gap={{ xs: 2, md: 0 }}>
        <Grid
          xs={6}
          md={2}>
          <Box
            bgcolor="#454238"
            sx={{ borderRadius: 2, p: 2, textAlign: "center", color: "#fff" }}>
            <Typography variant="caption">Per Month</Typography>
            <Typography
              variant="h5"
              fontWeight={700}
              py={0.5}>
              $1,736
            </Typography>
            <Typography variant="caption">
              Avg. Sales Pro Spend a month on a combined software
            </Typography>
          </Box>
        </Grid>
        <Grid
          xs={8}
          md={4}>
          <Box
            textAlign="center"
            mr={-3}>
            <Image
              src={"/images/Plugins.svg"}
              alt={"sms"}
              width={500}
              height={500}
              layout="intrinsic"
            />
          </Box>
        </Grid>
        <Grid
          xs={6}
          md={2}>
          <Box
            bgcolor="#454238"
            sx={{ borderRadius: 2, p: 2, textAlign: "center", color: "#fff" }}>
            <Typography
              variant="h5"
              fontWeight={700}>
              $97
            </Typography>
            <Typography
              variant="caption"
              py={0.5}>
              Limited Time offer
            </Typography>
            <Typography
              variant="h5"
              fontWeight={700}>
              $49 / Month
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AllTool;
