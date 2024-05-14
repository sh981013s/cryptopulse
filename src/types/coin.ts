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
