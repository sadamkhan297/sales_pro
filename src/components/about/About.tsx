/** @format */

import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const AccordionText = [
  {
    title: "About Us",
    text: "Sales Pro is a leading sales solutions provider offering comprehensive services to businesses of all sizes. Our dedicated team is committed to delivering top-notch strategies and solutions to help our clients succeed.",
    text2:
      "With years of experience in the industry we have established ourselves as a trusted partner for companies seeking to enhance their sales performance and achieve sustainable growth.",
  },
  {
    title: "Our Mission",
    text: " Our mission is to empower businesses with the tools and knowledge necessary to drive sales, build strong customer relationships, and achieve long-term success in their respective industries.",
  },
  {
    title: "Our Team",
    text: "At Sales Pro we have a team of experienced professionals who are passionate about helping businesses thrive.From sales experts to customer support specialists, our team is dedicated to providing exceptional service and support to our clients.",
    text2:
      "Contact us today to learn more about how Sales Pro can support your business goals.",
  },
];

const About = () => {
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
          About
        </Typography>
      </Box>
      <Grid
        item
        xs={12}
        md={6}
        px={{ xs: 2, md: 10 }}
        pb={15}>
        {AccordionText.map((val, i) => (
          <>
            <Typography
              key={i}
              variant="h6"
              mb={1}
              fontWeight={700}>
              {val.title}
            </Typography>
            <Typography mb={3}>{val.text}</Typography>
            <Typography mb={3}>{val.text2}</Typography>
          </>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
