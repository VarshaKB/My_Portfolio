"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Awards", href: "/achievements" },
  { name: "Research", href: "/research" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-[100] flex justify-center p-4 bg-[#020617]/90 backdrop-blur-md border-b border-amber-500/30">
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.href} href={link.href} className="relative px-2 py-1">
              <span className={`font-mono text-[10px] font-bold tracking-widest uppercase transition-colors ${isActive ? 'text-amber-400' : 'text-slate-400 hover:text-white'}`}>
                {link.name}
              </span>
              {isActive && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-400"
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}