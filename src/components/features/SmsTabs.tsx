/** @format */
"use client";
import React from "react";
import { Box, Typography, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const SmsTabs = () => {
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
      label: "Phone",
      value: "2",
    },
    {
      label: "Email",
      value: "3",
    },
    {
      label: "Reporting",
      value: "4",
    },
    {
      label: "Training",
      value: "5",
    },
    {
      label: "Automation",
      value: "6",
    },
    {
      label: "CRM",
      value: "7",
    },
    {
      label: "Website",
      value: "8",
    },
    {
      label: "Social",
      value: "9",
    },
  ];
  const TabPanelText = [
    {
      label: "SMS",
      value: "1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu convallis est sed. Proin nulla eu a vitae lectus leo suscipit.",
    },
    {
      label: "Phone",
      value: "2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu convallis est sed. Proin nulla eu a vitae lectus leo suscipit.",
    },
    {
      label: "Email",
      value: "3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu convallis est sed. Proin nulla eu a vitae lectus leo suscipit.",
    },
    {
      label: "Reporting",
      value: "4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu convallis est sed. Proin nulla eu a vitae lectus leo suscipit.",
    },
    {
      label: "Training",
      value: "5",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu convallis est sed. Proin nulla eu a vitae lectus leo suscipit.",
    },
    {
      label: "Automation",
      value: "6",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu convallis est sed. Proin nulla eu a vitae lectus leo suscipit.",
    },
    {
      label: "CRM",
      value: "7",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu convallis est sed. Proin nulla eu a vitae lectus leo suscipit.",
    },
    {
      label: "Website",
      value: "8",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu convallis est sed. Proin nulla eu a vitae lectus leo suscipit.",
    },
    {
      label: "Social",
      value: "9",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu convallis est sed. Proin nulla eu a vitae lectus leo suscipit.",
    },
  ];
  return (
    <Box mt={7}>
      <Box
        sx={{
          width: { xs: "90%", lg: "68%" },
          m: { xs: "0px auto", sm: "20px auto" },
          borderRadius: 5,
          p: { xs: 1, sm: 5 },
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
                  p: 0,
                  display: "flex",
                  ".MuiTabs-indicator": {
                    bgcolor: "inherit",
                  },
                  ".Mui-selected ": {
                    color: "#FF403E !important",
                    borderBottom: 1,
                  },
                }}>
                <TabList
                  sx={{
                    overflow: "auto",
                    p: 0,
                  }}
                  onChange={handleChange}
                  aria-label="lab API tabs example">
                  <Tab
                    sx={{
                      padding: "5px !important",
                      maxWidth: "inherit !important",
                      minWidth: "inherit !important",
                      mr: 4,
                      color: "#454238",
                    }}
                    label={_.label}
                    value={_.value}
                  />
                </TabList>
              </Box>
            </TabContext>
          ))}
        </Box>

        {TabPanelText.map((_, i) => (
          <TabContext
            key={i}
            value={value}>
            <Box>
              <TabPanel value={_.value}>
                <Box
                  textAlign="center"
                  width="90%"
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
                    {_.label}
                  </Typography>
                  <Typography sx={{ color: "#919B9B" }}>{_.text}</Typography>
                </Box>
              </TabPanel>
            </Box>
          </TabContext>
        ))}
      </Box>
    </Box>
  );
};

export default SmsTabs;
