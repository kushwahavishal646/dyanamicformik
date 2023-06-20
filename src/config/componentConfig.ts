import { IInputProps } from "../features/configRendering/FormElements";

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

export const configFields: IInputProps[] = [
  {
    key: "email",
    item: {
      label: "Email Address",
      name: "email",
      fieldtype: "text",
      id: "email",
      margin: "dense",
      type: "email",
      fullWidth: true,
      autoFocus: true,
    },
  },
  {
    key: "phone",
    item: {
      label: "Phone Number",
      name: "phone",
      fieldtype: "text",
      id: "phone",
      margin: "dense",
      type: "tel",
      fullWidth: true,
      inputProps: {
        maxLength: 10,
      },
    },
  },
  {
    key: "time",
    item: {
      label: "Time",
      name: "time",
      fieldtype: "text",
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
    },
  },
  {
    key: "foodService",
    item: {
      label: "Beachfront Food Service",
      name: "foodService",
      fieldtype: "radio",
      id: "foodService",
      options: yesNoOptions,
    },
  },
  {
    key: "cocktailService",
    item: {
      label: "Beachfront Cocktail Service",
      name: "cocktailService",
      fieldtype: "radio",
      id: "cocktailService",
      options: yesNoOptions,
    },
  },
  {
    key: "accommodations",
    item: {
      label: "Accommodations",
      name: "accommodations",
      fieldtype: "multiselect",
      id: "accommodations",
      options: accommodationList,
    },
  },
];
