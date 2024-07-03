import { FormHeader } from "../../form/header";
import { InputBox, DateInputBox, TextArea, FileInput } from "../../form/input";
import { FormButton } from "../../form/button";
import { FormLabel } from "../../form/label";
import { useForm } from "react-hook-form";

export function SurfaceForm() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="container mx-auto max-w-4xl px-4  mt-20">
      <FormHeader>Create a new investment offer</FormHeader>
      <form action="">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8">
          <div>
            <FormLabel htmlFor="first_name" isRequired={true}>
              Project Name
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
              Project Owner
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
          <div className="col-span-full">
            <FormLabel htmlFor="description" isRequired={true}>
              Project Description
            </FormLabel>
            <TextArea
              id="description"
              name="description"
              placeholder="Write project description..."
              rows={6}
              register={register}
            ></TextArea>
          </div>
          <div>
            <FormLabel htmlFor="startdate" isRequired={true}>
              Start date
            </FormLabel>
            <div className="mt-2">
              <DateInputBox
                id="start_date"
                name="start_date"
                type="date"
                autoComplete="bday"
                required={true}
                placeholder="dd/mm/yy"
                register={register}
              ></DateInputBox>
            </div>
          </div>
          <div>
            <FormLabel htmlFor="enddate" isRequired={true}>
              End date
            </FormLabel>
            <div className="mt-2">
              <DateInputBox
                id="end_date"
                name="end_date"
                type="date"
                autoComplete="bday"
                required={true}
                placeholder="dd/mm/yy"
                register={register}
              ></DateInputBox>
            </div>
          </div>
        </div>

        <div className="col-span-full">
          <FormLabel htmlFor="photolabel" isRequired={true}>
            Pictures
          </FormLabel>
          <FileInput
            id="photo-upload"
            name="photo-upload"
            htmlFor="photo-upload"
            text="Upload your images"
            extension="PNG, JPG ... "
            size="10"
          ></FileInput>
        </div>

        <div className="relative mb-6"></div>

        <div className="col-span-full">
          <FormLabel htmlFor="doclabel" isRequired={true}>
            Additional Documents
          </FormLabel>
          <FileInput
            id="doc-upload"
            name="doc-upload"
            htmlFor="doc-upload"
            text="Upload your documents"
            extension="PDF, DOCX ... "
            size="10"
          ></FileInput>
        </div>

        <div className="flex items-center  my-6">
          <input
            id="checkbox-policy"
            type="checkbox"
            defaultValue=""
            className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
          />
          <label
            htmlFor="checkbox-policy"
            className="text-sm font-normal text-gray-600"
          >
            You agree to our friendly{" "}
            <a href="javascript:;" className="underline underline-offset-4">
              privacy policy.
            </a>
          </label>
        </div>
        <div className="mt-6 flex justify-end gap-x-6 w-full h-12 text-base font-semibold leading-6">
          <FormButton
            type="button"
            className="rounded-md bg-white border border-indogo-800 px-10 py-3 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Cancel
          </FormButton>
          <FormButton
            type="submit"
            className="rounded-md bg-indigo-600 px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </FormButton>
        </div>
      </form>
    </div>
  );
}
