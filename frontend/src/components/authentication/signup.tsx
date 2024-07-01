import { useState } from "react";
import { useForm } from "react-hook-form";
import AxiosInstance from "../axios/AxiosInstance";
import { useNavigate } from "react-router-dom";
import { FormHeader } from "../form/header";
import { InputBox, DateInputBox } from "../form/input";
import { FormButton } from "../form/button";
import { FormLabel } from "../form/label";

export function SignupForm() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const [showMessage, setShowMessage] = useState(false);

  const submission = (data: {
    first_name: any;
    last_name: any;
    username: any;
    email: any;
    password: any;
    birthday: any;
  }) => {
    AxiosInstance.post(`signup/`, {
      first_name: data.first_name,
      last_name: data.last_name,
      username: data.username,
      email: data.email,
      password: data.password,
      birthday: data.birthday,
    })
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        setShowMessage(true);
        console.error("Error during login", error);
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <FormHeader>Create an account</FormHeader>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {showMessage ? (
            <div>
              <div className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm leading-6 text-white shadow-sm">
                <p className="my-2 justify-center text-center text-sm text-white">
                  Signup has failed, please try again.
                </p>
              </div>
            </div>
          ) : null}
          <form onSubmit={handleSubmit(submission)} className="space-y-6">
            <div>
              <FormLabel htmlFor="first_name" isRequired={true}>
                First Name
              </FormLabel>
              <div className="mt-2">
                <InputBox
                  id="first_name"
                  name="first_name"
                  type="text"
                  autoComplete="given-name"
                  required={true}
                  placeholder="First name"
                  register={register}
                ></InputBox>
              </div>
            </div>

            <div>
              <FormLabel htmlFor="last_name" isRequired={true}>
                Last Name
              </FormLabel>
              <div className="mt-2">
                <InputBox
                  id="last_name"
                  name="last_name"
                  type="text"
                  autoComplete="family-name"
                  required={true}
                  placeholder="Last name"
                  register={register}
                ></InputBox>
              </div>
            </div>

            <div>
              <FormLabel htmlFor="birthday" isRequired={true}>
                Birthday
              </FormLabel>
              <div className="mt-2">
                <DateInputBox
                  id="birthday"
                  name="birthday"
                  type="date"
                  autoComplete="bday"
                  required={true}
                  placeholder="dd/mm/yy"
                  register={register}
                ></DateInputBox>
              </div>
            </div>

            <div>
              <FormLabel htmlFor="email" isRequired={true}>
                Email address
              </FormLabel>
              <div className="mt-2">
                <InputBox
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required={true}
                  placeholder="Email address"
                  register={register}
                ></InputBox>
              </div>
            </div>

            <div>
              <FormLabel htmlFor="username" isRequired={true}>
                Username
              </FormLabel>
              <div className="mt-2">
                <InputBox
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="nickname"
                  required={true}
                  placeholder="Username"
                  register={register}
                ></InputBox>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <FormLabel htmlFor="password" isRequired={true}>
                  Password
                </FormLabel>
              </div>
              <div className="mt-2">
                <InputBox
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required={true}
                  placeholder="Password"
                  register={register}
                ></InputBox>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <FormLabel htmlFor="password2" isRequired={true}>
                  Repeat password
                </FormLabel>
              </div>
              <div className="mt-2">
                <InputBox
                  id="password2"
                  name="password2"
                  type="password"
                  autoComplete="password"
                  required={true}
                  placeholder="Repeat password"
                  register={register}
                ></InputBox>
              </div>
            </div>

            <div>
              <FormButton
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </FormButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
