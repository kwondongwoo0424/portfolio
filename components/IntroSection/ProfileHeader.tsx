import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import profileImg from "@/assets/profileImg.jpeg";
import { commonProfileData } from "@/data/profile";

type ProfileHeaderProps = {
  name: string;
  major: string;
};

export function ProfileHeader({ name, major }: ProfileHeaderProps) {
  return (
    <div className="flex gap-5">
      <div className="inline-flex justify-center items-center rounded-full shadow-md p-1 bg-white w-28 h-28 min-w-28 min-h-28">
        <Image src={profileImg} alt="Profile" className="rounded-full" />
      </div>
      <div>
        <h3 className="font-bold text-2xl">{name}</h3>
        <h4 className="text-gray-600">{major}</h4>
        <div className="flex flex-wrap gap-x-2 gap-y-0 items-center">
          <span className="flex items-center gap-2 min-w-fit">
            <Phone className="text-gray-600 w-4" />
            <p className="text-gray-600 text-xs">{commonProfileData.phone}</p>
          </span>
          <p className="text-gray-300 text-sm max-[640px]:hidden">|</p>
          <span className="flex items-center gap-2 min-w-fit">
            <Mail className="text-gray-600 w-4" />
            <p className="text-gray-600 text-xs">{commonProfileData.email}</p>
          </span>
        </div>
      </div>
    </div>
  );
}
