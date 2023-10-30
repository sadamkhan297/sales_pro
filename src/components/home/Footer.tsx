/** @format */
"use client";
import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const usePath = usePathname();
  const router = useRouter();

  return (
    <Box
      sx={{
        background:
          usePath === "/home"
            ? "#454238"
            : "linear-gradient(45deg, #FF403E, #FF8145)",
      }}
      color="#fff">
      <Grid
        justifyContent="center"
        container
        pt={5}
        px={{ xs: 5, md: 0 }}
        textAlign={{ xs: "center", sm: "left" }}
        spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "1.5vw" },
              }}
              component="p"
              fontFamily="Righteous"
              fontWeight={500}>
              INCREASE SALES BY 25% OR MORE IN YOUR FIRST 90 DAYS GUARANTEED
            </Typography>
            <Typography
              variant="subtitle2"
              color="#FBFBFB"
              py={1.5}>
              Easily Contact 100+ Prospects Per Hour, Automate Followup
              Sequences, and Close More Deals.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={2}>
          <Box
            display="flex"
            flexDirection="column"
            gap={1}
            px={{ xs: 0, md: 10 }}
            color="rgba(255, 255, 255, 0.5)">
            <Typography mb={2}>Navigate</Typography>
            <Link href="/home">
              <Typography
                variant="body2"
                sx={{ color: "#fff" }}>
                Home
              </Typography>
            </Link>
            <Link href="/features">
              <Typography
                variant="body2"
                sx={{ color: "#fff" }}>
                Features
              </Typography>
            </Link>
            <Link href="/pricing">
              <Typography
                variant="body2"
                sx={{ color: "#fff" }}>
                Pricing
              </Typography>
            </Link>
            <Link href="/enterprise">
              <Typography
                variant="body2"
                sx={{ color: "#fff" }}>
                Enterprise
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={2}>
          <Box
            display="flex"
            flexDirection="column"
            gap={1}
            px={{ xs: 0, md: 5 }}
            color="rgba(255, 255, 255, 0.5)">
            <Typography mb={2}>Why Salespro</Typography>
            <Link href="/Features">
              <Typography
                variant="body2"
                sx={{ color: "#fff" }}>
                Features
              </Typography>
            </Link>
            <Link href="/terms_conditions">
              <Typography
                variant="body2"
                sx={{ color: "#fff" }}>
                Terms and conditions
              </Typography>
            </Link>
            <Link href="/Pricing">
              <Typography
                variant="body2"
                sx={{ color: "#fff" }}>
                Privacy Policy
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={2}>
          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={1}
              color="rgba(255, 255, 255, 0.5)">
              <Typography mb={2}>Company Menu</Typography>
              <Link href="/about">
                <Typography
                  variant="body2"
                  sx={{ color: "#fff" }}>
                  About us
                </Typography>
              </Link>
              <Link href="/Features">
                <Typography
                  variant="body2"
                  sx={{ color: "#fff" }}>
                  Enterprise
                </Typography>
              </Link>
              <Link href="/Pricing">
                <Typography
                  variant="body2"
                  sx={{ color: "#fff" }}>
                  Testimonials
                </Typography>
              </Link>
              <Link href="/support">
                <Typography
                  variant="body2"
                  sx={{ color: "#fff" }}>
                  Support
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={2}
          lg={1.5}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems={{ xs: "center", md: "flex-start" }}
            gap={3}>
            <Button
              onClick={() => router.push("/signup")}
              variant="contained"
              sx={{
                bgcolor: "#fff !important",
                color: "#FF403E",
                borderRadius: 10,
                fontWeight: 600,
                py: { xs: 1, md: 2 },
                px: { xs: 5, sm: 4, md: 5 },
              }}>
              Signup
            </Button>
            <Button
              onClick={() => router.push("/login")}
              variant="contained"
              sx={{
                bgcolor:
                  usePath === "/home"
                    ? "#454238 !important"
                    : "inherit !important",
                borderRadius: 10,
                color: "#fff",
                fontWeight: 600,
                py: { xs: 1, md: 2 },
                px: { xs: 5, sm: 4, md: 5 },
                border: 2,
              }}>
              Login
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box
        width={{ xs: "100%", sm: "91%" }}
        display="flex"
        justifyContent={{ xs: "center", sm: "end" }}
        my={1}
        pb={3}>
        <Image
          src="/logo/footerLogo.svg"
          alt="logo"
          width={200}
          height={80}
        />
      </Box>
      <Typography
        borderTop={1}
        py={2}
        px={5}>
        © 2022 Salespro Direct All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
