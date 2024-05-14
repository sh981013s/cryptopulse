import { coinInstance } from "@/apis/instance.ts";
import { Coin, CoinDetail, CoinTicker } from "@/types/coin.ts";

type FetchedCoinRes = Coin[];

export const getCoinList = async () => {
  try {
    const { data } = await coinInstance.get<FetchedCoinRes>(
      `/tickers?quotes=USD&limit=60`,
    );

    return data;
  } catch (error) {
    console.error("Failed to fetch coin list:", error);
    throw error;
  }
};

export const getCoinDetail = async (id: string) => {
  try {
    const { data } = await coinInstance.get<CoinDetail>(
      `/coins/${id}?quotesUSD`,
    );

    return data;
  } catch (error) {
    console.error("Failed to fetch coin detail:", error);
    throw error;
  }
};

export const getCoinTicker = async (id: string) => {
  try {
    const { data } = await coinInstance.get<CoinTicker>(
      `/tickers/${id}?quotesUSD`,
    );

    return data;
  } catch (error) {
    console.error("Failed to fetch coin ticker:", error);
    throw error;
  }
};
