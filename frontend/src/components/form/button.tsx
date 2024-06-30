export function FormButton(props: {
  type: any;
  className: any;
  children: any;
}) {
  const { type, className, children } = props;

  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}
