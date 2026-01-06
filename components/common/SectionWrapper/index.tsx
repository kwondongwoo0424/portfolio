import { ReactNode } from "react";

type SectionWrapperProps = {
  title: string;
  children: ReactNode;
};

const SectionWrapper = ({ title, children }: SectionWrapperProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold text-[#008ee3]">{title}</h1>
      {children}
    </div>
  );
};

export default SectionWrapper;
