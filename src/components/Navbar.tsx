"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks, companyInfo } from "@/config/company";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Tutup menu saat scroll
  useEffect(() => {
    const handleScroll = () => {
      if (mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  return (
    <header className="header">
      <nav className="max-w-6xl mx-auto px-6 lg:px-16 flex justify-between items-center h-16 gap-4 lg:gap-8">
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-11 h-11 relative">
            <Image
              src="/images/logo.png"
              alt={companyInfo.name}
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-bold text-lg text-[var(--primary)] hidden lg:block whitespace-nowrap">{companyInfo.shortName}</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1 flex-nowrap">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link whitespace-nowrap ${isActive ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu - Hidden by default, only shows when open */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed top-16 left-0 w-full bg-white shadow-lg border-t border-[var(--bg-gray)] z-50 transition-all duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="nav-link block"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
