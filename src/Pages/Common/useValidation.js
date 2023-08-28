import { useCallback, useState } from 'react';

export default function useValidation(state, mandarotyFields, customValidator) {
  const [errors, setErrors] = useState({});
  const handleSubmit = useCallback(
    (submit) => {
      return (e) => {
        e.preventDefault();
        const emptyFields = [];
        for (const f of mandarotyFields) {
          if (!state[f]) {
            emptyFields.push(f);
          }
        }

        if (!emptyFields.length) {
          return () => submit(e);
        }

        const mandatoryFieldsErrors = emptyFields.reduce(
          (acc, k) => ({ ...acc, [k]: 'The field should have a value' }),
          {}
        );

        setErrors({
          ...mandatoryFieldsErrors,
          ...(customValidator?.(state) || {}),
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
