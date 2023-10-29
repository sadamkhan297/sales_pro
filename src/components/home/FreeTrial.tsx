/** @format */

import { Box, Grid, Typography } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PostAddIcon from "@mui/icons-material/PostAdd";

import Image from "next/image";
import React from "react";
import TrialForm from "./TrialForm";

const FreeTrial = () => {
  return (
    <Grid
      width="80%"
      m="auto"
      container
      alignItems="center">
      <Grid
        item
        xs={12}
        md={6}>
        <Box
          display="flex"
          flexDirection="column"
          gap={1.5}
          pr={2}>
          <Typography color="#0051C4">LET’S GET STARTED !</Typography>
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "3vw" },
            }}
            component="p"
            fontFamily="Righteous"
            color="#454238"
            fontWeight={500}>
            Start Your Free Trial
          </Typography>
          <Typography
            variant="body1"
            color="#919B9B">
            Start today and give it a try 1 If you are not satisfied, you get
            fully reimbursed, no questions asked !
          </Typography>
          <Typography>Benefits</Typography>
          <Typography
            variant="body2"
            color="#919B9B"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}>
            <AutoAwesomeIcon sx={{ color: "#FF403E" }} />
            Money Back Garuntee
          </Typography>
          <Typography
            variant="body2"
            color="#919B9B"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}>
            <AutoAwesomeIcon sx={{ color: "#FF403E" }} />
            No Risk
          </Typography>
          <Typography
            variant="body2"
            color="#919B9B"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}>
            <PostAddIcon sx={{ color: "#FF403E" }} />
            No Commitment
          </Typography>
          <Box>
            <Image
              src={"/logo/money.svg"}
              alt={"sms"}
              width={250}
              height={250}
              layout="intrinsic"
            />
          </Box>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}>
        <Box>
          <TrialForm />
        </Box>
      </Grid>
    </Grid>
  );
};

export default FreeTrial;
