type Props = {
  name?: string;
  errors?: any;
};

export function InputErrorMessage({ name, errors }: Props) {
  if (!name || !errors) return null;

  let error: any = errors || {};
  name.split(".").forEach((propName) => {
    error = error?.[propName];
  });
  const errorMessage = error?.message || "";

  return (
    <>
      {errorMessage && (
        <span className="absolute right-4 mt-3 text-red-600 font-archivo text-base">
          {errorMessage}
        </span>
      )}
    </>
  );
}
