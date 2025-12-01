import { Mobile } from "iconsax-reactjs";
import { SocialsComponents } from "../components/SocialsComponent";
import { TitleSection } from "../components/ui/TitleSection";

export default function Socials() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3 my-40">
      <TitleSection
        title1="Unblock advanced insights from"
        title2="your social media backups"
        subtitle="Smart analytics from your stored social data"
        icon={<Mobile variant="Bulk" className="text-primary" size={25} />}
      />
      <SocialsComponents />
    </div>
  );
}
