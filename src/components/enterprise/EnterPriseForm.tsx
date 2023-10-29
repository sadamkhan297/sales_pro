/** @format */
"use client";
import * as yup from "yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Typography, Button, Grid } from "@mui/material";
import InputFields from "../common/InputFields";
import FileInputFields from "../common/FileInputFields";
import Image from "next/image";

const schema = yup
  .object({
    fullName: yup.string().required("Name is required"),
    phone: yup.string().required("Phone is required"),
    email: yup.string().required("Email is required"),
    applying: yup.string().required("Field is required"),
    SalesPro: yup.string().required("Field is required"),
    yearly: yup.string().required("Field is required"),
    // file: yup.string().required("File is required"),
  })
  .required();

type FormData = {
  fullName: string;
  phone: number;
  email: string;
  applying: string;
  SalesPro: string;
  yearly: string;
  // file: FileList | null;
};

const EnterPriseForm: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

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
      phone: undefined,
      email: "",
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);

    if (!data && selectedFile) {
      console.log("File URL:", URL.createObjectURL(selectedFile)); // Log the file URL
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
      mx={{ xs: 0, md: 3 }}
      p={{ xs: 2, sm: 5 }}>
      <Typography
        sx={{
          fontSize: { xs: "1.5rem", md: "2.2vw" },
        }}
        color="black"
        fontWeight={700}>
        Enterprise User Registration
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          pt={2}
          spacing={{ xs: 0, lg: 2 }}>
          <Grid
            item
            pt="0 !important"
            xs={12}
            lg={6}>
            <InputFields
              type="text"
              name="fullName"
              label="Full Name"
              placeholder="name"
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
              label="Phone"
              placeholder="mobile"
              errors={errors}
              control={control}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={{ xs: 0, lg: 2 }}>
          <Grid
            pt="0 !important"
            item
            xs={12}
            lg={6}>
            <InputFields
              type="email"
              name="email"
              label="Email"
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
              type="text"
              name="applying"
              label="What role are you applying for?"
              placeholder="e.g. Project Manager"
              errors={errors}
              control={control}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={{ xs: 0, lg: 2 }}>
          <Grid
            item
            pt="0 !important"
            xs={12}
            lg={6}>
            <InputFields
              type="text"
              name="SalesPro"
              label="Where did you hear about SalesPro Direct?"
              placeholder="e.g. Facebook"
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
              type="text"
              name="yearly"
              label="What is your ideal yearly wage?"
              placeholder="e.g $10000"
              errors={errors}
              control={control}
            />
          </Grid>
        </Grid>
        <Box>
          <FileInputFields
            errors={errors}
            control={control}
            name="file"
            type="file"
            setSelectedFile={setSelectedFile}
            setImageUrl={setImageUrl}
          />
        </Box>
        <Box>
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="Selected File"
              width={100}
              height={50}
            />
          )}
        </Box>
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
                    color: "#0051C4",
                  }}>
                  Terms of services
                </Typography>{" "}
                &{" "}
                <Typography
                  sx={{
                    display: "inline",
                    color: "#0051C4",
                  }}
                  color="primary">
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
      </form>
    </Box>
  );
};

export default EnterPriseForm;
