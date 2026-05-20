import { 
  SocialLink, 
  Web3ResearchItem, 
  WalletAddress, 
  CollaborationPartner, 
  ActiveEngagement, 
  EducationalOffer 
} from './types';

export const BIO_SUMMARY = {
  name: "Barış Parlan",
  handle: "@bparlan",
  tagline: "Artist, Researcher, Educator",
  shortDescription: "Digital-native, experimenting art, compute to appreciate the use of knowledge in society.",
  extendedBio: "Natural-born critical curious who grew into a nerd digital storyteller. Bankless, stateless, divorced, resigned, and a Ph.D. dropout to commit full-time on the blockchain. Bringing 30+ years of IT experience, fluent in the dialects of terminals, art, and decentralized networks.",
  locations: ["Cyprus 🇨🇾", "Istanbul 🇹🇷", "Bangkok 🇹🇭"],
  roles: ["Consultant", "Designer", "Artist", "Visual Jockey (VJ) & DJ", "Teacher"]
};

export const SOCIAL_LINKS: SocialLink[] = [
  // --- socials ---
  {
    name: "Twitter / X",
    url: "https://x.com/bparlan",
    category: "Social",
    icon: "Twitter",
    description: "Daily Web3 research insights & artistic experiment outputs."
  },
  {
    name: "GitHub",
    url: "https://github.com/bparlan",
    category: "Social",
    icon: "Github",
    description: "Code snippets, setup scripts, and experiment logs."
  },
  {
    name: "POAP Collector Gallery",
    url: "https://collectors.poap.xyz/scan/bparlan.eth",
    category: "Social",
    icon: "Award",
    description: "Verified on-chain attendance proof (POAP) collector gallery for bparlan.eth."
  },
  {
    name: "Warpcast / Farcaster",
    url: "https://warpcast.com/bparlan",
    category: "Social",
    icon: "Activity",
    description: "Decentralized social streams via Warpcast nodes."
  },
  {
    name: "Lens Protocol",
    url: "https://share.lens.xyz/u/bparlan",
    category: "Social",
    icon: "Sparkles",
    description: "On-chain digital social graphs."
  },
  {
    name: "Hey (Lens Client)",
    url: "https://hey.xyz/u/bparlan",
    category: "Social",
    icon: "MessageSquare",
    description: "On-chain publication streams and discussions on Hey.xyz."
  },
  {
    name: "Zora Co",
    url: "https://zora.co/@bparlan/",
    category: "Social",
    icon: "Layers",
    description: "Collectibles, visual artwork editions, and on-chain audio/video media."
  },
  {
    name: "Bluesky",
    url: "https://bsky.app/profile/bparlan.com",
    category: "Social",
    icon: "Wind",
    description: "Open-standard social network protocol feed."
  },
  {
    name: "Mastodon",
    url: "https://mastodon.social/@bparlan",
    category: "Social",
    icon: "Network",
    description: "Federated social space node representation."
  },

  // --- writing & publications ---
  {
    name: "Substack",
    url: "https://bparlan.substack.com",
    category: "Writing",
    icon: "BookOpen",
    description: "Weekly critical science, tech & societal newsletters. Creative space for #BariaDAO."
  },
  {
    name: "WordPress Blog Archive",
    url: "https://wp.bparlan.com",
    category: "Writing",
    icon: "Archive",
    description: "Legacy WordPress blog archive representing early tech thought streams, systems engineering journals, and essays."
  },
  {
    name: "Paragraph Newsletter",
    url: "https://paragraph.com/@parlan/",
    category: "Writing",
    icon: "Send",
    description: "Sovereign web3 newsletter platform securing written coordination."
  },
  {
    name: "Paragraph",
    url: "https://paragraph.xyz/@parlan",
    category: "Writing",
    icon: "FileEdit",
    description: "Multi-writer publishing ecosystem backed by digital collectibility."
  },
  {
    name: "Medium",
    url: "https://medium.com/@bparlan",
    category: "Writing",
    icon: "Hash",
    description: "In-depth analytics, DEX comparisons, and technical essays."
  },

  // --- formality & academics ---
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/bparlan",
    category: "Formality",
    icon: "Linkedin",
    description: "Traditional corporate alignment, professional history, and network."
  },
  {
    name: "Academia.edu",
    url: "https://independent.academia.edu/bparlan",
    category: "Formality",
    icon: "GraduationCap",
    description: "Thesis preprints, cultural essays, visual reviews, and archives."
  },
  {
    name: "Google Scholar",
    url: "https://scholar.google.com/citations?user=xxwBnUoAAAAJ",
    category: "Formality",
    icon: "Library",
    description: "Research citation footprints and indexing logs."
  },
  {
    name: "ResearchGate",
    url: "https://www.researchgate.net/profile/Baris-Parlan",
    category: "Formality",
    icon: "SearchCode",
    description: "Digital humanities network and shared scientific reviews."
  },
  {
    name: "Humanities Commons",
    url: "https://hcommons.org/members/bparlan/",
    category: "Formality",
    icon: "Globe",
    description: "Interdisciplinary digital archives and research hubs."
  },

  // --- chats & groups ---
  {
    name: "BariaDAO Discord",
    url: "https://discord.gg/BcEr4jmK8c",
    category: "Community",
    icon: "ShieldAlert",
    description: "Sovereign coordination network and BariaDAO server ecosystem."
  },
  {
    name: "BariaDAO Telegram",
    url: "https://t.me/bariadao",
    category: "Community",
    icon: "Flame",
    description: "High-level macro market discussions and quick alerts group."
  },

  // --- indexers ---
  {
    name: "Linktree Directory",
    url: "https://linktr.ee/bparlan",
    category: "Aggregator",
    icon: "TreePine",
    description: "Legacy link mapping directory representing early routing setups."
  },
  {
    name: "Luma Events",
    url: "https://lu.ma/u/bparlan",
    category: "Aggregator",
    icon: "Calendar",
    description: "Hosted meetups, live workshops, crypto salons and calendar nodes."
  }
];

