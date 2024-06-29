import { SocialLogin } from "./social-button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AxiosInstance from "../axios/AxiosInstance";
import { FormHeader } from "../form/header";
import { InputBox } from "../form/input";
import { FormLabel } from "../form/label";
import { FormButton } from "../form/button";

export function LoginForm() {
  const { handleSubmit } = useForm();

  const navigate = useNavigate();

  const submission = (data) => {
    AxiosInstance.post(`login/`, {
      email: data.email,
      password: data.password,
    })
      .then((response) => {
        console.log(response);
        localStorage.setItem("Token", response.data.token);
        navigate(-1);
      })
      .catch((error) => {
        console.error("Error during login", error);
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <FormHeader>Login to your account</FormHeader>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(submission)} className="space-y-6">
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
                ></InputBox>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-between">
                  <FormLabel htmlFor="password" isRequired={true}>
                    Password
                  </FormLabel>
                </div>
                <div className="text-sm">
                  <a
                    href="login"
                    className="pl-2 font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <InputBox
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    required={true}
                    placeholder="Password"
                  ></InputBox>
                </div>
              </div>
            </div>

            <div>
              <FormButton
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </FormButton>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create an account
            </Link>
            <div className="flex w-full items-center space-x-4 mt-10 mb-10">
              <div className="flex-1 border-b border-gray-200" />
              <span className="flex items-center justify-center text-gray-400 text-lg font-normal leading-7 px-5">
                OR
              </span>
              <div className="flex-1 border-b border-gray-200" />
            </div>
            <SocialLogin></SocialLogin>
          </p>
        </div>
      </div>
    </>
  );
}
