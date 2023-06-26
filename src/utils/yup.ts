/*eslint import/namespace: ['error', { allowComputed: true }]*/
import * as yup from "yup";

import { IInputProps } from "../features/configRendering/FormElements";

const createYupSchema = (schema: Record<string, any>, config: IInputProps) => {
  const validationType = config.fieldFormikElement?.validationType ?? "string";
  const validations = config.fieldFormikElement?.fieldValidation ?? [];
  const key = config.key;

  if (!yup[validationType as keyof typeof yup]) {
    return schema;
  }

  if (yup[validationType as keyof typeof yup]) {
    let validator: yup.AnySchema = yup[validationType]() as any;

    validations.forEach((validation) => {
      const { params, type } = validation;

      if (!(type in validator)) {
        return;
      }

      if (type === "when") {
        const [conditionKey, whenProps] = params;
        const { is, then, otherwise } = whenProps;
        validator = validator.when(conditionKey, {
          is,
          then: (subValidator: yup.AnySchema) => {
            const [subValidation] = then;
            const subValidationType = subValidation.type as keyof yup.AnySchema;
            return (subValidator[subValidationType] as any)(
              ...subValidation.params
            );
          },
          otherwise: otherwise
            ? (subValidator: yup.AnySchema) => {
                const [subValidation] = otherwise;
                const subValidationType =
                  subValidation.type as keyof yup.AnySchema;
                return (subValidator[subValidationType] as any)(
                  ...subValidation.params
                );
              }
            : undefined,
        });
      } else {
        if (typeof validator[type as keyof yup.AnySchema] === "function") {
          validator = (validator[type as keyof yup.AnySchema] as Function)(
            ...params
          );
          validator = (validator as any)[type](...params) as yup.AnySchema;
        }
      }
    });
    (schema as any)[key] = validator;
  }
  return schema;
};

export default createYupSchema;
