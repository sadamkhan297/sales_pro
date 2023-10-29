/** @format */

"use client";
import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MobileStepper,
  Typography,
} from "@mui/material";
// @ts-ignore
import SwipeableViews from "react-swipeable-views";
// @ts-ignore
import { autoPlay } from "react-swipeable-views-utils";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const slideText = [
  {
    label: "s",
  },
  {
    label: "a",
  },
  {
    label: "d",
  },
  {
    label: "a",
  },
];

const ClientTestimonials = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = slideText.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  return (
    <Box>
      <Box sx={{ width: { xs: "80%" }, m: "20px auto" }}>
        <Typography
          variant="body1"
          textAlign="center"
          color="#FF403E">
          BE PART OF THE CHANGE !
        </Typography>
        <Typography
          textAlign="center"
          sx={{
            fontSize: { xs: "2rem", md: "3vw" },
          }}
          component="p"
          fontFamily="Righteous"
          color="#454238"
          fontWeight={500}>
          Client Testimonials
        </Typography>
      </Box>
      <Box>
        <Box sx={{ width: { xs: 350, sm: 550, md: 900 }, m: "auto" }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            interval={3000}
            enableMouseEvents>
            {slideText.map((step, index) => (
              <Box
                key={index}
                sx={{
                  // width: "100%",
                  m: "30px auto",
                  backgroundImage: 'url("/images/bgDots.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  minHeight: { xs: "0vh", sm: "40vh", md: "40vh" },
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                <>
                  <Box
                    width={{ xs: "70%", sm: "70%", lg: "55%" }}
                    bgcolor="#fff"
                    boxShadow={1}
                    p={5}
                    borderRadius={3}>
                    <Typography variant="body2">
                      No other eCommerce platform allows people to start for
                      free and grow their store as their business grows. More
                      importantly WooCommerce does not charge you a portion of
                      your profits as your business grows!
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 1,
                        pt: 5,
                      }}>
                      <Avatar alt="Profile Picture" />
                      <Box>
                        <Typography variant="body2">Younus Akram</Typography>
                        <Typography
                          variant="body1"
                          color="#FF403E">
                          CEO Creative Studio
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </>
              </Box>
            ))}
          </AutoPlaySwipeableViews>
          <Box>
            <MobileStepper
              sx={{ bgcolor: "transparent" }}
              // @ts-ignore
              variant=""
              steps={maxSteps}
              position="static"
              bottom={0}
              activeStep={activeStep}
              nextButton={
                <Button
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}>
                  <KeyboardDoubleArrowRightIcon />
                </Button>
              }
              backButton={
                <Button
                  onClick={handleBack}
                  disabled={activeStep === 0}>
                  <KeyboardDoubleArrowLeftIcon />
                </Button>
              }
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ClientTestimonials;
