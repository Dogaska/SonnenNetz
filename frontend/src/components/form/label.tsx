export function FormLabel(props: {
  htmlFor: any;
  isRequired: any;
  children: any;
}) {
  const { htmlFor, isRequired, children } = props;

  return (
    <div className="relative flex items-center mt-5">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {children}
      </label>
      {isRequired && (
        <svg
          width={8}
          height={8}
          className="ml-1 fill-red-500"
          viewBox="0 0 7 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
            fill="#4F46E5"
          />
        </svg>
      )}
    </div>
  );
}
