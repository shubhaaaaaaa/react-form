import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useField } from "formik";

export const InputElement = ({ label, type, placeholder, name }) => {
  const [field] = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if (name === "password" || name === "repassword") {
    return (
      <TextField
        {...field}
        size="small"
        variant="outlined"
        placeholder={placeholder}
        label={label}
        type={showPassword ? "text" : "password"}
        name={name}
        fullWidth
        slotProps={{
          inputLabel: { shrink: true },
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <IconButton
                  onClick={handleClickShowPassword}
                  sx={{ color: "gray" }}>
                  {showPassword ? (
                    <VisibilityOff sx={{ color: "gray" }} />
                  ) : (
                    <Visibility sx={{ color: "gray" }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    );
  }

  return (
    <TextField
      {...field}
      size="small"
      variant="outlined"
      placeholder={placeholder}
      label={label}
      type={type}
      name={name}
      fullWidth
      slotProps={{ inputLabel: { shrink: true } }}
    />
  );
};
