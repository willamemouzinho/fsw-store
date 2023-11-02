import { ArrowDown } from "lucide-react";
import { Badge, BadgeProps } from "./badge";
import { twMerge } from "tailwind-merge";

const DiscountBadge = ({ children, className, ...props }: BadgeProps) => {
  return (
    <Badge
      className={twMerge(
        "flex items-center justify-center gap-1 rounded-full px-2",
        className,
      )}
      {...props}
    >
      <ArrowDown size={12} strokeWidth={3} />
      <span className="text-xs font-bold">{children}%</span>
    </Badge>
  );
};

export default DiscountBadge;
