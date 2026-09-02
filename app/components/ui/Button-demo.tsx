"use client";

import { MonitorMobbile } from "iconsax-reactjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export function ButtonDemo({ isShadow = false }: { isShadow?: boolean }) {
  const searchParams = useSearchParams();
  const [demoUrl, setDemoUrl] = useState(
    "https://panel.xplorta.com/login?demo=true",
  );

  useEffect(() => {
    const code =
      searchParams?.get("ref") ||
      searchParams?.get("code") ||
      searchParams?.get("platform") ||
      localStorage.getItem("marketing_platform_code");

    if (code) {
      setDemoUrl(
        `https://panel.xplorta.com/login?demo=true&ref=${encodeURIComponent(code)}`,
      );
    } else {
      setDemoUrl("https://panel.xplorta.com/login?demo=true");
    }
  }, [searchParams]);

  return (
    <Link
      href={demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={isShadow ? "custom-btn-shadowAll" : "custom-btn"}
    >
      Live Demo
      <MonitorMobbile size="18" color="white" />
    </Link>
  );
}
