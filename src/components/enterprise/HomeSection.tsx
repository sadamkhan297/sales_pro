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
            gap={1.5}
            pr={{ xs: 0, md: 2 }}>
            <Typography color="#0051C4">Contact sales</Typography>
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "2.5vw" },
              }}
              component="p"
              fontFamily="Righteous"
              color="#454238"
              fontWeight={500}>
              We are here to help.
            </Typography>
            <Typography
              variant="body1"
              color="#919B9B">
              we created a solution based around all of the tools a direct
              salesperson would need across multiple industries. One that allows
              them to get in front of their prospects move tacross the board.
            </Typography>
            <Typography
              color="#454238"
              fontWeight={600}
              variant="h5">
              Benefits of Enterprise users
            </Typography>
            <Typography
              variant="body2"
              color="#919B9B"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}>
              <AutoAwesomeIcon sx={{ color: "#FF403E" }} />
              40% off user accounts $29 Per additional user accounts
            </Typography>
            <Typography
              variant="body2"
              color="#919B9B"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}>
              <AutoAwesomeIcon sx={{ color: "#FF403E" }} />
              Dedicated account manager
            </Typography>
            <Typography
              variant="body2"
              color="#919B9B"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}>
              <PostAddIcon sx={{ color: "#FF403E" }} />
              10% discount on SMS & Phone
            </Typography>
            <Typography
              variant="body2"
              color="#919B9B"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}>
              <FormatOverlineIcon sx={{ color: "#FF403E" }} />
              Special pricing & offers
            </Typography>
            <Box>
              {pathName === "/enterprise" ? (
                <Button
                  sx={{
                    textTransform: "capitalize",
                    background: "linear-gradient(45deg, #FF403E, #FF8145)",
                    color: "#fff",
                    borderRadius: 10,
                    py: 2,
                    px: 5,
                    mt: 1,
                    mb: 3,
                    fontWeight: 700,
                  }}
                  type="submit">
                  Contact sales
                </Button>
              ) : (
                <Typography
                  mt={1}
                  mb={3}
                  variant="h6"
                  color="#454238"
                  fontWeight={700}>
                  Join 80,000+ highly productive teams
                </Typography>
              )}
              <Image
                src={"/logo/money.svg"}
                alt={"sms"}
                width={250}
                height={250}
                layout="intrinsic"
              />
            </Box>
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
