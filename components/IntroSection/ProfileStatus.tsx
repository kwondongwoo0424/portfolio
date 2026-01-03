import Ripple from "@/components/Ripple";

type ProfileStatusProps = {
  status: string;
  isEmployed: boolean;
};

export function ProfileStatus({ status, isEmployed }: ProfileStatusProps) {
  const textColor = isEmployed ? "text-red-800" : "text-green-800";
  const bgColor = isEmployed ? "bg-red-100" : "bg-green-100";
  return (
    <span className={`inline-flex items-center gap-1 ${bgColor} py-2 px-2.5 rounded-full`}>
      <Ripple isEmployed={isEmployed} />
      <p className={`text-xs ${textColor}`}>{status}</p>
    </span>
  );
}
