import { cn } from "@/lib/utils";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";

type ProgressIconProps = {
  success?: boolean
  disabled?: boolean
  className?: string
}

const ProgressIcon = ({ success, disabled, className }: ProgressIconProps) => {
  if (disabled) {
    return <div className={cn("h-5 w-5", className)} />;
  }
  if (success === undefined) {
    return <FaSpinner className={cn("h-5 w-5 animate-spin", className)} />;
  }
  if (success) {
    return <FaCheckCircle className={cn("h-5 w-5 text-green-700", className)} />;
  }
  return <FcCancel className={cn("h-5 w-5", className)} />;
};
ProgressIcon.displayName = "ProgressIcon";

export { ProgressIcon };
