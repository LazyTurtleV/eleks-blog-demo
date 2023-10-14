import { useCallback, useState } from 'react';

export default function useValidation(state: any, mandarotyFields: any, customValidator?: any) {
  const [errors, setErrors] = useState<any>({});
  const handleSubmit = useCallback(
    (submit: any) => {
      return (e: any) => {
        e.preventDefault();
        const emptyFields = [];
        for (const f of mandarotyFields) {
          if (!state[f]) {
            emptyFields.push(f);
          }
        }

        const customValidation = customValidator?.(state) || {};

        if (!emptyFields.length && !Object.keys(customValidation).length) {
          submit(e);
        }

        const mandatoryFieldsErrors = emptyFields.reduce(
          (acc, k) => ({ ...acc, [k]: 'The field should have a value' }),
          {}
        );

        setErrors({
          ...mandatoryFieldsErrors,
          ...customValidation,
        });
      };
    },
    [state, customValidator, mandarotyFields]
  );
  return {
    handleSubmit,
    errors,
  };
}
