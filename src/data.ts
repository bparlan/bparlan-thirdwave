import { 
  SocialLink, 
  Web3ResearchItem, 
  WalletAddress, 
  CollaborationPartner, 
  ActiveEngagement,
  ConsultServiceData
} from './types';

export const BIO_SUMMARY = {
  name: "Barış Parlan",
  handle: "@bparlan",
  tagline: "Artist, Researcher, Consultant",
  extendedBio: "Born critical, born curious: Barış Parlan. Grew up with his first computer, learned to speak in code before he learned to speak to people. Then he refused to plug into systems without questioning them - resigned from banks, from academia, from fixed identity. Now he works at the intersection of blockchain, AI, and open-source tools as a VJ, DJ, and digital storyteller. Producing globally, building connections, liberating tools.",
  locations: ["Cyprus 🇨🇾", "Istanbul 🇹🇷", "Bangkok 🇹🇭"],
  roles: ["Consultant", "Designer", "Artist", "VJ & DJ", "Educator"]
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Twitter / X", url: "https://x.com/bparlan", category: "Social", description: "Daily Web3 research insights & artistic experiment outputs." },
  { name: "GitHub", url: "https://github.com/bparlan", category: "Social", description: "Code snippets, setup scripts, and experiment logs." },
  { name: "POAP Collector Gallery", url: "https://collectors.poap.xyz/scan/bparlan.eth", category: "Social", description: "Verified on-chain attendance proof (POAP) collector gallery for bparlan.eth." },
  { name: "Warpcast / Farcaster", url: "https://warpcast.com/bparlan", category: "Social", description: "Decentralized social streams via Warpcast nodes." },
  { name: "Lens Protocol", url: "https://share.lens.xyz/u/bparlan", category: "Social", description: "On-chain digital social graphs." },
  { name: "Hey (Lens Client)", url: "https://hey.xyz/u/bparlan", category: "Social", description: "On-chain publication streams and discussions on Hey.xyz." },
  { name: "Zora Co", url: "https://zora.co/@bparlan/", category: "Social", description: "Collectibles, visual artwork editions, and on-chain audio/video media." },
  { name: "Bluesky", url: "https://bsky.app/profile/bparlan.com", category: "Social", description: "Open-standard social network protocol feed." },
  { name: "Mastodon", url: "https://mastodon.social/@bparlan", category: "Social", description: "Federated social space node representation." },
  { name: "Substack", url: "https://bparlan.substack.com", category: "Writing", description: "Weekly critical science, tech & societal newsletters. Creative space for #BariaDAO." },
  { name: "WordPress Blog Archive", url: "https://wp.bparlan.com", category: "Writing", description: "Legacy WordPress blog archive representing early tech thought streams, systems engineering journals, and essays." },
  { name: "Paragraph Newsletter", url: "https://paragraph.com/@parlan/", category: "Writing", description: "Sovereign web3 newsletter platform securing written coordination." },
  { name: "Paragraph", url: "https://paragraph.xyz/@parlan", category: "Writing", description: "Multi-writer publishing ecosystem backed by digital collectibility." },
  { name: "Medium", url: "https://medium.com/@bparlan", category: "Writing", description: "In-depth analytics, DEX comparisons, and technical essays." },
  { name: "LinkedIn", url: "https://linkedin.com/in/bparlan", category: "Formality", description: "Traditional corporate alignment, professional history, and network." },
  { name: "Academia.edu", url: "https://independent.academia.edu/bparlan", category: "Formality", description: "Thesis preprints, cultural essays, visual reviews, and archives." },
  { name: "Google Scholar", url: "https://scholar.google.com/citations?user=xxwBnUoAAAAJ", category: "Formality", description: "Research citation footprints and indexing logs." },
  { name: "ResearchGate", url: "https://www.researchgate.net/profile/Baris-Parlan", category: "Formality", description: "Digital humanities network and shared scientific reviews." },
  { name: "Humanities Commons", url: "https://hcommons.org/members/bparlan/", category: "Formality", description: "Interdisciplinary digital archives and research hubs." },
  { name: "BariaDAO Discord", url: "https://discord.gg/BcEr4jmK8c", category: "Community", description: "Sovereign coordination network and BariaDAO server ecosystem." },
  { name: "BariaDAO Telegram", url: "https://t.me/bariadao", category: "Community", description: "High-level macro market discussions and quick alerts group." },
  { name: "Linktree Directory", url: "https://linktr.ee/bparlan", category: "Aggregator", description: "Legacy link mapping directory representing early routing setups." },
  { name: "Luma Events", url: "https://lu.ma/u/bparlan", category: "Aggregator", description: "Hosted meetups, live workshops, crypto salons and calendar nodes." }
];

export const ACTIVE_ENGAGEMENTS: ActiveEngagement[] = [
  {
    title: "OhMyPi",
    url: "https://pi.bparlan.com",
    description: "Personal AI coding agent and terminal orchestration toolkit.",
    category: "The Engine",
    problem: "Developers lack integrated, context-aware AI assistance within their terminal workflows.",
    architecture: "Modular TUI shell with persona-based AI orchestration.",
    repository: "https://github.com/bparlan/pi-persona-orchestrator"
  },
  {
    title: "Autonomedia",
    url: "https://autonomedia.bparlan.com",
    description: "Decentralized media publication and archival toolkit.",
    category: "The Vault",
    problem: "Creative works on legacy platforms are subject to censorship and platform lock-in.",
    architecture: "On-chain publication protocols with IPFS storage.",
    repository: "https://github.com/bparlan/autonomedia"
  },
  {
    title: "BariaDAO",
    url: "https://baria.bparlan.com",
    description: "Sovereign coordination network for digital autonomy.",
    category: "The Fortress",
    problem: "Traditional organizations lack transparent, programmable governance.",
    architecture: "Token-governed DAO with proposal frameworks.",
    repository: "https://github.com/bparlan/baria"
  },
  {
    title: "GroupPay",
    url: "https://grouppay.bparlan.com",
    description: "Collaborative payment infrastructure for shared expenses.",
    category: "The Engine",
    problem: "Group payments lack transparent, trust-minimized splitting mechanisms.",
    architecture: "Smart contract vaults with automated split calculations.",
    repository: "https://github.com/bparlan/grouppay"
  }
];

