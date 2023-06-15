import React, { useState } from "react";

import { Box, SelectChangeEvent } from "@mui/material";

import FormElements from "./FormElements";
import useStyles from "./styles";
import { configFields } from "../../config/componentConfig";

const ConfigRendering: React.FunctionComponent = () => {
  const classes = useStyles();

  const [fields, setFields] = useState<Record<string, any>>({});

  const handleFieldChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<any>,
    type: string
  ) => {
    setFields({ ...fields, [type]: event.target.value });
  };

  return (
    !!configFields && (
      <Box sx={classes.container}>
        {configFields.map((item, index) => (
          <FormElements
            {...item}
            key={`${index}-${item.key}`}
            fields={fields}
            handleFieldChange={handleFieldChange}
          />
        ))}
      </Box>
    )
  );
};

export default ConfigRendering;
