/** @format */

import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import VerifiedIcon from "@mui/icons-material/Verified";

const PricingPlans = () => {
  return (
    <Box pt={8}>
      <Box sx={{ width: { xs: "80%", md: "40%" }, m: "auto" }}>
        <Typography
          variant="body1"
          textAlign="center"
          color="#FF403E">
          CHOOSE YOUR PLAN
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
          Affordable pricing plans
        </Typography>
        <Typography
          textAlign="center"
          variant="body1"
          color="#919B9B">
          Whether you are starting your venture or you have a well established
          sales team, we have the right plan for you !
        </Typography>
      </Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        my={8}
        gap={2}
        spacing={2}>
        <Grid
          item
          bgcolor="#454238"
          xs={10}
          sm={6}
          md={4}
          lg={3}
          color="#fff"
          borderRadius={5}>
          <Box
            p={3}
            display="flex"
            flexDirection={{ xs: "column", sm: "inherit" }}
            alignItems="flex-start">
            <Box
              display="flex"
              alignItems="center"
              gap={2}>
              <Image
                src={"/logo/Price.svg"}
                alt={"price"}
                width={70}
                height={70}
              />
              <Box>
                <Typography>For startups</Typography>
                <Typography variant="h5">Monthly</Typography>
              </Box>
            </Box>
            <Button
              sx={{
                bgcolor: "#2d2b22",
                color: "#fff",
                borderRadius: 3,
                ml: "auto",
              }}>
              Popular
            </Button>
          </Box>
          <Box
            px={3}
            display="flex"
            flexDirection="column"
            gap={2}>
            <Typography>
              For small startups willing to give it a try ! 14-days free trial !
            </Typography>
            <Typography
              variant="h3"
              display="flex"
              alignItems="end">
              $49
              <Typography variant="body1">/monthly</Typography>
            </Typography>
            <Typography variant="h6">What’s included</Typography>
            <Typography
              display="flex"
              alignItems="center"
              gap={1}>
              <VerifiedIcon />
              All analytics features
            </Typography>
            <Typography
              display="flex"
              alignItems="center"
              gap={1}>
              <VerifiedIcon />
              Up to 250,000 tracked visits
            </Typography>
            <Typography
              display="flex"
              alignItems="center"
              gap={1}>
              <VerifiedIcon />
              Normal support
            </Typography>
            <Typography
              display="flex"
              alignItems="center"
              gap={1}>
              <VerifiedIcon />
              Up to 3 team members
            </Typography>
            <Button sx={{ color: "#fff", my: 2, p: 2, borderRadius: 5 }}>
              Get started
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          bgcolor="#fff"
          boxShadow={1}
          xs={10}
          sm={6}
          md={4}
          lg={3}
          color="#454238"
          borderRadius={5}>
          <Box
            p={3}
            display="flex"
            alignItems="flex-start">
            <Box
              display="flex"
              alignItems="center"
              gap={2}>
              <Image
                src={"/logo/Enterprise.svg"}
                alt={"price"}
                width={70}
                height={70}
              />
              <Box>
                <Typography>For big companies</Typography>
                <Typography variant="h5">Enterprise</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            px={3}
            display="flex"
            flexDirection="column"
            gap={2}>
            <Typography>For companies willing to scale it up !</Typography>
            <Typography
              variant="h3"
              display="flex"
              alignItems="end"
              color="#FF403E">
              $199+
              <Typography
                variant="body1"
                color="#919B9B">
                /monthly
              </Typography>
            </Typography>
            <Typography variant="h6">What’s included</Typography>
            <Typography
              display="flex"
              alignItems="center"
              gap={1}>
              <VerifiedIcon />
              All analytics features
            </Typography>
            <Typography
              display="flex"
              alignItems="center"
              gap={1}>
              <VerifiedIcon />
              Up to 250,000 tracked visits
            </Typography>
            <Typography
              display="flex"
              alignItems="center"
              gap={1}>
              <VerifiedIcon />
              Normal support
            </Typography>
            <Typography
              display="flex"
              alignItems="center"
              gap={1}>
              <VerifiedIcon />
              Up to 3 team members
            </Typography>
            <Button
              sx={{
                bgcolor: "#454238 !important",
                my: 2,
                p: 2,
                color: "#fff",
                borderRadius: 5,
              }}>
              Get started
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PricingPlans;
