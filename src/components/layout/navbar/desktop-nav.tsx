// src/components/layout/navbar/desktop-nav.tsx
// ═══════════════════════════════════════════════════════════════
// DESKTOP NAVIGATION
// Full navigation for desktop screens
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { mainNavLinks } from "@/constants/navigation";
import { NavLink } from "./nav-links";
import { MegaMenu } from "./mega-menu";

interface DesktopNavProps {
  className?: string;
  language?: "en" | "si";
}

export function DesktopNav({ className, language = "en" }: DesktopNavProps) {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  return (
    <nav
      className={cn("flex items-center gap-1", className)}
      role="navigation"
      aria-label="Main navigation"
    >
      {mainNavLinks.map((link) => {
        const hasChildren = link.children && link.children.length > 0;

        return (
          <div
            key={link.href}
            className="relative"
            onMouseEnter={() => hasChildren && setOpenDropdown(link.href)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <NavLink link={link} language={language} />

            {hasChildren && (
              <MegaMenu
                isOpen={openDropdown === link.href}
                parentLink={link}
                language={language}
                onClose={() => setOpenDropdown(null)}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}