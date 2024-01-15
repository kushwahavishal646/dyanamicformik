import { IConfig, ICta, IInputProps } from "../configRendering/FormElements";

const customerTypeList = [
  { key: 1, label: "Retailer" },
  { key: 2, label: "Dealer" },
];

const professionList = [
  { key: 1, label: "Architect" },
  { key: 2, label: "Manager" },
];

const languageList = [
  { key: 1, label: "English" },
  { key: 2, label: "Hindi" },
];

const sourceOfLeadList = [
  { key: 1, label: "option 1" },
  { key: 2, label: "option 2" },
];

const mappedStoreList = [
  { key: 1, label: "Sarjapur Store" },
  { key: 2, label: "Kalamboli Store" },
];

export const configFields: IInputProps[] = [
  {
    key: "customerType",
    item: {
      label: "Customer Type",
      name: "customerType",
      fieldtype: "multiselect",
      id: "customerType",
      options: customerTypeList,
      sx: { width: 450 },
    },
    onSelectAction: ["formikData.values"],
    fieldFormikElement: {
      initialValue: "",
      validationType: "string",
      fieldValidation: [
        { type: "required", params: ["Customer Type is required"] },
      ],
    },
  },
  {
    key: "mobileNumber",
    item: {
      label: "Mobile Number",
      name: "mobileNumber",
      fieldtype: "text",
      id: "mobileNumber",
      margin: "dense",
      type: "tel",
      fullWidth: true,
      inputProps: {
        maxLength: 10,
      },
      disabled: true,
      sx: { width: 450 },
    },
    fieldFormikElement: {
      initialValue: "9876543275",
      validationType: "string",
      fieldValidation: [
        {
          type: "matches",
          params: [/^[6-9][0-9]{9}$/, "Invalid Mobile Number"],
        },
        { type: "required", params: ["Mobile Number is required"] },
      ],
    },
  },
  {
    key: "influencerName",
    item: {
      label: "Influencer Name",
      name: "influencerName",
      fieldtype: "text",
      id: "influencerName",
      type: "text",
      fullWidth: true,
      autoFocus: true,
      sx: { width: 450 },
    },
    fieldFormikElement: {
      initialValue: "",
      validationType: "string",
      fieldValidation: [
        { type: "required", params: ["Influencer Name is required"] },
      ],
    },
  },
  {
    key: "profession",
    item: {
      label: "Profession",
      name: "profession",
      fieldtype: "multiselect",
      id: "profession",
      options: professionList,
      sx: { width: 450 },
    },
    onSelectAction: ["formikData.values"],
    fieldFormikElement: {
      initialValue: "",
      validationType: "string",
      fieldValidation: [
        { type: "required", params: ["Profession is required"] },
      ],
    },
  },
  {
    key: "language",
    item: {
      label: "Language (optional)",
      name: "language",
      fieldtype: "multiselect",
      id: "language",
      options: languageList,
      sx: { width: 450 },
    },
    onSelectAction: ["formikData.values"],
    fieldFormikElement: {
      initialValue: "",
    },
  },
  {
    key: "sourceOfLead",
    item: {
      label: "Source of Lead",
      name: "sourceOfLead",
      fieldtype: "multiselect",
      id: "sourceOfLead",
      options: sourceOfLeadList,
      sx: { width: 450 },
    },
    onSelectAction: ["formikData.values"],
    fieldFormikElement: {
      initialValue: "",
      validationType: "string",
      fieldValidation: [
        { type: "required", params: ["Source of Lead is required"] },
      ],
    },
  },
  {
    key: "mappedStore",
    item: {
      label: "Mapped Store (optional)",
      name: "mappedStore",
      fieldtype: "multiselect",
      id: "mappedStore",
      options: mappedStoreList,
      sx: { width: 450 },
    },
    onSelectAction: ["formikData.values"],
    fieldFormikElement: {
      initialValue: "",
    },
  },
  {
    key: "remarks",
    item: {
      label: "Remarks (optional)",
      name: "remarks",
      fieldtype: "text",
      id: "remarks",
      type: "text",
      fullWidth: true,
      sx: { width: 950 },
    },
    fieldFormikElement: {
      initialValue: "",
    },
  },
];

const cta: ICta = {
  title: "Submit",
  css: {
    alignSelf: "center",
    width: 70,
    backgroundColor: "#F15927",
  },
};

const rootFormCss = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  margin: "0px 30px 0px 150px",
};

const inputFormCss = {
  display: "flex",
  flex: 1,
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 10,
  height: 600,
  margin: "10px 20px 100px 20px",
};

export const imConfig: IConfig = {
  configFields: configFields,
  cta: cta,
  rootFormCss: rootFormCss,
  inputFormCss: inputFormCss,
};
