/** @format */
"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import InputFields from "../common/InputFields";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { usePathname } from "next/navigation";

const schema = yup
  .object({
    fullName: yup.string().required("Name is required"),
    phone: yup.string().required("Phone is required"),
    email: yup.string().required("Email is required"),
  })
  .required();

type FormData = {
  fullName: string;
  phone: number;
  email: string;
};

const TrialForm: React.FC = () => {
  const usePath = usePathname();

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
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    if (!data) {
      toast.error("Invalid activity");
    }
    toast.success("Form submitted successfully");
  };
  return (
    <Box
      bgcolor="#FFFFFF"
      boxShadow={2}
      borderRadius={5}
      my={5}
      mx={{ xs: 0, sm: 3 }}
      p={{ xs: 2, sm: 5 }}>
      <Typography
        color="#0051C4"
        variant="h4"
        display="flex"
        fontWeight={700}
        alignItems="end">
        <Typography
          color="black"
          variant="h4"
          fontWeight={700}
          mr={2}>
          $97
        </Typography>
        $49
        <Typography variant="body1">/monthly</Typography>
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputFields
          type="text"
          name="fullName"
          label="Full Name"
          placeholder="name"
          errors={errors}
          control={control}
        />
        <InputFields
          type="number"
          name="phone"
          label="Phone"
          placeholder="mobile"
          errors={errors}
          control={control}
        />
        <InputFields
          type="text"
          name="email"
          label="Email"
          placeholder="email"
          errors={errors}
          control={control}
        />
        <Button
          fullWidth
          sx={{
            background:
              usePath === "/home"
                ? "#454238 !important"
                : "linear-gradient(45deg, #FF403E, #FF8145)",
            color: "#fff",
            borderRadius: 1,
            py: 2,
            mt: 2,
            fontWeight: 700,
          }}
          type="submit">
          Start Free Trail
        </Button>
        <Box
          m={2}
          textAlign="center">
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
                color: usePath === "/home" ? "#454238" : "#0051C4",
              }}>
              Terms of services
            </Typography>{" "}
            &{" "}
            <Typography
              sx={{
                display: "inline",
                color: usePath === "/home" ? "#454238" : "#0051C4",
              }}
              color="primary">
              Privacy Policy
            </Typography>
            .
          </Typography>
        </Box>
      </form>
    </Box>
  );
};

export default TrialForm;
