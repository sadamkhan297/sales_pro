/** @format */
"use client";
import React from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LoginForm from "../auth/UserLogin";
const LoginSection = () => {
  const pathName = usePathname();
  return (
    <Box
      color="#fff"
      py={{ xs: 2, md: 10 }}
      px={{ xs: 4, md: 10 }}
      mb={5}
      display="flex"
      justifyContent="center"
      alignItems="center">
      <Box
        sx={{
          backgroundImage: 'url("/images/loginBg.svg")',
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
        justifyContent="center"
        alignItems="center"
        spacing={2}>
        <Grid
          item
          xs={10}
          md={6}
          lg={6}>
          <Box
            gap={1.5}
            sx={{
              width: "100%",
              height: "100%",
              mb: 2,
            }}
            pr={{ xs: 0, md: 2 }}>
            <Image
              src="/images/loginImg.svg"
              alt="loginImg"
              width={500}
              height={500}
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
            <LoginForm />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginSection;
