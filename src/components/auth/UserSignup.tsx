/** @format */
"use client";
import * as yup from "yup";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Typography, Button, Grid } from "@mui/material";
import InputFields from "../common/InputFields";
import Link from "next/link";

const schema = yup
  .object({
    fullName: yup.string().required("Full Name is required"),
    phone: yup.string().required("Phone Number is required"),
    email: yup.string().required("Email is required"),
  })
  .required();

type FormData = {
  fullName: string;
  phone: string | number;
  email: string;
};

const UserSignup: React.FC = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    // @ts-ignore
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);

    if (!data) {
      toast.error("Invalid activity");
    }
    toast.success("Form submitted successfully");
    reset();
  };

  return (
    <Box
      bgcolor="#FFFFFF"
      boxShadow={2}
      borderRadius={5}
      // mx={{ xs: 0, md: 3 }}
      p={{ xs: 2, sm: 5 }}>
      <Typography
        sx={{
          fontSize: { xs: "1.5rem", md: "2.2vw" },
        }}
        color="black"
        fontWeight={700}>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={{ xs: 0, lg: 2 }}>
          <Grid
            pt="0 !important"
            item
            xs={12}
            lg={6}>
            <InputFields
              type="text"
              name="fullName"
              label="Full Name"
              placeholder="abc@xyz.com"
              errors={errors}
              control={control}
            />
          </Grid>
          <Grid
            item
            pt="0 !important"
            xs={12}
            lg={6}>
            <InputFields
              type="number"
              name="phone"
              label="Phone Numbeer"
              placeholder="Mobile"
              errors={errors}
              control={control}
            />
          </Grid>
          <Grid
            pt="0 !important"
            item
            xs={12}>
            <InputFields
              type="email"
              name="email"
              label="Email"
              placeholder="abc@xyz.com"
              errors={errors}
              control={control}
            />
          </Grid>
        </Grid>
        <Grid
          container
          pt={2}
          spacing={{ xs: 0, lg: 2 }}>
          <Grid
            alignItems="center"
            item
            xs={12}
            md={12}
            lg={8}>
            <Box>
              <Typography
                fontWeight={500}
                variant="body1"
                color="#919B9B"
                sx={{ display: "inline" }}>
                By submitting my information, I confirm that I have read and
                understood the{" "}
                <Typography
                  sx={{
                    display: "inline",
                    color: "#FF403E",
                  }}>
                  Terms of services
                </Typography>{" "}
                &{" "}
                <Typography
                  sx={{
                    display: "inline",
                    color: "#0051C4",
                  }}
                  color="#FF403E">
                  Privacy Policy
                </Typography>
                .
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={4}>
            <Button
              type="submit"
              sx={{
                textTransform: "capitalize",
                background: "linear-gradient(45deg, #FF403E, #FF8145)",
                color: "#fff",
                borderRadius: 10,
                py: 2,
                px: 5,
                mt: { xs: 2, lg: 0 },
                fontWeight: 700,
                whiteSpace: "pre",
              }}>
              Contact sales
            </Button>
          </Grid>
        </Grid>
        <Typography
          color="#919B9B"
          display="flex"
          justifyContent="end"
          gap={1}
          mr={1}
          mt={2}>
          You Have account
          <Link
            style={{
              color: "#FF403E",
            }}
            href="/login">
            Login
          </Link>
        </Typography>
      </form>
    </Box>
  );
};

export default UserSignup;
