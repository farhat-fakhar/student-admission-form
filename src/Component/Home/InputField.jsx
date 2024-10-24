import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const InputField = ({ label, defaultValue, required = false }) => {
  return (
    <Box
      component="form"
      sx={{
        backgroundColor: "transparent",
        color: "#2E0249",
        width: "100%",
        
        "& .MuiTextField-root": {
          m: 1,
          "& fieldset": {
            borderColor: "#A91079",width: "100%" // Set the border color
          },
          "&:hover fieldset": {
            borderColor: "white", // Set the border color on hover
          },
          "&.Mui-focused fieldset": {
            borderColor: "white", // Set the border color when focused
          },
          "& input": {
            color: "#EEEEEE", // Input text color
          },
          "& label": {
            color: "#EEEEEE", // Label color
          },
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required={required}
        id="outlined-required"
        label={label}
        defaultValue={defaultValue}
        InputLabelProps={{
          style: { color: "#EEEEEE" }, // Label color
        }}
        InputProps={{
          style: { color: "#EEEEEE" }, // Input text color
          disableUnderline: true, // Remove underline
        }}
      />
    </Box>
  );
};

export default InputField;