export const WEB3_RESEARCH: Web3ResearchItem[] = [
  { title: "Yo Protocol's Unseen Dangers: Why Code Audits Aren't Enough", summary: "A Deep Dive into Centralization Risks, MEV Vulnerabilities, and Critical Bug Bounty Gaps in DeFi's Yield Optimizer.", url: "https://paragraph.com/@parlan/yo-protocols-unseen-dangers-why-code-audits-arent-enough", date: "Sep 2025" },
  { title: "Stargate Focused DEX Usage Comparison", summary: "Comparative analysis analyzing slippages, routing paths, atomic pools, and gas efficiencies across multiple layer-zero-powered DEX swaps.", url: "https://medium.com/@bparlan/stargate-focused-dex-usage-comparison-a885369a1974", date: "Aug 2023" },
  { title: "Merit Circle DAO: Asset Allocation and Yield Strategies", summary: "Proposals outlining low-slippage stablecoin yield strategies and gaming nft vaulting across layer-2 clusters.", url: "https://research.bparlan.com/merit-submission", date: "May 2023" },
  { title: "Origin Protocol: Prime Tokenomics Upgrades", summary: "Governance-level audit of automatic staking thresholds, liquidity incentives, and gasless claim channels for prime holders.", url: "https://research.bparlan.com/origin-submission", date: "Jan 2023" },
  { title: "NFTKey Volume Dynamics & Platform Fees Analysis", summary: "On-chain inspection of bulk bidding modules, secondary royalties structures, and community-led revenue models for multichain NFT aggregators.", url: "https://x.com/bparlan/status/1598141873029537793", date: "Dec 2022" }
];

export const WALLETS: WalletAddress[] = [
  { chain: "Ethereum", symbol: "ETH", address: "0xaD5d1F9e5B07ea8ABD262Ed16aAF21cfa9C8EB18", label: "Main Vault" },
  { chain: "Bitcoin", symbol: "BTC", address: "bc1qn9k8takjzd00cldfcs0flpjezlnyu4w4kw7c2u", label: "Cold Storage" },
  { chain: "Solana", symbol: "SOL", address: "Dm3n3eK8LrTZzxm5QCoHPRSoNZkvC8FzjnUKQkXqYTQG", label: "Speed Wallet" }
];

export const COLLABORATION_PARTNERS: CollaborationPartner[] = [
  { name: "ReHub", role: "Practice Space Network", description: "Flexible practice space network for rehabilitation & wellness, connecting professionals with on-demand working environments globally. Technology consultant since inception.", url: "https://rehubcy.com/" },
  { name: "Crux", role: "Visual Communication Studio", description: "Connecting brands with independent artists designing UI/UX, product design, brand identity, and custom web applications. Serving as Lead Tech Consultant.", url: "https://www.cruxcy.com/" },
  { name: "ConnectionCyprus", role: "Documentary Production", description: "Documentary broadcast telling stories on Cypriot culture, heritage, and regional narratives. Designing deployment platform workflows.", url: "https://www.youtube.com/@connectioncyprus" },
  { name: "Casa Caravan", role: "Living Marketplace & Ecosystem", description: "Sustainable living marketplace and community workshops ranging from artisanal wellness products to soundscapes. Guiding as Digital Mentor.", url: "https://casacaravanshop.com/" }
];

const getOnChainSupportData = (wallets: WalletAddress[]) => {
  const data: any = {};
  wallets.forEach(wallet => {
    switch (wallet.symbol.toUpperCase()) {
      case 'ETH': data.ethereum = { address: wallet.address, label: wallet.chain }; break;
      case 'BTC': data.bitcoin = { address: wallet.address, label: wallet.chain }; break;
      case 'SOL': data.solana = { address: wallet.address, label: wallet.chain }; break;
    }
  });
  return data as ConsultServiceData['onChainSupport'];
};

export const CONSULT_DATA: ConsultServiceData = {
  title: "CONSULT",
  intro: "<strong>Technology Adaptation & System Architecture</strong> I do not teach vague theory; I help you adapt to technological change. We build custom, sovereign digital infrastructures.",
  tiers: [
    { title: "The Diagnostic (Technology Status Analysis)", duration: "60–90 Minute 1-on-1 Assessment", description: "Mandatory starting point. We assess your digital footprint and deploy baseline digital defenses.", cta: "Book Status Analysis" },
    { title: "Custom Integration Sessions", duration: "Flexible, Hands-On Pair Integration", description: "Co-create a personalized roadmap focused on your specific technical needs. We build exactly what you need based on the research required for your stack.", cta: "By Invitation Only" },
    { title: "Ongoing Mentorship & Project Management", duration: "Bi-Weekly/Monthly Engagements", description: "Continuous strategic oversight for creators and organizations executing complex digital shifts.", cta: "Inquire During Diagnostic" }
  ],
  onChainSupport: getOnChainSupportData(WALLETS)
};
