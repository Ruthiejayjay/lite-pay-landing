import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  id?: string;
  spinnerColor?:
    | "light"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function SubmitButton({
  className,
  children,
  spinnerColor = "light",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  const spinnerClass = {
    light: "text-white",
    primary: "text-blue-500",
    secondary: "text-gray-500",
    success: "text-green-500",
    danger: "text-red-500",
    warning: "text-yellow-500",
    info: "text-teal-500",
    dark: "text-black",
  }[spinnerColor];

  return (
    <button type="submit" className={className} disabled={pending}>
      {!pending ? (
        children
      ) : (
        <div
          className={`w-4 h-4 border-2 border-t-2 border-transparent border-solid rounded-full animate-spin ${spinnerClass}`}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </button>
  );
}
