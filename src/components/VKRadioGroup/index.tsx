import React from "react";

import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";

import useStyles from "./styles";
import { IFormElementsProps } from "../../features/configRendering/FormElements";

const VKRadioGroup: React.FunctionComponent<IFormElementsProps> = (props) => {
  const classes = useStyles();

  const handleFieldBlur = () =>
    props.formikData.setFieldTouched(props.item.name);

  return (
    <>
      <h5>{props.item.label}</h5>
      <RadioGroup
        aria-label={props.item.name}
        name={props.item.name}
        value={eval(`props.formikData.values.${props.item.name}`) ?? ""}
        onChange={(event) =>
          props.formikData.setFieldValue(props.item.name, event.target.value)
        }
        onBlur={handleFieldBlur}
      >
        {props.item.options?.map((option) => (
          <FormControlLabel
            key={option.key}
            value={option.value}
            control={<Radio color="primary" />}
            label={option.label}
          />
        ))}
      </RadioGroup>
      {!!eval(`props.formikData.errors.${props.item.name}`) && (
        <Typography sx={[classes.text, classes.error]}>
          {eval(`props.formikData.errors.${props.item.name}`)}
        </Typography>
      )}
    </>
  );
};

export default VKRadioGroup;
