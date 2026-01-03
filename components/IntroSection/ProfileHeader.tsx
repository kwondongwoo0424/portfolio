import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import profileImg from "@/assets/profileImg.jpeg";
import { commonProfileData } from "@/data/profile";
import { ProfileStatus } from "./ProfileStatus";

type ProfileHeaderProps = {
  name: string;
  major: string;
  status: string;
};

export function ProfileHeader({ name, major, status }: ProfileHeaderProps) {
  const isEmployed = status !== "구직 중" && status !== "Open to Work";

  return (
    <div className="flex gap-5 w-full">
      <div className="inline-flex justify-center items-center rounded-full shadow-md p-1 bg-white w-28 h-28 min-w-28 min-h-28">
        <Image src={profileImg} alt="Profile" className="rounded-full" />
      </div>
      <div className=" w-full">
        <div className="flex justify-between w-full">
          <h3 className="font-bold text-2xl">{name}</h3>
          <span>
            <ProfileStatus status={status} isEmployed={isEmployed} />
          </span>
        </div>
        <h4 className="text-gray-600">{major}</h4>
        <div className="flex flex-wrap gap-x-2 items-center">
          <span className="flex items-center gap-2">
            <Phone className="text-gray-600 w-3" />
            <p className="text-gray-600 text-xs whitespace-nowrap">
              {commonProfileData.phone}
            </p>
          </span>
          <span className="text-gray-300 text-sm max-[599px]:invisible">|</span>
          <span className="flex items-center gap-2">
            <Mail className="text-gray-600 w-3" />
            <p className="text-gray-600 text-xs whitespace-nowrap">
              {commonProfileData.email}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
