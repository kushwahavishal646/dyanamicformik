import React from "react";

import { FormikProps } from "formik";

import VKMultiselect from "../../../components/VKMultiselect";
import VKRadioGroup from "../../../components/VKRadioGroup";
import VKTextField from "../../../components/VKTextField";

interface IRadioOption {
  key: number;
  label: string;
  value?: string;
}

interface IInputLabelProps {
  shrink?: boolean;
}

export interface IFormikValidation {
  type: string;
  params: any[];
}

export interface IFieldFormikElement {
  initialValue: any;
  validationType?: "string" | "number" | "boolean";
  fieldValidation?: IFormikValidation[];
}

export interface IItem {
  label: string;
  name: string;
  fieldtype: string;
  id: string;
  type?: string;
  margin?: "none" | "normal" | "dense" | undefined;
  InputLabelProps?: IInputLabelProps;
  inputProps?: {
    step?: number;
    maxLength?: number;
  };
  disabled?: boolean;
  fullWidth?: boolean;
  autoFocus?: boolean;
  options?: IRadioOption[];
  isMultiSelect?: boolean;
  sx?: any;
}

export interface IInputProps {
  key: string;
  item: IItem;
  renderCondition?: string;
  onSelectAction?: string[];
  fieldFormikElement?: IFieldFormikElement;
}

export interface ICta {
  title: string;
  css: Object;
}

export interface IConfig {
  configFields: IInputProps[];
  cta: ICta;
  rootFormCss?: Object;
  inputFormCss?: Object;
}

export interface IFormElementsProps extends IInputProps {
  formikData: FormikProps<Record<string, any>>;
}

const FormElements: React.FunctionComponent<IFormElementsProps> = (props) => {
  const formComponent: Record<string, JSX.Element> = {
    text: <VKTextField {...props} />,
    radio: <VKRadioGroup {...props} />,
    multiselect: <VKMultiselect {...props} />,
  };
  return <>{formComponent[props.item.fieldtype]}</>;
};

export default FormElements;
