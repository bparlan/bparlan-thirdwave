import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Globe, BookOpen, Layers, Zap, Folder, ExternalLink, ArrowRight, Search, Check, Copy, Calendar, Send } from 'lucide-react';
import { ThemeAccent } from './Types';
import { getCategoryColor } from './ThemeUtils';
import { BIO_SUMMARY, WEB3_RESEARCH, WALLETS, COLLABORATION_PARTNERS, ACTIVE_ENGAGEMENTS, CONSULT_DATA } from '../../data';

interface MainContentProps {
  activeTab: string;
  activeAccent: ThemeAccent;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredLinks: any[];
  copiedSymbol: string | null;
  hoveredCopySymbol: string | null;
  setHoveredCopySymbol: (s: string | null) => void;
  copyAddressToClipboard: (address: string, symbol: string) => void;
}

export const MainContent: React.FC<MainContentProps> = ({
  activeTab,
  activeAccent,
  searchQuery,
  setSearchQuery,
  filteredLinks,
  copiedSymbol,
  hoveredCopySymbol,
  setHoveredCopySymbol,
  copyAddressToClipboard
}) => {
  const hoverClasses = "hover:!bg-white hover:!text-black hover:!border-white transition-all duration-200";
  const monoFont = { fontFamily: '"JetBrains Mono", monospace' };

  return (
    <main className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col justify-start bg-black scrollbar-thin min-w-0" style={monoFont}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="space-y-6 w-full max-w-none"
        >
          {activeTab === 'bio' && (
            <div id="viewport_bio" className="space-y-6 w-full">
              <div className="flex items-center justify-between border-b py-3.5 border-neutral-800">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase flex items-center gap-2 leading-none" style={monoFont}>
                  <Terminal className="w-5 h-5 shrink-0" style={{ color: activeAccent.primary }} />
                  <span>~/ABOUT_ME</span>
                </h2>
                <div className="text-sm font-bold" style={{ color: activeAccent.primary }}>// KEY_ID: {BIO_SUMMARY.handle.toUpperCase()}</div>
              </div>
              <div className="space-y-6 text-sm text-neutral-300 leading-relaxed w-full" style={monoFont}>
                <div>
                    <h1 className="text-3xl font-extrabold text-white uppercase tracking-tight" style={monoFont}>{BIO_SUMMARY.name}</h1>
                    <div className="text-lg font-bold mt-2 text-white">{">"} {BIO_SUMMARY.roles[2]}, {BIO_SUMMARY.roles[1]}, {BIO_SUMMARY.roles[0]}</div>
                </div>
                
                <p className="text-base text-neutral-300 border border-neutral-700 p-4 bg-neutral-950">BRINGING 30+ YEARS OF I.T. EXPERIENCE, FLUENT IN THE DIALECTS OF TERMINALS, MEDIA ART, AND DECENTRALIZED PROTOCOLS.</p>
                <p className="text-base text-neutral-300">{BIO_SUMMARY.extendedBio}</p>
                
                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div>
                    <h4 className="text-xs font-bold text-neutral-500 uppercase mb-3">Roles</h4>
                    <ul className="space-y-1">
                      {BIO_SUMMARY.roles.map(role => <li key={role} className="text-white">{role}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-500 uppercase mb-3">Locations</h4>
                    <ul className="space-y-1">
                      {BIO_SUMMARY.locations.map(loc => <li key={loc} className="text-white">{loc}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border border-neutral-800 p-6 bg-neutral-950 flex items-center justify-between gap-6">
                   <div>
                       <h4 className="text-xs font-bold text-neutral-500 uppercase mb-3">Direct Broadcast Transmission</h4>
                       <p className="text-xs">Subscribe to my newsletter on Paragraph to acquire direct digital coordination updates & critical studies first.</p>
                   </div>
                   <a href="https://paragraph.com/@bparlan/subscribe" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 text-sm border px-6 py-3 transition-all duration-200 rounded-none font-bold text-black shrink-0 ${hoverClasses}`} style={{ backgroundColor: activeAccent.primary, borderColor: activeAccent.primary }}>
                       SUBSCRIBE NEWSLETTER
                   </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'links' && (
            <div id="viewport_links" className="space-y-8" style={monoFont}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase flex items-center gap-3 border-b py-4 border-neutral-800" style={monoFont}>
                <Globe className="w-6 h-6 shrink-0" style={{ color: activeAccent.primary }} />
                <span>~/LINKS</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLinks.map((link, i) => (
                    <div key={i} className="p-5 border border-neutral-800 bg-neutral-950 flex flex-col justify-between">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-bold text-white" style={monoFont}>{link.name}</h4>
                            <span className="text-[10px] px-2 py-0.5 border border-neutral-700 text-black font-bold" style={{ backgroundColor: getCategoryColor(link.category) }}>{link.category.toUpperCase()}</span>
                        </div>
                        <p className="text-sm text-neutral-400 mb-4" style={monoFont}>{link.description}</p>
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className={`text-xs font-bold inline-flex items-center justify-center gap-2 p-3 text-black ${hoverClasses}`} style={{ backgroundColor: activeAccent.primary, borderColor: activeAccent.primary }}>VISIT LINK <ExternalLink className="w-3 h-3" /></a>
                    </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'research' && (
            <div id="viewport_research" className="space-y-8" style={monoFont}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase flex items-center gap-3 border-b py-4 border-neutral-800" style={monoFont}>
                <BookOpen className="w-6 h-6 shrink-0" style={{ color: activeAccent.primary }} />
                <span>~/RESEARCH</span>
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {WEB3_RESEARCH.map((r, i) => (
                    <div key={i} className="p-6 border border-neutral-800 bg-neutral-950 flex flex-col gap-3">
                        <div className="flex justify-between items-start">
                            <h4 className="text-lg font-bold text-white leading-snug" style={monoFont}>{r.title}</h4>
                            <span className="text-[10px] text-neutral-500 whitespace-nowrap ml-4">{r.date}</span>
                        </div>
                        <p className="text-sm text-neutral-400 flex-grow" style={monoFont}>{r.summary}</p>
                        <a href={r.url} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2 text-sm border px-6 py-3 transition-all duration-200 rounded-none font-bold text-black ${hoverClasses}`} style={{ backgroundColor: activeAccent.primary, borderColor: activeAccent.primary }}>
                            READ PAPER <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'active' && (
            <div id="viewport_active" className="space-y-8" style={monoFont}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase flex items-center gap-3 border-b py-4 border-neutral-800" style={monoFont}>
                <Layers className="w-6 h-6 shrink-0" style={{ color: activeAccent.primary }} />
                <span>~/BUILDING</span>
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {ACTIVE_ENGAGEMENTS.map((a, i) => (
                    <div key={i} className="p-6 border border-neutral-800 bg-neutral-950 space-y-3 flex flex-col justify-between">
                        <h4 className="text-lg font-bold text-white" style={monoFont}>{a.title}</h4>
                        <p className="text-sm text-white" style={monoFont}>{a.description}</p>
                        <div className="text-xs text-neutral-300 italic" style={monoFont}>Problem: {a.problem}</div>
                        <div className="text-xs text-neutral-300 italic" style={monoFont}>Architecture: {a.architecture}</div>
                        <a href={a.repository} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2 text-sm border px-6 py-3 transition-all duration-200 rounded-none font-bold text-black ${hoverClasses}`} style={{ backgroundColor: activeAccent.primary, borderColor: activeAccent.primary }}>
                            VIEW REPO <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'consult' && (
            <div id="viewport_consult" className="space-y-8" style={monoFont}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase flex items-center gap-3 border-b py-4 border-neutral-800" style={monoFont}>
                <Send className="w-6 h-6 shrink-0" style={{ color: activeAccent.primary }} />
                <span>~/CONSULT</span>
              </h2>
              <section className="space-y-6">
                <div className="text-neutral-300 leading-relaxed text-sm max-w-3xl" dangerouslySetInnerHTML={{ __html: CONSULT_DATA.intro }} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {CONSULT_DATA.tiers.map((tier, i) => (
                        <div key={i} className="p-6 border border-neutral-800 bg-neutral-950 rounded-none flex flex-col justify-between">
                            <div>
                                <h4 className="text-lg font-bold uppercase text-white tracking-tight mb-2" style={monoFont}>{tier.title}</h4>
                                <div className="text-xs font-bold uppercase mb-4" style={{ color: activeAccent.primary }}>{tier.duration}</div>
                                <p className="text-sm text-neutral-400 mb-6">{tier.description}</p>
                            </div>
                            <a href="https://meet.bparlan.com" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2 text-sm border px-6 py-3 transition-all duration-200 rounded-none font-bold text-white ${hoverClasses}`} style={{ borderColor: activeAccent.primary, backgroundColor: activeAccent.primary }}>
                                {tier.cta} <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>

                <h3 className="text-xl font-extrabold text-white uppercase tracking-tight pt-6 border-t border-neutral-800" style={monoFont}>On-Chain Wallets</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(CONSULT_DATA.onChainSupport).map(([key, w]) => {
                    const color = key === 'bitcoin' ? '#f97316' : key === 'ethereum' ? '#3b82f6' : '#a855f7';
                    const fullAddress = key === 'bitcoin' ? 'bc1qjlaewjvmdr527vtaa7mx6hjhhtpnar3anmkyfe' : key === 'ethereum' ? '0xaD5d1F9e5B07ea8ABD262Ed16aAF21cfa9C8EB18' : 'Dm3n3eK8LrTZzxm5QCoHPRSoNZkvC8FzjnUKQkXqYTQG';
                    const shortAddress = `${fullAddress.slice(0, 4)}...${fullAddress.slice(-4)}`;
                    const labels = { bitcoin: "BTC; Native Segwit", ethereum: "ETH; EVM L1 & L2, bparlan.eth", solana: "SOL; bparlan.sol" };

                    return (
                      <div key={key} className="p-6 border border-neutral-800 bg-neutral-950 flex flex-col gap-4 rounded-none text-center" style={monoFont}>
                        <div className="text-base font-bold uppercase" style={{ color }}>{w.label}</div>
                        <div className="text-xs text-gray-400">{labels[key as keyof typeof labels]}</div>
                        <code className="text-xl font-bold py-4">{shortAddress}</code>
                        <div className="mt-2 flex justify-center z-10 relative">
                            <button 
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    copyAddressToClipboard(fullAddress, key);
                                }}
                                className="text-sm font-bold flex items-center gap-2 p-3 border transition-all duration-200 cursor-pointer hover:bg-white hover:text-black hover:border-white"
                                style={{ borderColor: color, color: color }}
                            >
                              {copiedSymbol === key ? <><Check className="w-5 h-5" /> COPIED</> : <><Copy className="w-5 h-5" /> COPY ADDRESS</>}
                            </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          )}

          {activeTab === 'partners' && (
            <div id="viewport_partners" className="space-y-8" style={monoFont}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase flex items-center gap-3 border-b py-4 border-neutral-800" style={monoFont}><Zap className="w-6 h-6 shrink-0" style={{ color: activeAccent.primary }} /><span>~/PARTNERS</span></h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {COLLABORATION_PARTNERS.map(cp => (
                  <div key={cp.name} className="p-6 border bg-neutral-950 border-neutral-800 flex flex-col justify-between gap-6 rounded-none">
                    <h3 className="text-xl font-extrabold text-white uppercase tracking-tight" style={monoFont}>{cp.name}</h3>
                    <p className="text-sm text-neutral-400" style={monoFont}><span className="font-bold uppercase text-white">{cp.role}</span> - {cp.description}</p>
                    {cp.url && (
                      <a href={cp.url} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2 text-sm border px-6 py-3 transition-all duration-200 rounded-none font-bold text-black ${hoverClasses}`} style={{ backgroundColor: activeAccent.primary, borderColor: activeAccent.primary }}>
                        <span>VISIT {cp.name.toUpperCase()}</span><ExternalLink className="w-4 h-4" />
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
  );
};
