/** @format */
"use client";

import {
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

const Accordions = ({ _, i }: any) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box>
      <Accordion
        sx={{ "&.MuiAccordion-root": { boxShadow: "none" } }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}>
        <AccordionSummary
          sx={{
            py: 0.5,
            display: "flex",
            "& .MuiAccordionSummary-content": {
              alignItems: { sm: "center" },
            },
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <Typography>{_.text}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle2">
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Accordions;
