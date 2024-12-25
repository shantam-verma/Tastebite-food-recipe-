import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .min(3, 'Password must be at least 8 characters')
    .required('Password is required'),
});
