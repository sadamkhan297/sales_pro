/** @format */
"use client";

import React from "react";
import { Box, Typography, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import UnlimitedText from "./UnlimitedText";
import UnlimitedEmail from "./UnlimitedEmail";
import UnlimitedRingless from "./UnlimitedRingless";
import UnlimitedWebsite from "./UnlimitedWebsite";

const Features = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const tabMenu = [
    {
      label: "SMS",
      value: "1",
    },
    {
      label: "Email",
      value: "2",
    },
    {
      label: "Ringless Voicemails",
      value: "3",
    },
    {
      label: "Website & Funnel Creation",
      value: "4",
    },
  ];
  return (
    <Box mt={2}>
      <Typography
        variant="body1"
        textAlign="center"
        color="#FF403E">
        MOST POPULAR FEATURES
      </Typography>
      <Box
        sx={{
          width: "90%",
          m: "20px auto",
          borderRadius: 5,
          p: { xs: 2, sm: 5 },
          background: "linear-gradient(45deg, #E0F4FF, #FFFFFF)",
        }}>
        <Box
          display="flex"
          sx={{
            overflowX: "auto",
            "::-webkit-scrollbar": {
              display: "none !important",
            },
          }}>
          {tabMenu.map((_, i) => (
            <TabContext
              key={i}
              value={value}>
              <Box
                sx={{
                  display: "flex",

                  ".MuiTabs-indicator": {
                    bgcolor: "inherit",
                  },
                  ".Mui-selected ": {
                    bgcolor: "#fff",
                    borderRadius: 5,
                    color: "#FF403E !important",
                  },
                }}>
                <TabList
                  sx={{ overflow: "auto" }}
                  onChange={handleChange}
                  aria-label="lab API tabs example">
                  <Tab
                    sx={{
                      maxWidth: "inherit !important",
                      minWidth: "inherit !important",
                      mr: 2,
                      whiteSpace: "pre",
                    }}
                    label={_.label}
                    value={_.value}
                  />
                </TabList>
              </Box>
            </TabContext>
          ))}
        </Box>
        <TabContext value={value}>
          <Box>
            <TabPanel value="1">
              <UnlimitedText />
            </TabPanel>
            <TabPanel value="2">
              <UnlimitedEmail />
            </TabPanel>
            <TabPanel value="3">
              <UnlimitedRingless />
            </TabPanel>
            <TabPanel value="4">
              <UnlimitedWebsite />
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </Box>
  );
};

export default Features;
