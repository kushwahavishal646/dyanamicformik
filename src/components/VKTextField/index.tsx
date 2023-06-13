import React from "react";

import { TextField } from "@mui/material";

import { IFormElementsProps } from "../../features/configRendering/FormElements";

const VKTextField: React.FunctionComponent<IFormElementsProps> = (props) => {
  return (
    <TextField
      {...props.item}
      name={props.item.name}
      value={props.fields[props.item.name] ?? ""}
      onChange={(event) => props.handleFieldChange(event, props.item.name)}
    />
  );
};

export default React.memo(VKTextField);
