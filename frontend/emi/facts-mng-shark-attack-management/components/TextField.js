import React from "react";
import { TextField } from "@material-ui/core";

const TextFieldMui = ({
  errors,
  touched,
  name,
  label,
  multiline = false,
  type = "text",
  value,
  onChange,
  canWrite,
}) => {
  return (
    <TextField
      className="mt-8 mb-16"
      helperText={errors[name] && touched[name] && errors[name]}
      error={errors[name] && touched[name]}
      id={name}
      name={name}
      onChange={onChange(name)}
      onBlur={onChange(name)}
      label={label}
      type={type}
      value={value}
      multiline={multiline}
      //rows={5}
      variant="outlined"
      fullWidth
      InputProps={{
        readOnly: !canWrite(),
      }}
    />
  );
};

export default TextFieldMui;
