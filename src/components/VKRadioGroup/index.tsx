import React from "react";

import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";

import useStyles from "./styles";
import { IFormElementsProps } from "../../features/configRendering/FormElements";

const VKRadioGroup: React.FunctionComponent<IFormElementsProps> = (props) => {
  const classes = useStyles();
  const { formikData, item } = props;

  const handleFieldBlur = () => {
    formikData.setFieldTouched(item.name);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formikData.setFieldValue(item.name, event.target.value);
  };

  return (
    <>
      <h5>{item.label}</h5>
      <RadioGroup
        aria-label={item.name}
        name={item.name}
        value={formikData.values[item.name] ?? ""}
        onChange={handleRadioChange}
        onBlur={handleFieldBlur}
      >
        {item.options?.map((option) => (
          <FormControlLabel
            key={option.key}
            value={option.value}
            control={<Radio color="primary" />}
            label={option.label}
          />
        ))}
      </RadioGroup>
      {!!formikData.touched[item.name] && !!formikData.errors[item.name] && (
        <Typography sx={[classes.text, classes.error]}>
          {`${formikData.errors[item.name]}`}
        </Typography>
      )}
    </>
  );
};

export default VKRadioGroup;
