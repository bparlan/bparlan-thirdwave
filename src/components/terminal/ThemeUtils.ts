import { ThemeAccent, WalletAccent } from './Types';
import { Terminal, Globe, BookOpen, Layers, Zap, Folder } from 'lucide-react';
import React from 'react';

export const getAccentForTab = (tab: string): ThemeAccent => {
  switch (tab) {
    case 'bio':
      return {
        primary: '#BD0000',
        glow: 'rgba(189, 0, 0, 0.15)',
        bgBg: '#000000',
        accent: '#FF4D4D',
        nodeName: 'RED_PHOSPHOR',
        isDarkText: false
      };
    case 'links':
      return {
        primary: '#243AFF',
        glow: 'rgba(36, 58, 255, 0.15)',
        bgBg: '#000000',
        accent: '#7D8BFF',
        nodeName: 'CYBER_BLUE',
        isDarkText: false
      };
    case 'research':
      return {
        primary: '#00ef00',
        glow: 'rgba(0, 239, 0, 0.15)',
        bgBg: '#000000',
        accent: '#75FF75',
        nodeName: 'GREEN_DECENTRAL',
        isDarkText: true
      };
    case 'active':
      return {
        primary: '#AC00FF',
        glow: 'rgba(172, 0, 255, 0.15)',
        bgBg: '#000000',
        accent: '#D380FF',
        nodeName: 'PURPLE_ACTIVE',
        isDarkText: false
      };
    case 'consult':
      return {
        primary: '#FF00B9',
        glow: 'rgba(255, 0, 185, 0.15)',
        bgBg: '#000000',
        accent: '#FF75DE',
        nodeName: 'MAGENTA_LEDGER',
        isDarkText: false
      };
    case 'partners':
      return {
        primary: '#00FFF9',
        glow: 'rgba(0, 255, 249, 0.15)',
        bgBg: '#000000',
        accent: '#80FFFC',
        nodeName: 'CYAN_ALLIANCE',
        isDarkText: true
      };
    default:
      return {
        primary: '#BD0000',
        glow: 'rgba(189, 0, 0, 0.15)',
        bgBg: '#000000',
        accent: '#FF4D4D',
        nodeName: 'RED_PHOSPHOR',
        isDarkText: false
      };
  }
};

export const getWalletAccent = (symbol: string): WalletAccent => {
  switch (symbol.toUpperCase()) {
    case 'BTC':
      return { primary: '#f97316', glow: 'rgba(249, 115, 22, 0.15)', accent: '#fb923c' };
    case 'ETH':
      return { primary: '#3b82f6', glow: 'rgba(59, 130, 246, 0.15)', accent: '#60a5fa' };
    case 'SOL':
      return { primary: '#a855f7', glow: 'rgba(168, 85, 247, 0.15)', accent: '#c084fc' };
    default:
      return { primary: '#a3a3a3', glow: 'rgba(163, 163, 163, 0.15)', accent: '#e5e5e5' };
  }
};

export const getCategoryColor = (category: string): string => {
  switch (category.toLowerCase()) {
    case 'social': return '#3b82f6';
    case 'writing': return '#f59e0b';
    case 'formality': return '#737373';
    case 'community': return '#ec4899';
    case 'aggregator': return '#10b981';
    default: return '#06b6d4';
  }
};

export const getTabIcon = (id: string, className: string, style: React.CSSProperties): JSX.Element => {
  switch (id) {
    case 'bio': return React.createElement(Terminal, { className, style });
    case 'links': return React.createElement(Globe, { className, style });
    case 'research': return React.createElement(BookOpen, { className, style });
    case 'active': return React.createElement(Folder, { className, style });
    case 'consult': return React.createElement(Layers, { className, style });
    case 'partners': return React.createElement(Zap, { className, style });
    default: return React.createElement(Folder, { className, style });
  }
};
