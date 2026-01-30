"use client";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
}

export default function Section({ children, id }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full"
    >
      {children}
    </motion.section>
  );
}