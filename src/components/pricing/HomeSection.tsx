/** @format */

import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";

const standardData = [
  { list: "Unlimited SMS" },
  { list: "Auto-Dialing System" },
  { list: "Unlimited Emails" },
  { list: "Unlimited Ringless Voicemails" },
  { list: "Mobile App and Desk Phone" },
  { list: "Call Tracking and Recording" },
  { list: "Pipeline and Opportunity CRM" },
  { list: "Accept and Process Payments" },
  { list: "Calendar and Appointment Manager" },
  { list: "Task Management" },
  { list: "Membership and Training Creation" },
  { list: "Workflows and Automation" },
];

const HomeSection = () => {
  return (
    <Box
      color="#fff"
      width={{ xs: "100%", md: "75%" }}
      m="auto"
      display="flex"
      justifyContent="center"
      alignItems="center">
      <Box
        sx={{
          backgroundImage: 'url("/images/pricingBg.svg")',
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
        <Stack
          color="#fff"
          gap={0}
          textAlign={{ xs: "center", sm: "left", md: "center" }}
          p={{ xs: 4, md: 8, lg: 7 }}>
          <Typography variant="body1">Flexible Pricing Plans</Typography>
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "3vw" },
            }}
            component="p"
            fontFamily="Righteous"
            fontWeight={600}>
            The best work solution, for the best price.
          </Typography>
        </Stack>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          my={2}
          gap={2}
          spacing={2}>
          <Grid
            item
            bgcolor="#0051C4"
            xs={10}
            sm={8}
            lg={5}
            p={3}
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
                <Box>
                  <Typography>For startups</Typography>
                  <Typography variant="h5">Standard</Typography>
                </Box>
              </Box>
              <Button
                sx={{
                  background: "rgba(255, 255, 255, 0.1) !important",
                  color: "#fff",
                  borderRadius: 3,
                  ml: "auto",
                  p: 1,
                }}>
                Popular
              </Button>
            </Box>
            <Box
              px={3}
              display="flex"
              flexDirection="column"
              gap={2}>
              <Typography>Individual account for getting started</Typography>
              <Typography
                variant="h3"
                display="flex"
                alignItems="end">
                $49
                <Typography variant="body1">/monthly</Typography>
              </Typography>
              <Typography variant="h6">What’s included</Typography>
              {standardData.map((val, i) => (
                <Typography
                  key={i}
                  display="flex"
                  alignItems="center"
                  gap={1}>
                  <VerifiedIcon />
                  {val.list}
                </Typography>
              ))}
              <Button
                fullWidth
                sx={{
                  color: "#FF403E",
                  background: "#fff",
                  my: 2,
                  p: 2,
                  borderRadius: 5,
                }}>
                Get started
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            bgcolor="#fff"
            boxShadow={1}
            xs={10}
            sm={8}
            lg={5}
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
                <Box>
                  <Typography>For big companies</Typography>
                  <Typography
                    variant="h5"
                    color="#0051C4">
                    Enterprise
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              px={3}
              display="flex"
              flexDirection="column"
              gap={2}>
              <Typography>
                For Enterprise users, price per user, at least 5 users required.{" "}
              </Typography>
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
              {standardData.map((val, i) => (
                <Typography
                  key={i}
                  display="flex"
                  alignItems="center"
                  gap={1}>
                  <VerifiedIcon />
                  {val.list}
                </Typography>
              ))}

              <Button
                fullWidth
                sx={{
                  background: "linear-gradient(45deg, #FF403E, #FF8145)",
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
    </Box>
  );
};

export default HomeSection;
