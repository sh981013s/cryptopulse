export type Coin = {
  id: string;
  is_active: boolean;
  is_new: false;
  name: string;
  rank: number;
  symbol: string;
  type: string;
  quotes: {
    USD: {
      price: number;
    };
  };
};

type PriceQuote = {
  price: number;
  volume_24h: number;
  volume_7d: number;
  volume_30d: number;
  market_cap: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
};

export type CoinDetail = {
  id: string;
  name: string;
  symbol: string;
  parent: Parent;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  tags: Tag[];
  team: TeamMember[];
  description: string;
  message: string;
  open_source: boolean;
  hardware_wallet: boolean;
  started_at: string;
  development_status: string;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  contract?: string;
  platform?: string;
  contracts: Contract[];
  links: Links;
  links_extended: LinkExtended[];
  whitepaper: Whitepaper;
  first_data_at: string;
  last_data_at: string;
  quotes: {
    USD: PriceQuote;
  };
};

type Parent = {
  id: string;
  name: string;
  symbol: string;
};

type Tag = {
  id: string;
  name: string;
  coin_counter: number;
  ico_counter: number;
};

type TeamMember = {
  id: string;
  name: string;
  position: string;
};

type Contract = {
  contract: string;
  platform: string;
  type: string;
};

type Links = {
  explorer: string[];
  facebook: string[];
  reddit: string[];
  source_code: string[];
  website: string[];
  youtube: string[];
  medium: string | null;
};

type LinkExtended = {
  url: string;
  type: string;
  stats?: {
    subscribers?: number;
    contributors?: number;
    stars?: number;
  };
};

type Whitepaper = {
  link: string;
  thumbnail: string;
};

type PriceInfo = {
  price: number;
  volume_24h: number;
  volume_24h_change_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  percent_change_15m: number;
  percent_change_30m: number;
  percent_change_1h: number;
  percent_change_6h: number;
  percent_change_12h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_1y: number;
  ath_price: number | null;
  ath_date: string | null;
  percent_from_price_ath: number | null;
};

export type CoinTicker = {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    BTC?: PriceInfo;
    USD: PriceInfo;
  };
};

export type CoinMap = {
  [key: string]: { symbol: string };
};

export type SingleCoinTicker = {
  timestamp: Date;
  price: number;
  volume_24h: number;
  market_cap: number;
};
