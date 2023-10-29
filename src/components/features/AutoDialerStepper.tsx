/** @format */
"use client";

import React from "react";
import { Box, Tab, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import UnlimitedText from "./UnlimitedText";
import UnlimitedEmail from "./UnlimitedEmail";
import UnlimitedRingless from "./UnlimitedRingless";
import UnlimitedWebsite from "./UnlimitedWebsite";
import {
  tabMenu2,
  listContent2,
  listContent3,
  listContent4,
} from "./StepperData";
import TextType from "../common/TextType";

const AutoDialerStepper = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      mt={2}
      bgcolor="#E6EDFF">
      <Box
        sx={{
          width: { xs: "100%", sm: "90%" },
          m: "20px auto",
          borderRadius: 5,
          p: { xs: 2, sm: 5 },
        }}>
        <TextType
          title="Phone"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu
      convallis est sed. Proin nulla eu a vitae lectus leo suscipit."
        />
        <Box
          display="flex"
          sx={{
            overflowX: "auto",
            pt: 3,
            "::-webkit-scrollbar": {
              display: "none !important",
            },
          }}>
          {tabMenu2.map((_, i) => (
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
              <UnlimitedText
                p1="OUR FEATURES"
                p2="Auto-Dialer"
                p3="Salespro Direct SMS capabilities allow you to:"
                p4="Salespro Direct offers automations for both email and SMS (so that you don’t have to manually follow up with prospects). Similar to Zapier, Salespro Direct allows you to automate numerous workflows (which can save salespeople hours of time each day by automating their entire follow up process):"
                btn="Get Started"
                srcImg="images/PhoneImg.svg"
              />
            </TabPanel>
            <TabPanel value="2">
              <UnlimitedEmail
                p1=""
                p2="Unlimited Email"
                p3="Salespro Direct allows you to:"
                listContent={listContent2}
                btn="Get Started"
              />
            </TabPanel>
            <TabPanel value="3">
              <UnlimitedRingless
                p1=""
                p2="Unlimited Ringless Voicemails"
                p3="Using our unlimited ringless voicemail feature you can:"
                listContent={listContent3}
                btn="Get Started"
              />
            </TabPanel>
            <TabPanel value="4">
              <UnlimitedWebsite
                p1=""
                p2="Unlimited Website & Funnel Creation"
                p3="Host both your company website and funnel out of Salespro Direct.
                Build conversion optimized funnels within minutes that book loads of
                sales calls with high intent prospects."
                listContent={listContent4}
                btn="Get Started"
              />
            </TabPanel>
            <TabPanel value="5">
              <UnlimitedWebsite
                p1=""
                p2="Templates & Workflows"
                p3="Host both your company website and funnel out of Salespro Direct.
                Build conversion optimized funnels within minutes that book loads of
                sales calls with high intent prospects."
                listContent={listContent4}
                btn="Get Started"
              />
            </TabPanel>
            <TabPanel value="6">
              <UnlimitedWebsite
                p1=""
                p2="Moble App"
                p3="Host both your company website and funnel out of Salespro Direct.
                Build conversion optimized funnels within minutes that book loads of
                sales calls with high intent prospects."
                listContent={listContent4}
                btn="Get Started"
              />
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </Box>
  );
};

export default AutoDialerStepper;
