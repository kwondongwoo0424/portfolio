"use client";

import TechStackIcon from "./TechStackIcon";

type TechStack = {
  name: string;
  icon: string;
};

type TechStackBoxProps = {
  title: string;
  stacks: TechStack[];
};

const TechStackBox = ({ title, stacks }: TechStackBoxProps) => {
  return (
    <div className="flex flex-col border rounded-xl p-4 gap-4">
      <h1 className="font-semibold">{title}</h1>
      <div className="flex flex-wrap gap-4 gap-y-2">
        {stacks.map((stack, index) => (
          <span key={index} className="flex items-center gap-2">
            <TechStackIcon iconSlug={stack.icon} />
            <span>{stack.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStackBox;
