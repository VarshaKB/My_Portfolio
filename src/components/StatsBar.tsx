"use client";

type Stat = {
  label: string;
  value: string;
};

export default function StatsBar() {
  // Explicitly typed to avoid implicit `any[]` error
  const stats: Stat[] = [];

  return (
    <div className="flex flex-wrap justify-center gap-12 mt-16">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <p className="text-4xl font-black italic">{stat.value}</p>
          <p className="text-[10px] font-mono uppercase tracking-widest opacity-40 mt-2">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
