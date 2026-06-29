export interface SocialLink {
  name: string;
  url: string;
  category: 'Social' | 'Writing' | 'Formality' | 'Community' | 'Aggregator';
  icon: string;
  description?: string;
}

export interface ActiveEngagement {
  title: string;
  url: string;
  description: string;
  category: 'The Engine' | 'The Fortress' | 'The Vault';
  problem: string;
  architecture: string;
  repository: string;
}

export interface EducationalOffer {
  title: string;
  url: string;
  description: string;
  annotation?: string;
}

export interface Web3ResearchItem {
  title: string;
  platform: string;
  url: string;
  type: string;
  summary: string;
  date?: string;
  buttonText?: string;
}

export interface TimelineEvent {
  period: string;
  role: string;
  location: string;
  description: string;
}

export interface WalletAddress {
  chain: string;
  symbol: string;
  address: string;
  label: string;
}

export interface CollaborationPartner {
  name: string;
  role: string;
  description: string;
  url?: string;
}
