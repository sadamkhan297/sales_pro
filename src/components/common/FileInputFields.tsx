/** @format */

import { Box, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Controller } from "react-hook-form";

type InputFieldProps = {
  errors: any;
  control: any;
  name: string;
  type: any;
  setSelectedFile: any;
  setImageUrl: any;
};

const FileInputFields = ({
  control,
  errors,
  type,
  name,
  setSelectedFile,
  setImageUrl,
}: InputFieldProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      setSelectedFile(selectedFile); // Store the selected file in state
      const objectUrl = URL.createObjectURL(selectedFile);
      setImageUrl(objectUrl);
      console.log("Selected File:", selectedFile); // Log the selected file
    } else {
      console.log("No file selected");
    }
  };
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      my={1}>
      <Controller
        name={name}
        control={control}
        rules={{ required: "" }}
        render={({ field }) => (
          <>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="contained-button-file"
              type={type}
              onChange={(e) => {
                field.onChange(e.target.files);
                handleFileChange(e); // Call the handleFileChange function
              }}
            />
            <Box
              sx={{
                border: "1px solid #E1E1E1",
                borderRadius: 1,
                textAlign: "center",
              }}>
              <label htmlFor="contained-button-file">
                <Box sx={{ cursor: "pointer", py: 1 }}>
                  <Image
                    src="/images/AttactmentImg.svg"
                    alt="Attactment"
                    width={150}
                    height={100}
                  />
                </Box>
              </label>
            </Box>
          </>
        )}
      />
      {errors.file && <p>{errors.file.message}</p>}
    </Box>
  );
};

export default FileInputFields;
