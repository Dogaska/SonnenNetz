export function FormHeader(props) {
  const { children } = props;

  return (
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      {children}
    </h2>
  );
}
