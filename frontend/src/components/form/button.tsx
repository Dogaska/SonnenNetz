export function FormButton(props) {
  const { type, className, children } = props;

  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}
