/** @format */
import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import Image from "next/image";

const HomeSection = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center">
      <Box
        sx={{
          backgroundImage: 'url("/images/pinkbg.png")',
          position: "absolute",
          backgroundSize: "contain",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          right: 0,
          top: 0,
          width: { xs: "", md: "580px", lg: "750px" },
          height: "100%",
          zIndex: -1,
        }}></Box>
      <Box width="100%">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          mt={2}
          spacing={2}>
          <Grid
            item
            xs={12}
            md={6}>
            <Stack
              gap={2}
              textAlign={{ xs: "center", sm: "left" }}
              p={{ xs: 4, md: 8, lg: 14 }}>
              <Typography variant="body1">
                THE ALL-IN-ONE CRM FOR SALES TEAM !
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "2rem", md: "3vw" },
                }}
                component="p"
                fontFamily="Righteous"
                color="#454238"
                fontWeight={600}>
                INCREASE SALES BY +25% IN 90 DAYS !
              </Typography>
              <Typography
                variant="body1"
                color="#919B9B">
                Easily Contact 100+ Prospects Per Hour, Automate Followup
                Sequences, and Close More Deals.
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}>
            <Stack
              gap={1}
              alignItems="center"
              p={{ xs: 3, md: 14 }}>
              <Box
                width={{ xs: "80%", md: "100%" }}
                textAlign="center"
                m="auto">
                <Image
                  src={"/images/Frame.png"}
                  alt="frame"
                  width={450}
                  height={400}
                  layout="intrinsic"
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomeSection;
