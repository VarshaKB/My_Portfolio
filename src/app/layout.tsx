import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBackground from "@/components/ClientBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VARSHAA BABU | Portfolio",
  description: "The Human Algorithm — Data, NLP & Human Systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {/* Client-side 3D Background */}
        <ClientBackground />

        {/* Global Navigation Bar */}
        <nav className="fixed top-0 w-full z-50 flex justify-center px-6 py-4">
          <div className="relative flex items-center gap-8 px-10 py-4 rounded-full bg-black/30 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(34,211,238,0.15)]">
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-400/10 via-transparent to-violet-400/10 blur-2xl" />

            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Education", "/education"],
              ["Experience", "/experience"],
              ["Projects", "/projects"],
              ["Awards", "/achievements"],
              ["Certifications", "/certifications"],
              ["Research", "/research"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="group relative font-mono text-[10px] uppercase tracking-widest text-white/70 transition-all duration-300 hover:text-cyan-300"
              >
                {label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </nav>

        {/* Content Layer */}
        <div className="relative z-10 pt-32">{children}</div>
      </body>
    </html>
  );
}
