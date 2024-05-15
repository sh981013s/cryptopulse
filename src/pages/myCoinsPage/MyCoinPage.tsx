import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCoinList } from "@/apis/queries/coinQueries/coinQueries.ts";
import SingleCoin from "@/components/coinListPageComponents/SingleCoin.tsx";
import useMyCoins from "@/hooks/myCoin/useMyCoins.ts";
import { CoinListContainer } from "@/pages/marketPage/MarketPage.tsx";
import useUserStore from "@/stores/useUserStore.ts";
import { Coin } from "@/types/coin.ts";

const MyCoinPage = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const { data: coinList } = useCoinList();
  const { myCoins } = useMyCoins(user?.uid);
  const [filteredCoins, setFilteredCoins] = useState<Coin[]>([]);

  useEffect(() => {
    if (!user) {
      toast("you have to signIn to use the funciton");
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (coinList && myCoins) {
      const myCoinSymbols = new Set(
        Object.values(myCoins).map((coin) => coin.symbol),
      );
      const filtered = coinList.filter((coin) => myCoinSymbols.has(coin.id));
      setFilteredCoins(filtered);
    }
  }, [coinList, myCoins]);

  return (
    <div>
      <h1>my coins</h1>
      <CoinListContainer>
        {filteredCoins.map((coin) => {
          return <SingleCoin coin={coin} />;
        })}
      </CoinListContainer>
    </div>
  );
};

export default MyCoinPage;
