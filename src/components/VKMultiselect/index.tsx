import React from "react";

import {
  Box,
  Chip,
  FormControl,
  FormLabel,
  Input,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

import useStyles from "./styles";
import { IFormElementsProps } from "../../features/configRendering/FormElements";

const VKMultiselect: React.FunctionComponent<IFormElementsProps> = (props) => {
  const classes = useStyles();
  const { formikData, item } = props;

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleFieldBlur = () => formikData.setFieldTouched(item.name);

  const handleChange = (event: SelectChangeEvent<string | string[]>) => {
    const selectedValues = item.isMultiSelect
      ? (event.target.value as string[])
      : (event.target.value as string);
    if (props.onSelectAction?.length !== 0) {
      props.onSelectAction?.forEach((selectAction) => {
        eval(`${selectAction}`);
      });
    }
    return formikData.setFieldValue(item.name, selectedValues);
  };

  const renderValue = (selected: string[] | string) => {
    if (item.isMultiSelect) {
      return (
        <Box sx={classes.chips}>
          {(selected as string[])?.map((value: string) => (
            <Chip key={value} label={value} />
          ))}
        </Box>
      );
    }
    return selected as string;
  };

  return (
    <Box>
      <FormControl sx={(classes.formControl, item.sx)}>
        <FormLabel id="multiple-select-label">{item.label}</FormLabel>
        <Select
          labelId={`label-${item.id}`}
          id={item.id}
          multiple={item.isMultiSelect}
          value={formikData.values[item.name] ?? (item.isMultiSelect ? [] : "")}
          onChange={handleChange}
          onBlur={handleFieldBlur}
          input={<Input id={`select-chip-${item.id}`} />}
          renderValue={renderValue}
          MenuProps={MenuProps}
          disabled={item.disabled}
        >
          {item.options?.map((option) => (
            <MenuItem key={option.key} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {!!formikData.touched[item.name] && !!formikData.errors[item.name] && (
        <Typography sx={[classes.text, classes.error]}>{`${
          formikData.errors[item.name]
        }`}</Typography>
      )}
    </Box>
  );
};

export default VKMultiselect;
