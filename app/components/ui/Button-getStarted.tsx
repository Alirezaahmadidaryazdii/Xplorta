import Link from "next/link";
import { ArrowRight } from "iconsax-reactjs";

export function ButtonGetStarted({ isShadow = false }: { isShadow?: boolean }) {
  return (
    <Link
      href="https://panel.xplorta.com/"
      target="_blank"
      rel="noopener noreferrer"
      className={isShadow ? "custom-btn-shadowAll" : "custom-btn"}
    >
      Get Started
      <ArrowRight size="18" color="white" />
    </Link>
  );
}
