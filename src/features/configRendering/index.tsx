import React, { useState } from "react";

import { Box, SelectChangeEvent } from "@mui/material";

import FormElements from "./FormElements";
// import { useTranslation } from "react-i18next";

// import {  } from "@mui/material";

// import useStyles from "./styles";

const yesNoOptions = [
  {
    key: 1,
    value: "yes",
    label: "Yes",
  },
  {
    key: 2,
    value: "no",
    label: "No",
  },
];

const accommodationList = [
  { key: 1, label: "Towels" },
  { key: 2, label: "Umbrella" },
  { key: 3, label: "Chairs" },
  { key: 4, label: "Tables" },
  { key: 5, label: "Surfboard" },
  { key: 6, label: "Boogie Board" },
  { key: 7, label: "Canopy Tent" },
  { key: 8, label: "Beach Cruiser Bike" },
];

const ConfigRendering: React.FunctionComponent = () => {
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
    <Box sx={{ width: 500 }}>
      <>
        <FormElements
          key="email"
          item={{
            label: "Email Address",
            name: "email",
            fieldType: "text",
            id: "email",
            margin: "dense",
            type: "email",
            fullWidth: true,
            autoFocus: true,
          }}
          fields={fields}
          handleFieldChange={handleFieldChange}
        />
        <FormElements
          key="phone"
          item={{
            label: "Phone Number",
            name: "phone",
            fieldType: "text",
            id: "phone",
            margin: "dense",
            type: "tel",
            fullWidth: true,
          }}
          fields={fields}
          handleFieldChange={handleFieldChange}
        />
        <FormElements
          key="time"
          item={{
            label: "Time",
            name: "time",
            fieldType: "text",
            id: "time",
            margin: "dense",
            type: "time",
            fullWidth: true,
            InputLabelProps: {
              shrink: true,
            },
            inputProps: {
              step: 1800,
            },
          }}
          fields={fields}
          handleFieldChange={handleFieldChange}
        />
      </>
      <>
        <h3 className="subtitle">Premium Amenities</h3>
        <FormElements
          key="foodService"
          item={{
            label: "Beachfront Food Service",
            name: "foodService",
            fieldType: "radio",
            id: "foodService",
            options: yesNoOptions,
          }}
          fields={fields}
          handleFieldChange={handleFieldChange}
        />
        <FormElements
          key="cocktailService"
          item={{
            label: "Beachfront Cocktail Service",
            name: "cocktailService",
            fieldType: "radio",
            id: "cocktailService",
            options: yesNoOptions,
          }}
          fields={fields}
          handleFieldChange={handleFieldChange}
        />
        <FormElements
          key="accommodations"
          item={{
            label: "Accommodations",
            name: "accommodations",
            fieldType: "multiselect",
            id: "accommodations",
            options: accommodationList,
          }}
          fields={fields}
          handleFieldChange={handleFieldChange}
        />
      </>
    </Box>
  );
};

export default ConfigRendering;
