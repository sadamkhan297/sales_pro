/** @format */
"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Accordions from "../home/Accordions";
import ReactPlayer from "react-player";

const AccordionText = [
  { text: "Does SalesPro Direct require a long-term commitment?" },
  { text: "Does SalesPro Direct have a guarantee?" },
  { text: "Can I build websites and landing pages in Salespro Direct?" },
  { text: "How do I know which plan is best for me?" },
  { text: "How long will it take to install Salespro Direct?" },
  { text: "Is SalesPro Direct suitable for any kind of business?" },
  { text: "Does SalesPro Direct have any additional fees or costs?" },
];

const Frequently = () => {
  return (
    <Box my={10}>
      <Grid
        width={{ xs: "90%", sm: "80%" }}
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
            justifyContent="center"
            sx={{ width: { xs: "100%", sm: "70%", md: "90%", lg: "70%" } }}
            gap={0}
            pr={2}>
            <Typography
              variant="body2"
              sx={{ color: "#FF403E" }}>
              Q&A
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "3vw" },
              }}
              component="p"
              fontFamily="Righteous"
              color="#454238"
              fontWeight={500}>
              Frequently Asked Questions
            </Typography>
            <Box my={{ xs: 3, md: 5 }}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=GBET9G2RNPU"
                controls
                width="100%"
                height={300}
              />
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}>
          <Box>
            {AccordionText.map((_, i) => (
              <Accordions
                key={i}
                _={_}
                i={i + 1}
              />
            ))}
            <Button
              size="small"
              sx={{
                background: "#454238 !important",
                color: "#fff",
                fontWeight: 600,
                px: 5,
                py: 2,
                ml: 2,
                mt: 3,
                borderRadius: 10,
              }}>
              Contact support
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Frequently;
