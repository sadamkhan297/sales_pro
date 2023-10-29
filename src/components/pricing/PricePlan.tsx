/** @format */

import React from "react";
import { Box, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";

const rows = [
  { list: "Frozen yoghurt", isTrue: true, isCheck: true },
  { list: "Auto-Dialing System", isTrue: true, isCheck: true },
  { list: "Unlimited Emails", isTrue: true, isCheck: true },
  { list: "Unlimited Ringless Voicemails", isTrue: true, isCheck: true },
  { list: "Mobile App and Desk Phone", isTrue: true, isCheck: true },
  { list: "Call Tracking and Recording", isTrue: true, isCheck: true },
  { list: "Pipeline and Opportunity CRM", isTrue: true, isCheck: true },
  { list: "Accept and Process Payments", isTrue: true, isCheck: true },
  { list: "Calendar and Appointment Manager", isTrue: true, isCheck: true },
  { list: "Task Management", isTrue: true, isCheck: false },
  { list: "Membership and Training Creation", isTrue: true, isCheck: false },
  { list: "Workflows and Automation", isTrue: true, isCheck: false },
  { list: "Dedicated Account Manager", isTrue: true, isCheck: false },
];

const PricePlan = () => {
  return (
    <Box
      mt={{ xs: 10, md: 15 }}
      position="relative"
      width="100%"
      overflow="scroll !important"
      pb={8}>
      <Box
        bgcolor="#fff"
        boxShadow={2}
        width={800}
        borderRadius={2}
        mx={{ xs: 2, sm: 5, md: "auto" }}
        p={4}>
        <Box
          sx={{
            backgroundImage: 'url("/images/pricePlanBg.svg")',
            position: "absolute",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            right: 0,
            top: 0,
            width: { xs: "", md: "365px", lg: "300px" },
            height: "100%",
            zIndex: -1,
          }}></Box>
        <Box
          color="#fff"
          sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <Box
            sx={{
              background: "linear-gradient(45deg, #236FDA, #2A7FF8)",
              width: "35%",
              borderRadius: 1.5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "2.5vw" },
              }}
              component="p"
              fontFamily="Righteous"
              fontWeight={500}>
              Price Plan
            </Typography>
          </Box>
          <Box
            sx={{
              background: "linear-gradient(45deg, #FF403E, #FF8145)",
              borderRadius: 1.5,
              width: "60%",
              display: "flex",
              justifyContent: "space-between",
              pt: 5,
              pb: 3,
              px: 10,
            }}>
            <Box>
              <Typography>Standard</Typography>
              <Typography
                variant="h3"
                display="flex"
                alignItems="end"
                color="#fff">
                $49
                <Typography
                  variant="body1"
                  color="#fff">
                  /mon
                </Typography>
              </Typography>
            </Box>
            <Box>
              <Typography>Enterprise</Typography>
              <Typography
                variant="h3"
                display="flex"
                alignItems="end"
                color="#fff">
                $29
                <Typography
                  variant="body1"
                  color="#fff">
                  /mon
                </Typography>
              </Typography>
              <Typography>(per user, min 5 users)</Typography>
            </Box>
          </Box>
        </Box>
        {rows.map((val, i) => (
          <Box
            key={i}
            display="flex"
            justifyContent="space-between"
            borderBottom={1}
            borderColor="#919B9B"
            alignItems="center"
            py={1}>
            <Typography width="35%">{val.list}</Typography>
            <Box
              width="60%"
              px={15}
              display="flex"
              justifyContent="space-between">
              <Box>
                {val.isCheck === true && (
                  <VerifiedIcon sx={{ color: "#11A283" }} />
                )}
              </Box>
              {val.isTrue === true && (
                <VerifiedIcon sx={{ color: "#11A283" }} />
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PricePlan;
