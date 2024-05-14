import { useSuspenseQuery } from "@tanstack/react-query";
import { getCoinList } from "@/apis/coinApis/coinApis.ts";

export const useCoinList = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["coins"],
    queryFn: getCoinList,
  });

  return { data };
};
