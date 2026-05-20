import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, Globe, BookOpen, Layers, Zap, Folder, ChevronRight, 
  Copy, Check, ExternalLink, ArrowRight, Search, Send, Award
} from 'lucide-react';
import { BIO_SUMMARY, SOCIAL_LINKS, WEB3_RESEARCH, WALLETS, COLLABORATION_PARTNERS, ACTIVE_ENGAGEMENTS, EDUCATIONAL_OFFERS } from '../data';

export interface ThemeAccent {
  primary: string;
  glow: string;
  bgBg: string;
  accent: string;
  nodeName: string;
  isDarkText: boolean;
}

const getAccentForTab = (tab: string): ThemeAccent => {
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
    case 'buy_me_time':
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

const getWalletAccent = (symbol: string) => {
  switch (symbol.toUpperCase()) {
    case 'BTC':
      return {
        primary: '#f97316',
        glow: 'rgba(249, 115, 22, 0.15)',
        accent: '#fb923c'
      };
    case 'ETH':
      return {
        primary: '#3b82f6',
        glow: 'rgba(59, 130, 246, 0.15)',
        accent: '#60a5fa'
      };
    case 'SOL':
      return {
        primary: '#a855f7',
        glow: 'rgba(168, 85, 247, 0.15)',
        accent: '#c084fc'
      };
    default:
      return {
        primary: '#a3a3a3',
        glow: 'rgba(163, 163, 163, 0.15)',
        accent: '#e5e5e5'
      };
  }
};

const getCategoryColor = (category: string): string => {
  switch (category.toLowerCase()) {
    case 'social':
      return '#3b82f6';
    case 'writing':
      return '#f59e0b';
    case 'formality':
      return '#737373';
    case 'community':
      return '#ec4899';
    case 'aggregator':
      return '#10b981';
    default:
      return '#06b6d4';
  }
};

const getTabIcon = (id: string, className: string, style: React.CSSProperties) => {
  switch (id) {
    case 'bio':
      return <Terminal className={className} style={style} />;
    case 'links':
      return <Globe className={className} style={style} />;
    case 'research':
      return <BookOpen className={className} style={style} />;
    case 'active':
      return <Folder className={className} style={style} />;
    case 'buy_me_time':
      return <Layers className={className} style={style} />;
    case 'partners':
      return <Zap className={className} style={style} />;
    default:
      return <Folder className={className} style={style} />;
  }
};

export default function TerminalDashboard() {
  const [activeTab, setActiveTab] = useState<string>('bio');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedSymbol, setCopiedSymbol] = useState<string | null>(null);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [hoveredBottomLink, setHoveredBottomLink] = useState<string | null>(null);
  const [hoveredCopySymbol, setHoveredCopySymbol] = useState<string | null>(null);

  const artistWords = ["ARTIST", "RESEARCHER", "EDUCATOR", "CONSULTANT", "DESIGNER", "VJ", "DJ", "NERD", "STORYTELLER"];
  const [typewriterText, setTypewriterText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const currentWord = artistWords[wordIdx];
    let timeoutId: NodeJS.Timeout;

    if (isErasing) {
      if (typewriterText.length > 0) {
        timeoutId = setTimeout(() => {
          setTypewriterText(prev => prev.slice(0, -1));
        }, 60); // fast backward deleting
      } else {
        setIsErasing(false);
        // Choose next word randomly without repeating consecutively
        const remainingIndices = Array.from({ length: artistWords.length }, (_, i) => i).filter(i => i !== wordIdx);
        const randomNext = remainingIndices[Math.floor(Math.random() * remainingIndices.length)];
        setWordIdx(randomNext);
      }
    } else {
      if (typewriterText.length < currentWord.length) {
        timeoutId = setTimeout(() => {
          setTypewriterText(currentWord.substring(0, typewriterText.length + 1));
        }, 110); // typing forward
      } else {
        timeoutId = setTimeout(() => {
          setIsErasing(true);
        }, 1800); // pause when fully written
      }
    }

    return () => clearTimeout(timeoutId);
  }, [typewriterText, isErasing, wordIdx]);

  const activeAccent = getAccentForTab(activeTab);

  // Apply responsive accent theme dynamically to root document element
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary-color', activeAccent.primary);
    root.style.setProperty('--color-glow-color', activeAccent.glow);
  }, [activeAccent]);

  const copyAddressToClipboard = (address: string, symbol: string) => {
    navigator.clipboard.writeText(address);
    setCopiedSymbol(symbol);
    setTimeout(() => setCopiedSymbol(null), 2000);
  };

  // Filter links based on Category and Search Query
  const filteredLinks = SOCIAL_LINKS.filter(l => {
    const q = searchQuery.toLowerCase();
    return (
      l.name.toLowerCase().includes(q) ||
      l.category.toLowerCase().includes(q) ||
      (l.description && l.description.toLowerCase().includes(q))
    );
  });

  return (
    <div 
      id="grand_terminal_screen" 
      className="w-screen h-screen flex flex-col items-stretch justify-start text-neutral-200 select-none bg-black font-mono overflow-hidden border-[5px]"
      style={{ 
        borderColor: activeAccent.primary
      }}
    >
      <style>{`
        #grand_terminal_screen *::selection {
          background-color: ${activeAccent.primary} !important;
          color: ${activeAccent.isDarkText ? '#000000' : '#ffffff'} !important;
        }
      `}</style>
      {/* RETRO TITLE BAR */}
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

      {/* MAIN BODY NAVIGATION PANEL LAYOUT */}
      <div className="flex-1 flex flex-col lg:flex-row items-stretch justify-start overflow-hidden min-h-0 rounded-none bg-black">
        
        {/* LEFT PANEL: SIMPLE DIRECTORIES MAP */}
        <aside 
          className="w-full lg:w-52 xl:w-56 border-b lg:border-b-0 lg:border-r flex flex-col shrink-0 bg-black rounded-none"
          style={{ 
            borderColor: activeAccent.primary,
          }}
        >
          <nav className="grid grid-cols-3 lg:flex lg:flex-col p-1 sm:p-1.5 lg:p-3 gap-1 lg:gap-1.5 w-full bg-black">
            {[
              { id: 'bio', label: '~/bio', desc: 'Identity Overview' },
              { id: 'links', label: '~/links', desc: 'Consolidated Node Links' },
              { id: 'research', label: '~/research', desc: 'Blockchain Publications' },
              { id: 'active', label: '~/active', desc: 'Live Build Engagements' },
              { id: 'buy_me_time', label: '~/buy_me_time', desc: 'My Public Wallets' },
              { id: 'partners', label: '~/partners', desc: 'Co-laboratory Alliances' },
            ].map(tab => {
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
                  id={`nav_sidebar_${tab.id}`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSearchQuery('');
                  }}
                  onMouseEnter={() => setHoveredTab(tab.id)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className="px-1 py-1 sm:px-1.5 sm:py-1.5 lg:px-3 lg:py-2.5 flex items-center justify-start gap-1 lg:gap-2 border transition-all text-left group cursor-pointer w-full shrink-0 rounded-none bg-black"
                  style={{
                    backgroundColor: buttonBg,
                    borderColor: buttonBorder,
                  }}
                >
                  {getTabIcon(tab.id, "w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0", { color: iconColor })}
                  <div className="font-mono min-w-0 flex-1">
                    <span 
                      className="block text-[11px] sm:text-[13px] font-bold tracking-tight uppercase truncate leading-none transition-colors"
                      style={{ color: labelColor }}
                    >
                      {tab.label}
                    </span>
                    <span 
                      className="hidden lg:block text-[9px] uppercase truncate leading-none mt-1 transition-colors"
                      style={{ color: descColor }}
                    >
                      {tab.desc}
                    </span>
                  </div>
                  <ChevronRight 
                    className="ml-auto w-3.5 h-3.5 hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity" 
                    style={{ color: chevronColor }}
                  />
                </button>
              );
            })}
          </nav>
        </aside>

        {/* RIGHT VIEWPORT DISPLAY NODES - SOLID BACKGROUND, SCROLLABLE */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col justify-start bg-black scrollbar-thin min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="space-y-6"
              >
                {/* 1. BIO VIEWPORT */}
                {activeTab === 'bio' && (
                  <div id="viewport_bio" className="space-y-6">
                    <div className="flex items-center justify-between border-b py-3.5 border-neutral-800">
                      <h2 className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight uppercase flex items-center gap-2 leading-none">
                        <Terminal className="w-5 h-5 shrink-0" style={{ color: activeAccent.primary }} />
                        <span>~/BIO</span>
                      </h2>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase">IDENTITY_VIEWPORT</span>
                    </div>

                    <div className="space-y-5 text-sm sm:text-base text-neutral-200 leading-snug font-mono select-all">
                      
                      {/* Barış Parlan Profile (Formerly global headline) */}
                      <div className="space-y-3 pb-3">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2">
                          <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-black tracking-tighter text-white uppercase leading-none select-all">
                            BARIŞ PARLAN
                          </h1>
                          <span className="text-xs font-mono px-3 py-1 bg-black border font-bold rounded-none" style={{ borderColor: activeAccent.primary, color: activeAccent.accent }}>
                            // KEY_ID: @BPARLAN
                          </span>
                        </div>

                        {/* Tagline */}
                        <p className="text-base sm:text-lg md:text-xl font-mono font-bold tracking-tight leading-tight uppercase" style={{ color: activeAccent.accent }}>
                          &gt; {BIO_SUMMARY.tagline}
                        </p>
                        
                        {/* Extended Biography */}
                        <p className="text-sm sm:text-base text-neutral-300 leading-snug max-w-4xl select-text">
                          {BIO_SUMMARY.extendedBio}
                        </p>
                      </div>

                      {/* Standard section text block - no callout borders */}
                      <div className="py-2 px-4 border border-neutral-800 bg-neutral-950 leading-snug rounded-none">
                        <p className="text-sm sm:text-base text-neutral-200 font-bold uppercase tracking-tight leading-snug">
                          "BRINGING 30+ YEARS OF I.T. EXPERIENCE, FLUENT IN THE DIALECTS OF TERMINALS, MEDIA ART, AND DECENTRALIZED PROTOCOLS."
                        </p>
                      </div>

                      {/* Clean Subsections - no custom border layout */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        <div className="space-y-2">
                          <span className="text-[10px] font-mono uppercase tracking-tight text-neutral-500 block font-bold">// CORE ROLE ASSIGNMENTS</span>
                          <div className="flex flex-col gap-0.5 text-xs">
                            {BIO_SUMMARY.roles.map(r => (
                              <div key={r} className="flex items-center gap-2 text-neutral-300 font-bold uppercase tracking-tight">
                                <span className="w-1.5 h-1.5 bg-neutral-600" />
                                <span>{r}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <span className="text-[10px] font-mono uppercase tracking-tight text-neutral-500 block font-bold">// CULTURE & GEOGRAPHIC SPANS</span>
                          <div className="flex flex-col gap-0.5 text-xs">
                            {BIO_SUMMARY.locations.map(loc => (
                              <div key={loc} className="flex items-center gap-2 text-neutral-300 font-bold uppercase tracking-tight">
                                <span className="w-1.5 h-1.5 bg-neutral-600" />
                                <span>{loc}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Newsletter Channel with solid primary color background */}
                      <div 
                        className="mt-6 p-4 border flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 font-mono text-xs sm:text-sm leading-snug rounded-none bg-neutral-950"
                        style={{ borderColor: activeAccent.primary }}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-tight text-red-500">
                            <span className="w-1.5 h-1.5 bg-red-500 animate-pulse" />
                            <span>DIRECT BROADCAST TRANSMISSION</span>
                          </div>
                          <p className="text-neutral-100 font-bold select-text tracking-tight uppercase leading-snug">
                            Subscribe to my newsletter on Paragraph to acquire direct digital coordination updates & critical studies first.
                          </p>
                        </div>
                        <a 
                          href="https://paragraph.com/@parlan/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 text-center font-bold px-5 py-2.5 hover:!bg-white hover:!text-black hover:!border-white transition-all duration-200 cursor-pointer shrink-0 tracking-tight uppercase font-mono rounded-none"
                          style={{
                            backgroundColor: activeAccent.primary,
                            color: activeAccent.isDarkText ? '#000000' : '#ffffff',
                            border: `1px solid ${activeAccent.primary}`
                          }}
                        >
                          <Send className="w-4 h-4 shrink-0" />
                          <span>SUBSCRIBE NEWSLETTER</span>
                        </a>
                      </div>

                    </div>
                  </div>
                )}
                {/* 2. LINKS VIEWPORT */}
                {activeTab === 'links' && (
                  <div id="viewport_links" className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b py-3.5 border-neutral-800">
                      <h2 className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight uppercase flex items-center gap-2 leading-none">
                        <Globe className="w-5 h-5 shrink-0" style={{ color: activeAccent.primary }} />
                        <span>~/LINKS</span>
                      </h2>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase">{filteredLinks.length} NET NODES</span>
                    </div>

                    <p className="text-sm sm:text-base text-neutral-300 font-mono tracking-tight leading-snug">
                      VERIFIED DIGITAL CORRIDORS, SOCIAL ROUTINGS, AND ACADEMIC INDEXES:
                    </p>

                    {/* Search Field */}
                    <div className="relative w-full rounded-none">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                      <input
                        type="text"
                        placeholder="Search folder nodes (e.g., substack, wordpress, linkedin, x)..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-neutral-950 font-mono text-xs sm:text-sm rounded-none pl-11 pr-4 py-3 border focus:outline-none transition-colors border-neutral-800 placeholder-neutral-500 text-neutral-200"
                        style={{ 
                          borderColor: '#404040'
                        }}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 select-all">
                      {filteredLinks.map(link => {
                        const themeColor = getCategoryColor(link.category);
                        return (
                          <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 border bg-neutral-950 border-neutral-800 hover:border-white transition-all flex flex-col justify-between group rounded-none"
                          >
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-[10px] font-mono uppercase">
                                <span className="font-bold border px-2 py-0.5 rounded-none text-black" style={{ backgroundColor: themeColor, borderColor: themeColor }}>
                                  {link.category}
                                </span>
                                <span className="text-neutral-500 truncate max-w-[150px] font-mono">{link.url.replace('https://', '')}</span>
                              </div>
                              <h3 className="text-base font-mono font-extrabold text-white uppercase tracking-tight">
                                {link.name}
                              </h3>
                              <p className="text-xs sm:text-sm text-neutral-400 leading-snug font-mono">
                                {link.description || 'Verified node link.'}
                              </p>
                            </div>
                            
                            <div 
                              className="flex items-center gap-1.5 pt-2.5 text-[10px] font-mono transition-colors border-t border-neutral-900 mt-3 uppercase tracking-tight font-bold group-hover:!text-white"
                              style={{ color: activeAccent.primary }}
                            >
                              <span>ROUTE TO NODE</span>
                              <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 3. RESEARCH PUBLICATIONS VIEWPORT */}
                {activeTab === 'research' && (
                  <div id="viewport_research" className="space-y-6">
                    <div className="flex items-center justify-between border-b py-3.5 border-neutral-800">
                      <h2 className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight uppercase flex items-center gap-2 leading-none">
                        <BookOpen className="w-5 h-5 shrink-0" style={{ color: activeAccent.primary }} />
                        <span>~/RESEARCH</span>
                      </h2>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase">BLOCKCHAIN PUBLICATIONS</span>
                    </div>

                    <p className="text-sm sm:text-base text-neutral-300 font-mono leading-snug max-w-4xl">
                      INDEPENDENT ON-CHAIN SYSTEM AUDITS, COMPARATIVE DEX EFFICIENCY ANALYSES, GOVERNANCE SUBMISSIONS, AND CYBER-ECONOMIC BLUEPRINTS:
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 select-all">
                      {WEB3_RESEARCH.map((res, idx) => (
                        <div 
                          key={idx} 
                          className="p-5 border bg-neutral-950 border-neutral-800 flex flex-col justify-between space-y-3 group rounded-none animate-fade-in"
                        >
                          <div className="space-y-3">
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-900 pb-2 text-[10px] font-mono uppercase">
                              <div className="flex gap-2">
                                <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-300 font-bold rounded-none">
                                  {res.type}
                                </span>
                                <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-300 font-bold rounded-none">
                                  {res.platform}
                                </span>
                              </div>
                              <span className="text-neutral-500 font-bold">{res.date}</span>
                            </div>

                            <h3 className="text-base sm:text-lg font-mono font-bold text-white leading-tight uppercase tracking-tight">
                              {res.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-neutral-400 leading-snug font-mono">
                              {res.summary}
                            </p>
                          </div>

                          <div className="pt-2">
                            <a 
                              href={res.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-mono border px-3 py-1.5 hover:!bg-white hover:!text-black hover:!border-white transition-all duration-200 rounded-none font-bold"
                              style={{ 
                                backgroundColor: activeAccent.primary,
                                color: activeAccent.isDarkText ? '#000000' : '#ffffff',
                                borderColor: activeAccent.primary
                              }}
                            >
                              <span>{res.buttonText || "LAUNCH PUBLICATION"}</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. ACTIVE PORTFOLIO BUILD ENGAGEMENTS & OFFERS */}
                {activeTab === 'active' && (
                  <div id="viewport_active" className="space-y-8">
                    <div className="flex items-center justify-between border-b py-3.5 border-neutral-800">
                      <h2 className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight uppercase flex items-center gap-2 leading-none">
                        <Folder className="w-5 h-5 shrink-0" style={{ color: activeAccent.primary }} />
                        <span>~/ACTIVE</span>
                      </h2>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase">ACTIVE PROJECTS</span>
                    </div>

                    {/* Section 1: What I Offer (Now on Top) */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 border-b border-neutral-900 pb-2">
                        <span className="w-2.5 h-2.5 bg-yellow-500 shrink-0" />
                        <h3 className="text-sm font-mono font-bold text-neutral-300 uppercase tracking-tight">// WHAT I OFFER (1-ON-1 SESSIONS)</h3>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 select-all">
                        {EDUCATIONAL_OFFERS.map((offer, idx) => (
                          <div 
                            key={idx} 
                            className="p-5 border bg-neutral-950 border-neutral-800 flex flex-col justify-between space-y-3 rounded-none"
                          >
                            <div className="space-y-1">
                              <h4 className="text-base font-mono font-bold text-white uppercase tracking-tight leading-tight">
                                {offer.title}
                              </h4>
                              <p className="text-xs sm:text-sm text-neutral-400 leading-snug font-mono pt-1">
                                {offer.description}
                              </p>
                            </div>
                            <div className="pt-3 mt-2">
                              <a 
                                href={offer.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-mono border px-4 py-2 hover:!bg-white hover:!text-black hover:!border-white transition-all duration-200 rounded-none w-full justify-center font-bold"
                                style={{ 
                                  backgroundColor: activeAccent.primary,
                                  color: activeAccent.isDarkText ? '#000000' : '#ffffff',
                                  borderColor: activeAccent.primary
                                }}
                              >
                                <span className="uppercase">
                                  {offer.url.includes('meet') ? (
                                    <><strong>meet</strong>.bparlan.com</>
                                  ) : offer.url.includes('start') ? (
                                    <><strong>start</strong>.bparlan.com</>
                                  ) : (
                                    "SCHEDULE SATELLITE SESSION"
                                  )}
                                </span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Section 2: Currently Building (Now at Bottom) */}
                    <div className="space-y-4 pt-2">
                      <div className="flex items-center gap-2 border-b border-neutral-900 pb-2">
                        <span className="w-2.5 h-2.5 bg-red-500 shrink-0" />
                        <h3 className="text-sm font-mono font-bold text-neutral-300 uppercase tracking-tight">// CURRENTLY BUILDING</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4 select-all">
                        {ACTIVE_ENGAGEMENTS.map((eng, idx) => (
                          <div 
                            key={idx} 
                            className="p-5 border bg-neutral-950 border-neutral-800 flex flex-col justify-between space-y-3 rounded-none"
                          >
                            <div className="space-y-1">
                              <div className="flex flex-row items-center justify-between gap-2 pb-1">
                                <h4 className="text-lg font-mono font-extrabold text-white uppercase tracking-tight">
                                  {eng.title}
                                </h4>
                                <span className="text-[10px] font-mono px-2 py-0.5 border shrink-0 text-[#BD0000] border-[#BD0000] font-bold uppercase rounded-none">
                                  BUILDING
                                </span>
                              </div>
                              <p className="text-xs sm:text-sm text-neutral-300 leading-snug font-mono">
                                {eng.description}
                              </p>
                            </div>
                            
                            <div className="pt-2">
                              <a 
                                href={eng.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-mono border px-4 py-2 hover:!bg-white hover:!text-black hover:!border-white transition-all duration-200 rounded-none font-bold"
                                style={{ 
                                  backgroundColor: activeAccent.primary,
                                  color: activeAccent.isDarkText ? '#000000' : '#ffffff',
                                  borderColor: activeAccent.primary
                                }}
                              >
                                <span>{eng.title === "BariaDAO" ? "ACCESS BariaDAO" : "ACCESS REPOSITORY PORTAL"}</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                {/* 5. BUY_ME_TIME - SECURED LEDGER KEYS */}
                {activeTab === 'buy_me_time' && (
                  <div id="viewport_buy_me_time" className="space-y-6">
                    <div className="flex items-center justify-between border-b py-3.5 border-neutral-800">
                      <h2 className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight uppercase flex items-center gap-2 leading-none">
                        <Layers className="w-5 h-5 shrink-0" style={{ color: activeAccent.primary }} />
                        <span>~/BUY_ME_TIME</span>
                      </h2>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase">MY PUBLIC WALLETS</span>
                    </div>

                    <p className="text-sm sm:text-base text-neutral-300 font-mono leading-snug max-w-4xl">
                      DIRECT ADDRESSES TO PROVIDE FUEL BLOCKS, SUPPORT OPEN RESEARCH REVIEWS, OR FUND WEB3 DEVELOPMENTS SECURELY BYPASSING TRADITIONAL INTERMEDIARIES:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 select-all">
                      {WALLETS.map(w => {
                        const walletAccent = getWalletAccent(w.symbol);
                        const displayAddress = w.address.length > 10 
                          ? `${w.address.substring(0, 4)}...${w.address.substring(w.address.length - 4)}` 
                          : w.address;
                        return (
                          <div 
                            key={w.symbol} 
                            className="p-5 border bg-black border-neutral-850 flex flex-col justify-between space-y-4 rounded-none"
                            style={{ 
                              borderColor: walletAccent.primary
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <div className="space-y-1 min-w-0">
                                <h3 className="text-base font-mono font-extrabold text-white uppercase tracking-tight truncate" style={{ color: walletAccent.accent }}>{w.chain}</h3>
                                <p className="text-xs font-mono text-neutral-400 line-clamp-2">{w.label}</p>
                              </div>
                              <span className="text-[10px] font-mono px-2 py-1 bg-neutral-900 border border-neutral-800 font-bold uppercase rounded-none shrink-0" style={{ color: walletAccent.accent }}>
                                {w.symbol}
                              </span>
                            </div>

                            {/* Direct wallet address layout bar */}
                            <div 
                              className="bg-transparent px-3 py-3 border border-transparent flex flex-col gap-3 font-mono rounded-none"
                            >
                              <code 
                                onClick={() => copyAddressToClipboard(w.address, w.symbol)}
                                className="text-sm sm:text-base font-extrabold font-mono tracking-wider break-all select-all py-1 px-1 text-center uppercase cursor-cell hover:underline"
                                style={{ color: walletAccent.accent }}
                              >
                                {displayAddress}
                              </code>

                              <button
                                onClick={() => copyAddressToClipboard(w.address, w.symbol)}
                                onMouseEnter={() => setHoveredCopySymbol(w.symbol)}
                                onMouseLeave={() => setHoveredCopySymbol(null)}
                                className="px-4 py-2 text-xs font-bold font-mono border transition-all duration-200 flex items-center gap-1.5 cursor-pointer justify-center rounded-none w-full"
                                style={{ 
                                  backgroundColor: (copiedSymbol === w.symbol || hoveredCopySymbol === w.symbol) ? walletAccent.primary : 'transparent',
                                  borderColor: walletAccent.primary,
                                  color: (copiedSymbol === w.symbol || hoveredCopySymbol === w.symbol) ? '#000000' : walletAccent.primary,
                                }}
                              >
                                {copiedSymbol === w.symbol ? (
                                  <>
                                    <Check className="w-3.5 h-3.5" />
                                    <span>COPIED</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3.5 h-3.5" />
                                    <span>COPY ADDRESS</span>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 6. CO-LAB ALLIANCES (PARTNERS) */}
                {activeTab === 'partners' && (
                  <div id="viewport_partners" className="space-y-6">
                    <div className="flex items-center justify-between border-b py-3.5 border-neutral-800">
                      <h2 className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight uppercase flex items-center gap-2 leading-none">
                        <Zap className="w-5 h-5 shrink-0" style={{ color: activeAccent.primary }} />
                        <span>~/PARTNERS</span>
                      </h2>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase">CO-LABORATORY ALLIANCES</span>
                    </div>

                    <p className="text-sm sm:text-base text-neutral-300 font-mono leading-snug max-w-4xl">
                      TACTICAL LABS, INDEPENDENT DIGITAL ARTISTS, AND CO-LABORATORY COALITIONS SECURING THE COORDINATION GATES:
                    </p>

                    {/* Partners Grid: 2 columns on desktop */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 select-all">
                      {COLLABORATION_PARTNERS.map(cp => (
                        <div 
                          key={cp.name} 
                          className="p-5 border bg-neutral-950 border-neutral-800 flex flex-col justify-between gap-4 rounded-none"
                        >
                          <div className="space-y-1.5 min-w-0">
                            <h3 className="text-lg font-mono font-extrabold text-white uppercase tracking-tight">
                              {cp.name}
                            </h3>
                            <p className="text-xs sm:text-sm text-neutral-450 leading-snug font-mono">
                              {cp.description}
                            </p>
                          </div>
                          
                          {cp.url && (
                            <a 
                              href={cp.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-mono border px-4 py-2 hover:!bg-white hover:!text-black hover:!border-white transition-all duration-200 rounded-none shrink-0 font-bold self-end"
                              style={{ 
                                backgroundColor: activeAccent.primary,
                                borderColor: activeAccent.primary,
                                color: activeAccent.isDarkText ? '#000000' : '#ffffff',
                              }}
                            >
                              <span className="uppercase">
                                {cp.name.toLowerCase().includes('rehub') ? 'VISIT REHUBCY.COM' :
                                 cp.name.toLowerCase().includes('crux') ? 'VISIT CRUXCY.COM' :
                                 cp.name.toLowerCase().includes('connection') ? 'CONNECTIONCYPRUS' :
                                 cp.name.toLowerCase().includes('casa caravan') ? 'casacaravanshop.com' : 'VISIT WEB PORTAL'}
                              </span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </main>

        </div>

      {/* SYSTEM STATUS FOOTER */}
      <footer 
        className="border-t px-4 py-3 text-[10px] sm:text-[11px] font-mono font-bold tracking-tight flex flex-col sm:flex-row justify-between items-center bg-black gap-2 select-none shrink-0 rounded-none transition-colors duration-200"
        style={{ borderColor: activeAccent.primary, color: activeAccent.primary }}
      >
        <div className="flex flex-wrap items-center gap-x-1 gap-y-1">
          {[
            { key: 'baria', label: 'BariaDAO', href: 'https://baria.bparlan.com' },
            { key: 'blog', label: 'BLOG', href: 'https://wp.bparlan.com' },
            { key: 'n8n', label: 'n8n', href: 'https://n8n.bparlan.com' },
            { key: 'meet', label: 'MEET', href: 'https://meet.bparlan.com' },
            { key: 'start', label: 'START', href: 'https://start.bparlan.com' },
          ].map((link, idx, arr) => {
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

    </div>
  );
}
