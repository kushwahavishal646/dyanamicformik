import React, { useEffect, useState } from "react";

import { Box, Button } from "@mui/material";
import { FormikProps, useFormik } from "formik";
import * as yup from "yup";

import FormElements from "./FormElements";
import useStyles from "./styles";
import { configFields, screenConfig } from "../../config/componentConfig";
import createYupSchema from "../../utils/yup";

const ConfigRendering: React.FunctionComponent = () => {
  const classes = useStyles();

  const [fields, setFields] = useState<Record<string, any>>({});
  const [validationSchema, setValidationSchema] = useState<any>();

  useEffect(() => {
    const formikFields: Record<string, any> = {};

    screenConfig.configFields.forEach((item) => {
      if (item.item.name && item.fieldFormikElement) {
        formikFields[item.item.name] = item.fieldFormikElement?.initialValue;
      }
    });
    const yupSchema = configFields.reduce(
      createYupSchema,
      {} as Record<string, any>
    );
    setValidationSchema(yup.object().shape(yupSchema));
    setFields(formikFields);
  }, [configFields]);

  const formikData: FormikProps<Record<string, any>> = useFormik({
    initialValues: fields ?? {},
    validationSchema: validationSchema,
    onSubmit: () => {
      //TODO: Update submit handler with navigation
    },
  });

  return (
    !!screenConfig.configFields && (
      <Box sx={classes.container}>
        {screenConfig.configFields.map(
          (item, index) =>
            (item.renderCondition === undefined ||
              eval(item.renderCondition)) && (
              <FormElements
                {...item}
                key={`${index}-${item.key}`}
                formikData={formikData}
              />
            )
        )}
        {!!screenConfig.cta && (
          <Button
            variant="contained"
            disabled={!formikData.isValid || !formikData.dirty}
            sx={screenConfig.cta.css}
          >
            {screenConfig.cta.title}
          </Button>
        )}
      </Box>
    )
  );
};

export default ConfigRendering;
