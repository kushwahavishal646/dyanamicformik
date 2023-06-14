import React from "react";

import { SelectChangeEvent } from "@mui/material";

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

export interface IItem {
  label: string;
  name: string;
  fieldType: string;
  id: string;
  type?: string;
  margin?: "none" | "normal" | "dense" | undefined;
  InputLabelProps?: IInputLabelProps;
  inputProps?: {
    step?: number;
  };
  fullWidth?: boolean;
  autoFocus?: boolean;
  options?: IRadioOption[];
  sx?: object;
}

export interface IInputProps {
  key: string;
  item: IItem;
}

export interface IFormElementsProps extends IInputProps {
  fields: Record<string, any>;
  handleFieldChange: (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<any>,
    type: string
  ) => void;
}

const FormElements: React.FunctionComponent<IFormElementsProps> = (props) => {
  const formComponent: Record<string, JSX.Element> = {
    text: <VKTextField {...props} />,
    radio: <VKRadioGroup {...props} />,
    multiselect: <VKMultiselect {...props} />,
  };

  return <>{formComponent[props.item.fieldType]}</>;
};

export default FormElements;
