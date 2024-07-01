import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import AxiosInstance from "../components/axios/AxiosInstance";
import { FormHeader } from "../components/form/header";
import { InputBox } from "../components/form/input";
import { FormLabel } from "../components/form/label";
import { FormButton } from "../components/form/button";
import { useState } from "react";

export function PasswordReset() {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useParams();
  console.log(token);

  const [showMessage, setShowMessage] = useState(false);

  const submission = (data: { password: any }) => {
    AxiosInstance.post(`api/password_reset/confirm/`, {
      password: data.password,
      token: token,
    }).then((response) => {
      setShowMessage(true);
      setTimeout(() => {
        navigate("/login");
      }, 6000);
    });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <FormHeader>Reset your password</FormHeader>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {showMessage ? (
            <div>
              <div className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm leading-6 text-white shadow-sm">
                <p className="my-2 justify-center text-center text-sm text-white">
                  Your password reset was successful, you will be directed to
                  login page...
                </p>
              </div>
            </div>
          ) : null}
          <form onSubmit={handleSubmit(submission)} className="space-y-6">
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
                <FormLabel htmlFor="password" isRequired={true}>
                  Confirm password
                </FormLabel>
              </div>
              <div className="mt-2">
                <InputBox
                  id="password"
                  name="password2"
                  type="password"
                  autoComplete="password"
                  required={true}
                  placeholder="Confirm password"
                  register={register}
                ></InputBox>
              </div>
            </div>

            <div>
              <FormButton
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Reset password
              </FormButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
