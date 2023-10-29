/** @format */

import { Box, Typography } from "@mui/material";
import React from "react";

interface TextTypeProps {
  title: string;
  content: string;
}

const TextType: React.FC<TextTypeProps> = ({ title, content }) => {
  return (
    <Box
      textAlign="center"
      width="60%"
      my={5}
      mx="auto">
      <Typography
        sx={{
          fontSize: { xs: "1.5rem", md: "2.5vw" },
          color: "#454238",
          my: 1,
        }}
        component="p"
        fontFamily="Righteous"
        fontWeight={600}>
        {title}
      </Typography>
      <Typography sx={{ color: "#919B9B" }}>{content}</Typography>
    </Box>
  );
};

export default TextType;
