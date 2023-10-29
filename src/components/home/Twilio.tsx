/** @format */

import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import VerifiedIcon from "@mui/icons-material/Verified";

const Twilio = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(45deg, #FF403E, #FF7444)",
        color: "#fff",
        py: 0.5,
      }}>
      <Grid
        container
        my={2}
        p={2}
        gap={0}
        justifyContent="center"
        alignItems="center"
        spacing={2}>
        <Grid
          xs={5}
          sm={4}
          md={4}>
          <Box width="70%">
            <Image
              src={"/images/Twilio.svg"}
              alt={"Twilio"}
              width={500}
              height={100}
              layout="intrinsic"
            />
          </Box>
        </Grid>

        <Grid
          xs={10}
          sm={6}
          md={4}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap={2}>
            <Typography>Twilio</Typography>
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "2.5vw" },
              }}
              component="p"
              fontFamily="Righteous"
              color="#fff"
              fontWeight={500}>
              Pay For Your Usage only
            </Typography>
            <Typography
              display="flex"
              alignItems="center"
              gap={1}>
              <VerifiedIcon />
              ︎No Limits or contracts
            </Typography>
            <Typography
              display="flex"
              alignItems="self-start"
              pr={10}
              gap={1}>
              <VerifiedIcon />
              First 1,000 SMS are free and included in your plan (.0080 per SMS
              afterward)
            </Typography>
            <Button
              sx={{
                bgcolor: "#fff !important",
                color: "black",
                borderRadius: 5,
                px: 3,
                mt: 1,
                py: 1.5,
              }}>
              Start today
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Twilio;
