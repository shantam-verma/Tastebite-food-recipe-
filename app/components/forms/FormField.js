import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Field } from 'formik';
import { Fragment } from 'react';
import { ErrorText } from './ErrorText';

export const FormField = ({ label, name, type, ...props }) => (
  <div className="space-y-2">
    <Label htmlFor={name} className="text-content">
      {label}
    </Label>
    <Field name={name}>
      {({ field, meta }) => (
        <Fragment>
          <Input
            {...field}
            {...props}
            id={name}
            type={type}
            className={`
              w-full 
              ${
                meta.touched && meta.error
                  ? 'border-red-500 dark:border-red-600 ring-red-500 dark:ring-red-600'
                  : 'dark:border-gray-600'
              }
            `}
          />
          {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
        </Fragment>
      )}
    </Field>
  </div>
);
