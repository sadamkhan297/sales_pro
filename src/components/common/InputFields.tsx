/** @format */

import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

type InputFieldProps = {
  errors: any;
  control: any;
  name: string;
  label: string;
  placeholder: string;
  type: undefined | string;
};

const InputFields: React.FC<InputFieldProps> = ({
  control,
  errors,
  name,
  label,
  placeholder,
  type,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      my={{ xs: 1, lg: 2 }}>
      <Typography
        textTransform='capitalize'
        variant="button"
        color="#454238"
        fontWeight={600}
        py={0.5}>
        {label}
      </Typography>
      <Controller
        name={name}
        control={control}
        rules={{
          required: "",
        }}
        render={({ field: { onChange, value } }) => (
          <TextField
            type={type}
            fullWidth
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />
        )}
      />
      {errors && errors[name] && (
        <Typography color="red">{errors[name].message}</Typography>
      )}
    </Box>
  );
};

export default InputFields;
