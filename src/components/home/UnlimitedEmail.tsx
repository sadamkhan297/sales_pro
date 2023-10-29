/** @format */

import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import Image from "next/image";

const listContent = [
  { list: "Send mass email campaigns" },
  {
    list: "Manage all your prospect communications in one easy-access location",
  },
  { list: "Build email templates and create automated email sequences" },
  { list: "Connect your SMTP for custom emails" },
  { list: "Follow our training to start sending 50,000 emails" },
];

const UnlimitedEmail = () => {
  return (
    <Grid
      container
      alignItems="start"
      spacing={6}>
      <Grid
        item
        xs={12}
        md={6}>
        <Box
          display="flex"
          flexDirection="column"
          gap={1.5}>
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "3vw" },
            }}
            component="p"
            fontFamily="Righteous"
            color="#454238"
            fontWeight={500}>
            Unlimited Email
          </Typography>
          <Typography
            variant="body1"
            color="#919B9B">
            Salespro Direct allows you to:
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            my={1}
            gap={1}>
            {listContent.map((val, i) => (
              <Typography
                key={i}
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}>
                <DownloadDoneIcon sx={{ color: "#FF403E" }} />
                {val.list}
              </Typography>
            ))}
          </Box>
        </Box>
        <Button
          size="large"
          sx={{
            background: "linear-gradient(45deg, #1862CA, #309CFF)",
            color: "#fff",
            fontWeight: 700,
            borderRadius: 10,
            py: 2,
            px: 4,
            mt: 2,
          }}>
          Get Started
        </Button>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}>
          <Image
            src={"/images/email.svg"}
            alt={"sms"}
            width={700}
            height={600}
            layout="intrinsic"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default UnlimitedEmail;
