import React from "react";

import { TextField, Typography } from "@mui/material";

import useStyles from "./styles";
import { IFormElementsProps } from "../../features/configRendering/FormElements";

const VKTextField: React.FunctionComponent<IFormElementsProps> = (props) => {
  const classes = useStyles();
  const { formikData, item } = props;

  const handleFieldBlur = () => formikData.setFieldTouched(item.name);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    return formikData.setFieldValue(item.name, event.target.value);
  };

  return (
    <>
      <TextField
        {...item}
        value={formikData.values[item.name] ?? ""}
        onChange={handleChange}
        onBlur={handleFieldBlur}
        error={formikData.touched[item.name] && !!formikData.errors[item.name]}
        sx={{ marginY: 2 }}
      />
      {!!formikData.touched[item.name] && !!formikData.errors[item.name] && (
        <Typography sx={[classes.text, classes.error]}>
          {`${formikData.errors[item.name]}`}
        </Typography>
      )}
    </>
  );
};

export default React.memo(VKTextField);
