import { ArrowRight } from "iconsax-reactjs";

export function ButtonGetStarted({ isShadow = false }: { isShadow?: boolean }) {
  return (
    <button className={isShadow ? "custom-btn-shadowAll" : "custom-btn"}>
      Get Started
      <ArrowRight size="18" color="white" />
    </button>
  );
}
