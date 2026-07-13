// src/components/layout/navbar/nav-links.tsx
// ═══════════════════════════════════════════════════════════════
// NAV LINK COMPONENT
// Individual navigation link with active state and hover effects
// ═══════════════════════════════════════════════════════════════

"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import type { NavLink as NavLinkType } from "@/types";

interface NavLinkProps {
  link: NavLinkType;
  className?: string;
  onClick?: () => void;
  language?: "en" | "si";
}

export function NavLink({
  link,
  className,
  onClick,
  language = "en",
}: NavLinkProps) {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = React.useState(false);

  // Check if this link is active
  const isActive =
    pathname === link.href ||
    (link.href !== "/" && pathname.startsWith(link.href));

  const hasChildren = link.children && link.children.length > 0;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={link.href}
        onClick={onClick}
        className={cn(
          "group relative inline-flex items-center gap-1",
          "px-4 py-2 rounded-full",
          "text-sm font-medium",
          "transition-colors duration-300",
          isActive
            ? "text-gold-500"
            : "text-foreground/80 hover:text-gold-500",
          className
        )}
      >
        {/* Link label */}
        <span className={cn(language === "si" && "sinhala")}>
          {link.label[language]}
        </span>

        {/* Dropdown indicator */}
        {hasChildren && (
          <motion.div
            animate={{ rotate: isHovered ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-3 w-3" />
          </motion.div>
        )}

        {/* Active indicator dot */}
        {isActive && (
          <motion.div
            layoutId="activeNav"
            className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold-500"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}

        {/* Hover background */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gold-500/10 -z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        />
      </Link>
    </div>
  );
}