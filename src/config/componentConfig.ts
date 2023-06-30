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
    fieldFormikElement: {
      initialValue: "",
      validationType: "string",
      fieldValidation: [
        {
          type: "email",
          params: ["Invalid email address"],
        },
        {
          type: "required",
          params: ["Email is required"],
        },
      ],
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
    fieldFormikElement: {
      initialValue: "",
      validationType: "string",
      fieldValidation: [
        {
          type: "matches",
          params: [/^[6-9][0-9]{9}$/, "Invalid phone number"],
        },
        { type: "required", params: ["Phone number is required"] },
      ],
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
    fieldFormikElement: {
      initialValue: "",
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
    fieldFormikElement: {
      initialValue: undefined,
      validationType: "string",
      fieldValidation: [{ type: "string", params: ["Option is required"] }],
    },
  },
  {
    key: "amount",
    renderCondition: `formikData.values?.foodService === "yes" `,
    item: {
      label: "Amount",
      name: "amount",
      fieldtype: "text",
      id: "amount",
      type: "number",
      fullWidth: true,
    },
    fieldFormikElement: {
      initialValue: "",
      validationType: "number",
      fieldValidation: [
        {
          type: "required",
          params: ["Amount is required"],
        },
        {
          type: "when",
          params: [
            "foodService",
            {
              is: "yes",
              then: [
                {
                  type: "min",
                  params: [200],
                },
              ],
              otherwise: [
                {
                  type: "min",
                  params: [100],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    key: "cocktailService",
    renderCondition: `formikData.values?.foodService === "yes" `,
    item: {
      label: "Beachfront Cocktail Service",
      name: "cocktailService",
      fieldtype: "radio",
      id: "cocktailService",
      options: yesNoOptions,
    },
    fieldFormikElement: {
      initialValue: undefined,
      validationType: "string",
      fieldValidation: [{ type: "string", params: ["Option is required"] }],
    },
  },
  {
    key: "accommodations",
    renderCondition: `formikData.values?.foodService === "yes" `,
    item: {
      label: "Accommodations",
      name: "accommodations",
      fieldtype: "multiselect",
      id: "accommodations",
      options: accommodationList,
    },
    fieldFormikElement: {
      initialValue: [],
      validationType: "string",
      fieldValidation: [{ type: "string", params: ["Option is required"] }],
    },
  },
];
