import React, { useEffect, useState } from "react";

import { Box, Button } from "@mui/material";
import { FormikProps, useFormik } from "formik";
import * as yup from "yup";

import FormElements, { IConfig } from "./FormElements";
import useStyles from "./styles";
import { screenConfig } from "../../config/componentConfig";
import createYupSchema from "../../utils/yup";

interface IConfigRendering {
  config?: IConfig;
}

const ConfigRendering: React.FunctionComponent<IConfigRendering> = (props) => {
  const classes = useStyles();

  const [fields, setFields] = useState<Record<string, any>>({});
  const [validationSchema, setValidationSchema] = useState<any>();
  const formConfig = props.config ?? screenConfig;

  useEffect(() => {
    const formikFields: Record<string, any> = {};

    formConfig.configFields.forEach((item) => {
      if (item.item.name && item.fieldFormikElement) {
        formikFields[item.item.name] = item.fieldFormikElement?.initialValue;
      }
    });
    const yupSchema = formConfig.configFields.reduce(
      createYupSchema,
      {} as Record<string, any>
    );
    setValidationSchema(yup.object().shape(yupSchema));
    setFields(formikFields);
  }, [formConfig.configFields]);

  useEffect(() => {
    formikData.setValues(fields);
  }, [fields]);

  const formikData: FormikProps<Record<string, any>> = useFormik({
    validateOnMount: true,
    initialValues: {},
    validationSchema: validationSchema,
    onSubmit: () => {
      //TODO: Update submit handler with navigation
    },
  });

  return (
    !!formConfig.configFields && (
      <Box sx={(classes.container, props.config?.rootFormCss)}>
        <Box sx={props.config?.inputFormCss}>
          {formConfig.configFields.map(
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
        </Box>
        {!!formConfig.cta && (
          <Button
            variant="contained"
            disabled={!(formikData.isValid && formikData.dirty)}
            sx={formConfig.cta.css}
          >
            {formConfig.cta.title}
          </Button>
        )}
      </Box>
    )
  );
};

export default ConfigRendering;
