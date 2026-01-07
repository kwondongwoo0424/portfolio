import { ReactNode } from "react";

type ProjectSectionBoxProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

const ProjectSectionBox = ({
  title,
  children,
  className = "",
}: ProjectSectionBoxProps) => {
  return (
    <div>
      <h2 className="font-medium text-xl">{title}</h2>
      <p className={`text-sm ${className}`}>{children}</p>
    </div>
  );
};

export default ProjectSectionBox;
