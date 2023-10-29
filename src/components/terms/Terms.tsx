/** @format */

import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Accordions from "../home/Accordions";

const AccordionText = [
  { text: "Does SalesPro Direct require a long-term commitment?" },
  { text: "Does SalesPro Direct have a guarantee?" },
  { text: "Can I build websites and landing pages in Salespro Direct?" },
  { text: "How do I know which plan is best for me?" },
  { text: "How long will it take to install Salespro Direct?" },
  { text: "Is SalesPro Direct suitable for any kind of business?" },
  { text: "Does SalesPro Direct have any additional fees or costs?" },
];

const TermsCondition = () => {
  return (
    <Box>
      <Box
        mt={3}
        sx={{
          height: "30vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}>
        <Image
          src="/logo/termsLogo.svg"
          alt="termsLogo"
          width={70}
          height={70}
        />
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", md: "3vw" },
          }}
          component="p"
          fontFamily="Righteous"
          color="#454238"
          fontWeight={500}>
          Terms & Conditions
        </Typography>
      </Box>
      <Grid
        item
        xs={12}
        md={6}
        px={{ xs: 2, md: 10 }}
        pb={15}>
        <Box>
          {AccordionText.map((_, i) => (
            <Accordions
              key={i}
              _={_}
              i={i + 1}
            />
          ))}
        </Box>
      </Grid>
    </Box>
  );
};

export default TermsCondition;
