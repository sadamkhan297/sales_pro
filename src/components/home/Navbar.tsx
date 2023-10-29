/** @format */
"use client";

import { Box, Button, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ResponiveNavbar from "./ResponsiveNavbar";

const Navbar = () => {
  const usePath = usePathname();
  const router = useRouter();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <ResponiveNavbar
        open={open}
        setOpen={setOpen}
      />
      <Box
        sx={{
          height: "75px",
        }}>
        <Box
          sx={{
            px: { xs: 5, md: 7, lg: 10 },
            bgcolor: usePath === "/home" ? "#fff" : "rgba(0,0,0,0.1)",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "fixed",
            left: 0,
            zIndex: 1,
          }}>
          <Box
            display="flex"
            py={2}
            alignItems="center">
            <Image
              src={
                usePath === "/home" ? "/logo/logo.png" : "/logo/footerLogo.svg"
              }
              alt="logo"
              width={150}
              height={40}
            />
            <Box
              display={{ xs: "none", md: "flex" }}
              gap={{ xs: 3, lg: 4 }}
              pl={5}
              color={usePath === "/home" ? "#919B9B" : "#fff"}>
              <Link href="/home">
                <Typography
                  // variant="h6"
                  sx={{ ":hover": { color: "#FF403E", borderBottom: 1 } }}>
                  Home
                </Typography>
              </Link>
              <Link href="/features">
                <Typography
                  // variant="h6"
                  sx={{ ":hover": { color: "#FF403E", borderBottom: 1 } }}>
                  Features
                </Typography>
              </Link>
              <Link href="/pricing">
                <Typography
                  // variant="h6"
                  sx={{ ":hover": { color: "#FF403E", borderBottom: 1 } }}>
                  Pricing
                </Typography>
              </Link>
              <Link href="/enterprise">
                <Typography
                  // variant="h6"
                  sx={{ ":hover": { color: "#FF403E", borderBottom: 1 } }}>
                  Enterprise
                </Typography>
              </Link>
            </Box>
          </Box>
          {usePath === "/login" ? (
            ""
          ) : (
            <Box
              display={{ xs: "none", md: "flex" }}
              alignItems="center"
              gap={2}>
              <Button
                onClick={() => router.push("/contacts")}
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  bgcolor:
                    usePath === "/home"
                      ? "#fff !important"
                      : "#644AA0 !important",
                  color: usePath === "/home" ? "black" : "#fff",
                  borderRadius: 10,
                }}>
                Contact sales
              </Button>
              <Button
                onClick={() => router.push("/signup")}
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  bgcolor:
                    usePath === "/home"
                      ? "#454238 !important"
                      : "#FF403E !important",
                  borderRadius: 10,
                }}>
                Signup
              </Button>
              <Button
                onClick={() => router.push("/login")}
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  bgcolor:
                    usePath === "/home"
                      ? "#FFF1F1 !important"
                      : "#7680c6 !important",
                  borderRadius: 10,
                  color: usePath === "/home" ? "#FF403E" : "#fff",
                }}>
                Login
              </Button>
            </Box>
          )}
          <Box
            onClick={handleDrawerOpen}
            sx={{
              ...(open && { display: "none" }),
              display: { md: "none" },
              color: "#3383FF",
            }}>
            <MenuOpenIcon sx={{ fontSize: 50 }} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