export const ACTIVE_ENGAGEMENTS: ActiveEngagement[] = [
  {
    title: "BariaDAO",
    url: "https://baria.bparlan.com/",
    description: "Active on-chain ecosystem coordination and education DAO hub."
  }
];

export const EDUCATIONAL_OFFERS: EducationalOffer[] = [
  {
    title: "One-on-One Meet Session",
    url: "https://cal.bparlan.com/bparlan/meet",
    description: "Direct booking for research mentoring, tech consultancy, and collaboration reviews."
  },
  {
    title: "The Architecture of a Free Person",
    url: "https://start.bparlan.com/",
    description: "A premium, 3 X 90 Minute 1-on-1 Online Educational Session helping individuals master the key sovereign digital tools shaping our world."
  }
];

export const WEB3_RESEARCH: Web3ResearchItem[] = [
  {
    title: "Yo Protocol's Unseen Dangers: Why Code Audits Aren't Enough",
    platform: "Paragraph",
    url: "https://paragraph.com/@parlan/yo-protocols-unseen-dangers-why-code-audits-arent-enough",
    type: "Project Research",
    summary: "A Deep Dive into Centralization Risks, MEV Vulnerabilities, and Critical Bug Bounty Gaps in DeFi's Yield Optimizer.",
    date: "Sep 2025",
    buttonText: "READ PARAGRAPH ARTICLE"
  },
  {
    title: "Stargate Focused DEX Usage Comparison",
    platform: "medium",
    url: "https://medium.com/@bparlan/stargate-focused-dex-usage-comparison-a885369a1974",
    type: "onchain analysis",
    summary: "Comparative analysis analyzing slippages, routing paths, atomic pools, and gas efficiencies across multiple layer-zero-powered DEX swaps.",
    date: "Aug 2023",
    buttonText: "READ MEDIUM ARTICLE"
  },
  {
    title: "Merit Circle DAO: Asset Allocation and Yield Strategies",
    platform: "PrimeDAO Submission",
    url: "https://snapshot.org/#/s:primerating.eth/proposal/0xc05a8a07642a4fb4f94efa2e4cbcc7c0e87c603471f4b8a4fed88dd59dde013a",
    type: "project research",
    summary: "Proposals outlining low-slippage stablecoin yield strategies and gaming nft vaulting across layer-2 clusters.",
    date: "May 2023",
    buttonText: "VIEW MERIT SUBMISSION"
  },
  {
    title: "Origin Protocol: Prime Tokenomics Upgrades",
    platform: "PrimeDAO Submission",
    url: "https://snapshot.org/#/s:primerating.eth/proposal/0x1dad7b383a0cde5f15a3acbf3e3c52ba0bde691662059c68dc8952908c9dc800",
    type: "project research",
    summary: "Governance-level audit of automatic staking thresholds, liquidity incentives, and gasless claim channels for prime holders.",
    date: "Jan 2023",
    buttonText: "VIEW PRIMEDAO SUBMISSION"
  },
  {
    title: "NFTKey Volume Dynamics & Platform Fees Analysis",
    platform: "twitter thread",
    url: "https://x.com/bparlan/status/1598141873029537793",
    type: "onchain analysis",
    summary: "On-chain inspection of bulk bidding modules, secondary royalties structures, and community-led revenue models for multichain NFT aggregators.",
    date: "Dec 2022",
    buttonText: "VIEW TWITTER THREAD"
  }
];

export const WALLETS: WalletAddress[] = [
  {
    chain: "BITCOIN",
    symbol: "BTC",
    address: "bc1qjlaewjvmdr527vtaa7mx6hjhhtpnar3anmkyfe",
    label: "BTC; Native Segwit"
  },
  {
    chain: "ETHEREUM",
    symbol: "ETH",
    address: "0xaD5d1F9e5B07ea8ABD262Ed16aAF21cfa9C8EB18",
    label: "ETH; EVM L1 & L2, bparlan.eth"
  },
  {
    chain: "SOLANA",
    symbol: "SOL",
    address: "Dm3n3eK8LrTZzxm5QCoHPRSoNZkvC8FzjnUKQkXqYTQG",
    label: "SOL; bparlan.sol"
  }
];

export const COLLABORATION_PARTNERS: CollaborationPartner[] = [
  {
    name: "ReHub",
    role: "Practice Space Network",
    description: "Flexible practice space network for rehabilitation & wellness, connecting professionals with on-demand working environments globally. Technology consultant since inception.",
    url: "https://rehubcy.com/"
  },
  {
    name: "Crux",
    role: "Visual Communication Studio",
    description: "Connecting brands with independent artists designing UI/UX, product design, brand identity, and custom web applications. Serving as Lead Tech Consultant.",
    url: "https://www.cruxcy.com/"
  },
  {
    name: "ConnectionCyprus",
    role: "Documentary Production",
    description: "Documentary broadcast telling stories on Cypriot culture, heritage, and regional narratives. Designing deployment platform workflows.",
    url: "https://www.youtube.com/@connectioncyprus"
  },
  {
    name: "Casa Caravan",
    role: "Living Marketplace & Ecosystem",
    description: "Sustainable living marketplace and community workshops ranging from artisanal wellness products to soundscapes. Guiding as Digital Mentor.",
    url: "https://casacaravanshop.com/"
  }
];
