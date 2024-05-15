import styled from "styled-components";
import { useCoinList } from "@/apis/queries/coinQueries/coinQueries.ts";
import DateTimeDisplay from "@/components/coinListPageComponents/DateTimeDisplay.tsx";
import SingleCoin from "@/components/coinListPageComponents/SingleCoin.tsx";

export const CoinListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
`;

const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const MarketPage = () => {
  const { data } = useCoinList();

  return (
    <div>
      <TimeContainer>
        <DateTimeDisplay />
      </TimeContainer>
      <CoinListContainer>
        {data.map((coin) => (
          <SingleCoin key={coin.id} coin={coin} />
        ))}
      </CoinListContainer>
    </div>
  );
};

export default MarketPage;
