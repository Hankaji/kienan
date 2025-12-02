"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Added X for close icon
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

const navLinks = [
  { href: "/about", label: "Về Chúng Tôi" },
  { href: "/services", label: "Dịch Vụ" },
  { href: "/news", label: "Tin Tức" },
  { href: "/recruitment", label: "Tuyển Dụng" },
  { href: "/contact", label: "Liên Hệ" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New State for Mobile Menu

  // Handle Scroll: Hide on down, Show on up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
        setIsMobileMenuOpen(false); // OPTIONAL: Close menu automatically on scroll
      } else {
        setIsVisible(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo Section */}
        <Link href="/" className="group flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Kiến An Logo"
            width={60}
            height={32}
            className="object-contain"
          />
          <span className="hidden text-xl font-bold text-primary transition-colors group-hover:opacity-80 sm:block">
            Kiến An
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Trigger (Replaces SheetTrigger) */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Replaces SheetContent) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="flex flex-col space-y-4 px-6 py-6 pb-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)} // Close on click
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
