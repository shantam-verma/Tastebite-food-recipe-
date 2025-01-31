'use client';
import React, { Fragment, useState } from 'react';
import { Formik, Form } from 'formik';
import { FormField } from './FormField';
import { LoginSchema } from '@/app/utils/shema';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { ActionButton } from '../ui/server/ActionButton';
import { signIn } from 'next-auth/react';
import { ErrorText } from './ErrorText';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      const result = await signIn('credentials', {
        username: values.username,
        password: values.password,
        redirect: false,
        callbackUrl: '/',
      });

      if (result?.error) {
        setIsError('Please enter correct credentials!');
        setIsLoading(false);
        resetForm();
      } else if (result?.ok) {
        window.location.href = '/';
        // router.push('/');
      }
    } catch (error) {
      setIsError('Login Failed. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-center text-center">
        <ActionButton className="login-with-google-btn cursor-not-allowed">
          Sign in with Google
        </ActionButton>
      </div>
      <div className="max-w-md mx-auto w-full">
        <Formik
          initialValues={{ username: 'foodie', password: 'Foodie4Life!' }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, setFieldTouched }) => (
            <Form className="space-y-4">
              <FormField
                name="username"
                type="text"
                label="Username"
                placeholder="Enter your username"
                onChange={(e) => {
                  handleChange(e);
                  setFieldTouched('username', '');
                  setIsError('');
                }}
              />
              <div className="relative">
                <FormField
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  placeholder="Enter your password"
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched('password', '');
                    setIsError('');
                  }}
                />
                {showPassword ? (
                  <AiOutlineEye
                    className="absolute right-2 top-[42px] z-10 cursor-pointer text-gray-500"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-[42px] z-10 cursor-pointer text-gray-500"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </div>
              {isError && <ErrorText>{isError}</ErrorText>}

              <ActionButton
                type="submit"
                className="w-full bg-btn-bg text-btn-text"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </ActionButton>
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>
  );
}
