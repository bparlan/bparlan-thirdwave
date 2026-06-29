import React, { useState, useEffect } from 'react';
import { getAccentForTab } from './terminal/ThemeUtils';
import { Header } from './terminal/Header';
import { LeftSidebar } from './terminal/panels/LeftSidebar';
import { MainContent } from './terminal/MainContent';
import { Footer } from './terminal/Footer';
import { SOCIAL_LINKS } from '../data';

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
        timeoutId = setTimeout(() => setTypewriterText(prev => prev.slice(0, -1)), 60);
      } else {
        setIsErasing(false);
        const remainingIndices = Array.from({ length: artistWords.length }, (_, i) => i).filter(i => i !== wordIdx);
        setWordIdx(remainingIndices[Math.floor(Math.random() * remainingIndices.length)]);
      }
    } else {
      if (typewriterText.length < currentWord.length) {
        timeoutId = setTimeout(() => setTypewriterText(currentWord.substring(0, typewriterText.length + 1)), 110);
      } else {
        timeoutId = setTimeout(() => setIsErasing(true), 1800);
      }
    }
    return () => clearTimeout(timeoutId);
  }, [typewriterText, isErasing, wordIdx]);

  const activeAccent = getAccentForTab(activeTab);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary-color', activeAccent.primary);
    root.style.setProperty('--color-glow-color', activeAccent.glow);
  }, [activeAccent]);

  const copyAddressToClipboard = async (address: string, symbol: string) => {
    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        await navigator.clipboard.writeText(address);
        setCopiedSymbol(symbol);
        setTimeout(() => setCopiedSymbol(null), 2000);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = address;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setCopiedSymbol(symbol);
        setTimeout(() => setCopiedSymbol(null), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const filteredLinks = SOCIAL_LINKS.filter(l => {
    const q = searchQuery.toLowerCase();
    return l.name.toLowerCase().includes(q) || l.category.toLowerCase().includes(q) || (l.description && l.description.toLowerCase().includes(q));
  });

  return (
    <div
      id="grand_terminal_screen"
      className="w-screen h-screen flex flex-col items-stretch justify-start text-neutral-200 bg-black font-mono overflow-y-auto border-[5px]"
      style={{ borderColor: activeAccent.primary }}
    >
      <style>{`
        #grand_terminal_screen ::selection { 
          background-color: ${activeAccent.primary} !important; 
          color: #ffffff !important; 
        }
      `}</style>
      <Header activeAccent={activeAccent} activeTab={activeTab} typewriterText={typewriterText} />
      <div className="flex-1 flex flex-col lg:flex-row items-stretch justify-start min-h-0 bg-black">
        <LeftSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setSearchQuery={setSearchQuery}
          hoveredTab={hoveredTab}
          setHoveredTab={setHoveredTab}
        />
        <MainContent
          activeTab={activeTab}
          activeAccent={activeAccent}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filteredLinks={filteredLinks}
          copiedSymbol={copiedSymbol}
          hoveredCopySymbol={hoveredCopySymbol}
          setHoveredCopySymbol={setHoveredCopySymbol}
          copyAddressToClipboard={copyAddressToClipboard}
        />
      </div>
      <Footer activeAccent={activeAccent} hoveredBottomLink={hoveredBottomLink} setHoveredBottomLink={setHoveredBottomLink} />
    </div>
  );
}
