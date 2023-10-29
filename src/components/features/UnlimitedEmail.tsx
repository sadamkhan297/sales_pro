/** @format */

import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import Image from "next/image";

type Props = {
  p1: string;
  p2: string;
  p3: string;
  listContent: { list: string }[];
  btn: string;
};

const UnlimitedEmail = ({ p1, p2, p3, listContent, btn }: Props) => {
  return (
    <Grid
      container
      alignItems="start"
      spacing={6}>
      <Grid
        item
        xs={12}
        md={6}>
        <Box
          display="flex"
          flexDirection="column"
          gap={1.5}>
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "3vw" },
            }}
            component="p"
            fontFamily="Righteous"
            color="#454238"
            fontWeight={500}>
            {p2}
          </Typography>
          <Typography
            variant="body1"
            color="#919B9B">
            {p3}
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
                <DownloadDoneIcon sx={{ color: "#FF403E" }} />
                {val.list}
              </Typography>
            ))}
          </Box>
        </Box>
        <Button
          size="large"
          sx={{
            background: "linear-gradient(45deg, #1862CA, #309CFF)",
            color: "#fff",
            fontWeight: 700,
            borderRadius: 10,
            py: 2,
            px: 4,
            mt: 2,
          }}>
          {btn}
        </Button>
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
            src={"/images/email.svg"}
            alt={"sms"}
            width={700}
            height={600}
            layout="intrinsic"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default UnlimitedEmail;
