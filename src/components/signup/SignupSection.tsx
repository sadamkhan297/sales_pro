/** @format */
"use client";
import React from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import UserSignup from "../auth/UserSignup";
const SignupSection = () => {
  const pathName = usePathname();
  return (
    <Box
      color="#fff"
      pt={{ xs: 0, md: 5 }}
      px={{ xs: 4, md: 10 }}
      pb={5}
      display="flex"
      justifyContent="center"
      alignItems="center">
      <Box
        sx={{
          backgroundImage: 'url("/images/signBg.svg")',
          position: "absolute",
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          right: 0,
          top: 0,
          width: "30%",
          height: "125%",
          zIndex: -1,
        }}></Box>
      <Grid
        container
        alignItems="center"
        spacing={2}
        pb={3}>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}>
          <Box
            gap={1.5}
            sx={{
              width: "100%",
              height: "100%",
            }}
            pr={{ xs: 0, md: 2 }}>
            <Image
              src="/images/signupImg.svg"
              alt="loginImg"
              width={500}
              height={600}
              layout="responsive"
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}>
          <Box>
            <UserSignup />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignupSection;
