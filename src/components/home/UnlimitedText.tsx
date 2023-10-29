/** @format */

import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import Image from "next/image";

const listContent = [
  { list: "Salespro Direct SMS capabilities allow you to" },
  { list: "Create automated SMS messages" },
  { list: "Draft SMS templates to fire out quickly to prospects" },
  { list: "Write personalized SMS messages for specific prospects" },
  { list: "Prospect with unlimited outbound SMS campaigns" },
  { list: "Automate your follow up process" },
];

const UnlimitedText = () => {
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
            Unlimited SMS
          </Typography>
          <Typography
            variant="body1"
            color="#919B9B">
            Tired of being limited on the volume of SMS campaigns you can send,
            using our proven strategies you can send truly unlimited sms
            campaigns.
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
            src={"/images/sms.svg"}
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

export default UnlimitedText;
