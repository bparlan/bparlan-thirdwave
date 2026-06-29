import React from 'react';
import { ChevronRight } from 'lucide-react';
import { getAccentForTab, getTabIcon } from '../ThemeUtils';

interface LeftSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setSearchQuery: (query: string) => void;
  hoveredTab: string | null;
  setHoveredTab: (tab: string | null) => void;
}

const TABS = [
  { id: 'bio', label: '~/about_me', desc: 'Identity' },
  { id: 'active', label: '~/building', desc: 'My Focus' },
  { id: 'consult', label: '~/consult', desc: 'Let Me Help' },
  { id: 'partners', label: '~/partners', desc: 'Alliances' },
  { id: 'research', label: '~/research', desc: 'Publications' },
  { id: 'links', label: '~/links', desc: 'Node Links' },
];

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  activeTab,
  setActiveTab,
  setSearchQuery,
  hoveredTab,
  setHoveredTab,
}) => {
  return (
    <aside
      className="w-full lg:w-60 xl:w-64 border-b lg:border-b-0 lg:border-r flex flex-col shrink-0 bg-black rounded-none"
      style={{
        borderColor: getAccentForTab(activeTab).primary,
      }}
    >
      <nav className="grid grid-cols-3 lg:flex lg:flex-col p-1 sm:p-1.5 lg:p-4 gap-1 lg:gap-2 w-full bg-black">
        {TABS.map(tab => {
          const tabAccent = getAccentForTab(tab.id);
          const isSelected = activeTab === tab.id;
          const isHovered = hoveredTab === tab.id;

          const buttonBg = isSelected ? tabAccent.primary : 'transparent';
          const buttonBorder = isHovered ? '#ffffff' : (isSelected ? tabAccent.primary : '#262626');
          const iconColor = isSelected
            ? (tabAccent.isDarkText ? '#000000' : '#ffffff')
            : (isHovered ? tabAccent.primary : '#525252');
          const labelColor = isSelected
            ? (tabAccent.isDarkText ? '#000000' : '#ffffff')
            : (isHovered ? tabAccent.primary : '#8a8a8a');
          const descColor = isSelected
            ? (tabAccent.isDarkText ? '#171717' : '#e5e5e5')
            : (isHovered ? '#e5e5e5' : '#525252');
          const chevronColor = isSelected
            ? (tabAccent.isDarkText ? '#000000' : '#ffffff')
            : tabAccent.primary;

          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSearchQuery('');
              }}
              onMouseEnter={() => setHoveredTab(tab.id)}
              onMouseLeave={() => setHoveredTab(null)}
              className="px-2 py-2 sm:px-3 sm:py-3 lg:px-5 lg:py-5 flex items-center justify-start gap-2 lg:gap-3 border transition-all text-left group cursor-pointer w-full shrink-0 rounded-none bg-black"
              style={{
                backgroundColor: buttonBg,
                borderColor: buttonBorder,
              }}
            >
              {getTabIcon(tab.id, "w-4 h-4 sm:w-5 sm:h-5 shrink-0", { color: iconColor })}
              <div className="font-mono min-w-0 flex-1">
                <span
                  className="block text-[14px] sm:text-[16px] font-bold tracking-tight uppercase truncate leading-none transition-colors"
                  style={{ color: labelColor }}
                >
                  {tab.label}
                </span>
                <span
                  className="hidden lg:block text-[12px] uppercase truncate leading-none mt-2 transition-colors"
                  style={{ color: descColor }}
                >
                  {tab.desc}
                </span>
              </div>
              <ChevronRight
                className="ml-auto w-4 h-4 hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: chevronColor }}
              />
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
