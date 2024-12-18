import React from "react";
import { FormLabel, FormControl, TextField } from "@mui/material";
import { useField } from "formik";

// import { Balloon } from "../../ckeditor/Balloon.js";

export const TextareaElement = ({ name }) => {
  const [field] = useField(name);
  
  return (
    <FormControl fullWidth>
      <FormLabel sx={{ fontSize: "0.7rem", paddingBottom: "10px" }}>
        Tell us more about yourself
      </FormLabel>
      {/* <Balloon name={name} /> */}
      <TextField
        {...field}
        size="small"
        variant="outlined"
        name={name}
        multiline
        fullWidth
        sx={{ borderRadius: "8px", padding: "8px" }}
      />
    </FormControl>
  );
};
