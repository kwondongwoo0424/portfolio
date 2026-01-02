import Ripple from "@/components/Ripple";

type ProfileStatusProps = {
  status: string;
  isEmployed: boolean;
};

export function ProfileStatus({ status, isEmployed }: ProfileStatusProps) {
  return (
    <span className="flex justify-between items-center gap-1 bg-green-100 py-2 px-2.5 rounded-full min-w-max">
      <Ripple isEmployed={isEmployed} />
      <p className="text-xs text-green-800">{status}</p>
    </span>
  );
}
