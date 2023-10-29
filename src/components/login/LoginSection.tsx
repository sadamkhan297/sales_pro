/** @format */
"use client";
import React from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LoginForm from "../Auth/UserLogin";
const LoginSection = () => {
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
        alignItems="center"
        spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}>
          <Box
            display="flex"
            flexDirection="column"
            gap={1.5}
            width="100%"
            height="100%"
            pr={{ xs: 0, md: 2 }}>
            <Image
              src="/images/loginImg.svg"
              alt="loginImg"
              width={500}
              height={500}
              layout="intrinsic"
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
