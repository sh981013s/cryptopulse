import { coinInstance } from "@/apis/instance.ts";
import { Coin } from "@/types/coin.ts";

type FetchedCoinRes = Coin[];

export const getCoinList = async () => {
  try {
    const response =
      await coinInstance.get<FetchedCoinRes>(`/tickers?quotes=USD`);
    const coins = response.data;
    const slicedCoins = coins.slice(0, 50);

    return slicedCoins;
  } catch (error) {
    console.error("Failed to fetch coin list:", error);
    throw error;
  }
};
