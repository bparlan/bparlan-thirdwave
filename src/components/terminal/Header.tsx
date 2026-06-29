import React from 'react';
import { ThemeAccent } from '../Types';

interface HeaderProps {
  activeAccent: ThemeAccent;
  activeTab: string;
  typewriterText: string;
}

export const Header: React.FC<HeaderProps> = ({ activeAccent, activeTab, typewriterText }) => {
  return (
    <header
      className="border-b px-4 py-2.5 flex items-center justify-between text-xs font-mono font-bold tracking-tight uppercase shrink-0 rounded-none bg-[#0a0a0a]"
      style={{
        borderColor: activeAccent.primary,
        color: activeAccent.primary
      }}
    >
      <div className="flex items-center gap-2">
        <span className="inline-flex gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5" style={{ backgroundColor: activeAccent.primary }} />
          <span className="w-2.5 h-2.5 bg-white" />
          <span className="w-2.5 h-2.5 bg-white" />
        </span>
        <span className="ml-2 font-mono text-[9px] sm:text-xs tracking-tight uppercase truncate">
          <span style={{ color: activeAccent.primary }}>BPARLAN.COM</span> <span className="text-neutral-600">//</span> <span className="text-white font-extrabold">{typewriterText}</span><span className="text-white animate-blink-sharp select-none ml-0.5">█</span>
        </span>
      </div>

      <div className="flex items-center gap-1.5 text-[9.5px] sm:text-[10.5px] uppercase font-mono border px-2.5 py-0.5 tracking-tight font-bold" style={{ borderColor: activeAccent.primary, color: activeAccent.primary }}>
        <span className="opacity-80 hidden sm:inline">WORKSPACE:</span>
        <span className="font-extrabold" style={{ color: activeAccent.accent }}>~/{activeTab.toUpperCase()}</span>
      </div>
    </header>
  );
};
