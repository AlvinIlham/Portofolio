"use client";

import { motion } from "framer-motion";
import { Languages, Cpu, Award, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "ALBI", path: "/albi", icon: Languages },
  { name: "ALPHA", path: "/alpha", icon: Cpu },
  { name: "ARC", path: "/arc", icon: Award },
];

export default function GlobalNavigation() {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-slate-800/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3">
        <div className="flex items-center space-x-6">
          {navigationItems.map((item) => {
            const isActive = pathname === item.path;
            const IconComponent = item.icon;
            return (
              <Link key={item.path} href={item.path}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}>
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm font-medium hidden sm:block">
                    {item.name}
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
