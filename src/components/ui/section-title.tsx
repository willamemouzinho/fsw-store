import { ComponentProps } from "react";

const SectionTitle = ({ children, ...props }: ComponentProps<"h2">) => {
  return (
    <h2 className="mb-5 font-bold uppercase" {...props}>
      {children}
    </h2>
  );
};

export default SectionTitle;
