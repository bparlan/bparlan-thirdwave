import React from 'react';
import { ThemeAccent } from '../Types';

interface FooterProps {
  activeAccent: ThemeAccent;
  hoveredBottomLink: string | null;
  setHoveredBottomLink: (link: string | null) => void;
}

const BOTTOM_LINKS = [
  { key: 'baria', label: 'BariaDAO', href: 'https://baria.bparlan.com' },
  { key: 'blog', label: 'BLOG', href: 'https://wp.bparlan.com' },
  { key: 'n8n', label: 'n8n', href: 'https://n8n.bparlan.com' },
  { key: 'meet', label: 'MEET', href: 'https://meet.bparlan.com' },
  { key: 'start', label: 'START', href: 'https://start.bparlan.com' },
];

export const Footer: React.FC<FooterProps> = ({ activeAccent, hoveredBottomLink, setHoveredBottomLink }) => {
  return (
    <footer
      className="border-t px-4 py-3 text-[10px] sm:text-[11px] font-mono font-bold tracking-tight flex flex-col sm:flex-row justify-between items-center bg-black gap-2 select-none shrink-0 rounded-none transition-colors duration-200"
      style={{ borderColor: activeAccent.primary, color: activeAccent.primary }}
    >
      <div className="flex flex-wrap items-center gap-x-1 gap-y-1">
        {BOTTOM_LINKS.map((link, idx, arr) => {
          const isHovered = hoveredBottomLink === link.key;
          return (
            <React.Fragment key={link.key}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-0.5 transition-all duration-200 no-underline select-all rounded-none uppercase"
                onMouseEnter={() => setHoveredBottomLink(link.key)}
                onMouseLeave={() => setHoveredBottomLink(null)}
                style={{
                  backgroundColor: isHovered ? activeAccent.primary : 'transparent',
                  color: isHovered
                    ? (activeAccent.isDarkText ? '#000000' : '#ffffff')
                    : '#ffffff'
                }}
              >
                {link.label}
              </a>
              {idx < arr.length - 1 && (
                <span className="text-neutral-600 select-none px-1">//</span>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div className="text-[10px] uppercase font-bold tracking-tight text-neutral-400">
        BARIŞ PARLAN | 2026 |{' '}
        <a
          href="https://uptime.bparlan.com/status/server"
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 py-0.5 transition-all duration-200 no-underline rounded-none select-all"
          onMouseEnter={() => setHoveredBottomLink('uptime')}
          onMouseLeave={() => setHoveredBottomLink(null)}
          style={{
            backgroundColor: hoveredBottomLink === 'uptime' ? activeAccent.primary : 'transparent',
            color: hoveredBottomLink === 'uptime'
              ? (activeAccent.isDarkText ? '#000000' : '#ffffff')
              : '#ffffff'
          }}
        >
          UPTIME
        </a>
      </div>
    </footer>
  );
};
