/** @format */
"use client";
import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PostAddIcon from "@mui/icons-material/PostAdd";
import EnterPriseForm from "./EnterPriseForm";
import FormatOverlineIcon from "@mui/icons-material/FormatOverline";
import { usePathname } from "next/navigation";
const HomeSection = () => {
  const pathName = usePathname();
  return (
    <Box
      color="#fff"
      py={{ xs: 0, md: 10 }}
      px={{ xs: 4, md: 10 }}
      display="flex"
      justifyContent="center"
      alignItems="center">
      <Box
        sx={{
          backgroundImage: 'url("/images/enterBg.svg")',
          position: "absolute",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          right: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}></Box>
      <Grid
        container
        alignItems="center"
        spacing={2}>
        <Grid
          item
          xs={12}
          md={5}
          lg={4}>
          <Box
            display="flex"
            flexDirection="column"
            gap={5}
            pr={{ xs: 0, md: 2 }}>
            <Typography color="#0051C4">Additional Resources</Typography>
            <Typography
              variant="body2"
              color="#919B9B"
              sx={{
                display: "flex",
                gap: 2,
              }}>
              <AutoAwesomeIcon sx={{ color: "#FF403E" }} />
              <Typography>
                <Typography
                  color="black"
                  fontWeight={700}
                  mb={1}>
                  Knowledge Base
                </Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                arcu, convallis est sed. Proin nulla eu a vitae
              </Typography>
            </Typography>
            <Typography
              variant="body2"
              color="#919B9B"
              sx={{
                display: "flex",
                gap: 2,
              }}>
              <AutoAwesomeIcon sx={{ color: "#FF403E" }} />
              <Typography>
                <Typography
                  color="black"
                  fontWeight={700}
                  mb={1}>
                  Quick Chat
                </Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                arcu, convallis est sed.
              </Typography>
            </Typography>
            <Typography
              variant="body2"
              color="#919B9B"
              sx={{
                display: "flex",
                gap: 2,
              }}>
              <PostAddIcon sx={{ color: "#FF403E" }} />
              <Typography>
                <Typography
                  color="black"
                  fontWeight={700}
                  mb={1}>
                  Training Centre
                </Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                arcu, convallis est sed.
              </Typography>
            </Typography>
            <Typography
              variant="body2"
              color="#919B9B"
              sx={{
                display: "flex",
                gap: 2,
              }}>
              <FormatOverlineIcon sx={{ color: "#FF403E" }} />
              <Typography>
                <Typography
                  color="black"
                  fontWeight={700}
                  mb={1}>
                  Account Help
                </Typography>
                Lorem ipsum dolor sit amet, consectetur
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          lg={8}>
          <Box mb={8}>
            <EnterPriseForm />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeSection;
