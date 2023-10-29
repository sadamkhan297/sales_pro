/** @format */

import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import Image from "next/image";

const listContent = [
  { list: "Make a call" },
  { list: "Send a text" },
  { list: "Check an email" },
  { list: "Reference your notes" },
];

const MobileApp = () => {
  return (
    <Box mt={5}>
      <Box sx={{ width: { xs: "80%", md: "50%" }, m: "auto" }}>
        <Typography
          variant="body1"
          textAlign="center"
          color="#FF403E">
          MOBILE APP
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
          Moving Fast for Better Sales
        </Typography>
      </Box>
      <Grid
        container
        alignItems="start"
        mt={{ xs: 0, md: 5 }}
        px={{ xs: 4, sm: 10, md: 15 }}
        spacing={{ xs: 2, md: 6 }}>
        <Grid
          item
          xs={12}
          md={6}>
          <Box
            display="flex"
            flexDirection="column"
            pt={2}
            gap={1.5}>
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "2vw" },
              }}
              component="p"
              fontFamily="Righteous"
              color="#454238"
              fontWeight={500}>
              You’ll never have to worry about missing out on a potential deal
              again due to travel.
            </Typography>
            <Typography variant="body1">
              All For 15 Software in 1 for just $49
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              my={1}
              gap={1}>
              {listContent.map((val, i) => (
                <Typography
                  key={i}
                  variant="body2"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}>
                  <DownloadDoneIcon />
                  {val.list}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box mt={5}>
            <Button>
              <Image
                src={"/logo/Apple.svg"}
                alt={"sms"}
                width={150}
                height={100}
                layout="intrinsic"
              />
            </Button>
            <Button>
              <Image
                src={"/logo/Google.svg"}
                alt={"sms"}
                width={150}
                height={100}
                layout="intrinsic"
              />
            </Button>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
            }}>
            <Image
              src={"/images/mbl.svg"}
              alt={"sms"}
              width={700}
              height={600}
              layout="intrinsic"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MobileApp;
