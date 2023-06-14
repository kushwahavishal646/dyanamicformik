import React from "react";

import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

import { IFormElementsProps } from "../../features/configRendering/FormElements";

const VKRadioGroup: React.FunctionComponent<IFormElementsProps> = (props) => {
  return (
    <>
      <h5>{props.item.label}</h5>
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
    </>
  );
};

export default VKRadioGroup;
