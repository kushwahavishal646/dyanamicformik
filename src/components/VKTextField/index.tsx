import React from "react";

import { TextField } from "@mui/material";

import { IFormElementsProps } from "../../features/configRendering/FormElements";

const VKTextField: React.FunctionComponent<IFormElementsProps> = (props) => {
  const handleFieldBlur = () =>
    props.formikData.setFieldTouched(props.item.name);

  return (
    <TextField
      {...props.item}
      value={eval(`props.formikData.values.${props.item.name}`) ?? ""}
      onChange={(event) =>
        props.formikData.setFieldValue(props.item.name, event.target.value)
      }
      onBlur={handleFieldBlur}
      error={
        eval(`props.formikData.touched.${props.item.name}`) &&
        !!eval(`props.formikData.errors.${props.item.name}`)
      }
      helperText={
        eval(`props.formikData.touched.${props.item.name}`)
          ? eval(`props.formikData.errors.${props.item.name}`)
          : ""
      }
      sx={{ marginY: 2 }}
    />
  );
};

export default React.memo(VKTextField);
