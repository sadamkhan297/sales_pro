/** @format */

import * as React from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import { Button, Typography, Box, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";

const drawerWidth = 300;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResponiveNavbar: React.FC<Props> = ({ open, setOpen }) => {
  const router = useRouter();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon
              sx={{
                bgcolor: "#cbcccd",
                borderRadius: "50%",
                fontSize: 25,
              }}
            />
          </IconButton>
        </DrawerHeader>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
          color="#919B9B">
          <Link href="/home">
            <Typography
              variant="h6"
              sx={{ ":hover": { color: "#FF403E", borderBottom: 1 } }}>
              Home
            </Typography>
          </Link>
          <Link href="/features">
            <Typography
              variant="h6"
              sx={{ ":hover": { color: "#FF403E", borderBottom: 1 } }}>
              Features
            </Typography>
          </Link>
          <Link href="/pricing">
            <Typography
              variant="h6"
              sx={{ ":hover": { color: "#FF403E", borderBottom: 1 } }}>
              Pricing
            </Typography>
          </Link>
          <Link href="/enterprise">
            <Typography
              variant="h6"
              sx={{ ":hover": { color: "#FF403E", borderBottom: 1 } }}>
              Enterprise
            </Typography>
          </Link>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
          mt={2}>
          <Button
            onClick={() => router.push("/contacts")}
            variant="contained"
            sx={{
              textTransform: "capitalize",
              bgcolor: "#644AA0 !important",
              color: "#fff",
              borderRadius: 10,
            }}>
            Contact sales
          </Button>
          <Button
            onClick={() => router.push("/login")}
            variant="contained"
            sx={{
              bgcolor: "#454238",
              borderRadius: 10,
              width: "50%",
            }}>
            Signup
          </Button>
          <Button
            onClick={() => router.push("/signup")}
            variant="contained"
            sx={{
              bgcolor: "#FFF1F1",
              borderRadius: 10,
              color: "#FF403E",
              width: "50%",
            }}>
            Login
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default ResponiveNavbar;
