import { Mobile } from "iconsax-reactjs";
import { SocialsComponents } from "../components/SocialsComponent";
import { TitleSection } from "../components/ui/TitleSection";

export default function Socials() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3 my-40">
      <TitleSection
        title1="Turn your WhatsApp backups"
        title2="into powerful insights"
        subtitle="Smart insights from your social backups"
        icon={<Mobile variant="Bulk" className="text-primary" size={25} />}
      />
        <SocialsComponents />
    </div>
  );
}

