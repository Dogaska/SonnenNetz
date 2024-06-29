import { useForm } from "react-hook-form";
import AxiosInstance from "../axios/AxiosInstance";
import { useNavigate } from "react-router-dom";
import { FormHeader } from "../form/header";
import { InputBox, DateInputBox } from "../form/input";
import { FormButton } from "../form/button";
import { FormLabel } from "../form/label";

export function SignupForm() {
  const navigate = useNavigate();

  const { handleSubmit } = useForm();

  const submission = (data) => {
    AxiosInstance.post(`signup/`, {
      first_name: data.first_name,
      last_name: data.last_name,
      username: data.username,
      email: data.email,
      password: data.password,
      birthday: data.birthday,
    }).then(() => {
      navigate("/login");
    });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <FormHeader>Create an account</FormHeader>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
