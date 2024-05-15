import { useSuspenseQuery } from "@tanstack/react-query";
import {
  getCoinDetail,
  getCoinList,
  getCoinTicker,
  getHistoricalCoinTicker,
} from "@/apis/coinApis/coinApis.ts";

export const useCoinList = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["coins"],
    queryFn: getCoinList,
  });

  return { data };
};

export const useCoinDetail = (id: string) => {
  const { data } = useSuspenseQuery({
    queryKey: [id],
    queryFn: () => getCoinDetail(id),
  });

  return { data };
};

export const useCoinTicker = (id: string) => {
  const { data } = useSuspenseQuery({
    queryKey: [id + "ticker"],
    queryFn: () => getCoinTicker(id),
  });

  return { data };
};

export const useHistoricalCoinTicker = (id: string) => {
  const { data } = useSuspenseQuery({
    queryKey: [id + "historicalTicker"],
    queryFn: () => getHistoricalCoinTicker(id),
  });

  return { data };
};
