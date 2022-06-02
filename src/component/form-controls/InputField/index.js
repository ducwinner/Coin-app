import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function InputField(props) {
  const { form, name, label, disabled } = props;
  return (
    <Controller name={name} control={form.control}>
      <TextField fullWidth />;
    </Controller>
  );
}

export default InputField;
