import { useForm } from "react-hook-form";
import { PhotoIcon } from "@heroicons/react/24/solid";

function InputBox(props: {
  id: any;
  name: any;
  type: any;
  required: any;
  autoComplete: any;
  placeholder: any;
  register: any;
}) {
  const { id, name, type, required, autoComplete, placeholder, register } =
    props;

  return (
    <div className="relative w-full">
      <input
        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
        id={id}
        {...register(name)}
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}

function DateInputBox(props: {
  id: any;
  name: any;
  type: any;
  required: any;
  autoComplete: any;
  placeholder: any;
  register: any;
}) {
  const { id, name, type, required, autoComplete, placeholder, register } =
    props;

  return (
    <div className="relative w-full">
      <input
        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
        id={id}
        {...register(name)}
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}

function TextArea(props: {
  id: any;
  name: any;
  rows: any;
  placeholder: any;
  register: any;
}) {
  const { id, name, rows, placeholder, register } = props;

  return (
    <div className="relative w-full">
      <textarea
        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none resize-none"
        id={id}
        rows={rows}
        {...register(name)}
        placeholder={placeholder}
      />
    </div>
  );
}

function FileInput(props: {
  id: any;
  htmlFor: any;
  name: any;
  text: any;
  extension: any;
  size: any;
  type: any;
  accept: any;
  multiple: any;
  onChange: any;
}) {
  const {
    id,
    htmlFor,
    name,
    text,
    extension,
    size,
    type,
    accept,
    multiple,
    onChange,
  } = props;

  const { register } = useForm();

  return (
    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
      <div className="text-center">
        <PhotoIcon
          className="mx-auto h-12 w-12 text-gray-300"
          aria-hidden="true"
        />
        <div className="mt-4 flex text-sm leading-6 text-gray-600">
          <label
            htmlFor={htmlFor}
            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
          >
            <span>{text}</span>
            <input
              id={id}
              {...register(name)}
              type={type}
              accept={accept}
              multiple={multiple}
              onChange={onChange}
              className="sr-only"
            />
          </label>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs leading-5 text-gray-600">
          {extension} up to {size}MB
        </p>
      </div>
    </div>
  );
}

export { InputBox, DateInputBox, TextArea, FileInput };
