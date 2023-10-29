/** @format */

import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import Image from "next/image";

const listContent = [
  {
    list: "automate your voicemail process (record once and then drop voicemails with one click)",
  },
  {
    list: "add ringless voicemails inside automated workflows and",
  },
  {
    list: "use during outbound call blitzes to work faster and contact more prospects",
  },
];

const UnlimitedRingless = () => {
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
            Unlimited Ringless Voicemails
          </Typography>
          <Typography
            variant="body1"
            color="#919B9B">
            Using our unlimited ringless voicemail feature you can:
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
            // height: "100%",
          }}>
          <Image
            src={"/images/ringtone.svg"}
            alt={"sms"}
            width={500}
            height={400}
            layout="intrinsic"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default UnlimitedRingless;
