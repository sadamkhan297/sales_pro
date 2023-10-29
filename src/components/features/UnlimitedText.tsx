/** @format */

import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import Image from "next/image";

type Props = {
  p1: string;
  p2: string;
  p3: string;
  p4?: string;
  p5?: string;
  listContent?: { list: string }[];
  btn: string;
  srcImg: any;
};

const UnlimitedText = ({
  p1,
  p2,
  p3,
  p4,
  p5,
  listContent,
  btn,
  srcImg,
}: Props) => {
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
          gap={1}>
          <Typography
            variant="body1"
            color="red">
            {p1}
          </Typography>
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
          <Typography
            variant="body1"
            color="#919B9B">
            {p4}
          </Typography>
          <Typography
            variant="body1"
            color="#919B9B">
            {p5}
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            my={1}
            gap={1}>
            {listContent?.map((val, i) => (
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
            background: "#FD4C1C",
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
            src={srcImg}
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

export default UnlimitedText;
