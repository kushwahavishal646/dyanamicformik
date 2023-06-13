import React from "react";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import useStyles from "./styles";
import { IFormElementsProps } from "../../features/configRendering/FormElements";

const VKRadioGroup: React.FunctionComponent<IFormElementsProps> = (props) => {
  const classes = useStyles();

  return (
    <FormControl component="fieldset" sx={classes.formControl}>
      <FormLabel component="legend">{props.item.label}</FormLabel>
      <RadioGroup
        aria-label={props.item.name}
        name={props.item.name}
        value={props.fields[props.item.name] ?? ""}
        onChange={(event) => props.handleFieldChange(event, props.item.name)}
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
    </FormControl>
  );
};

export default VKRadioGroup;
