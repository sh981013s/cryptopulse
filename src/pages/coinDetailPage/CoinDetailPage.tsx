import styled from "styled-components";
import {
  useCoinDetail,
  useCoinTicker,
} from "@/apis/queries/coinQueries/coinQueries.ts";
import useValidParams from "@/hooks/common/useValidParams.ts";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px;
  background: #454d7c;
  border-radius: 8px;
`;

const Header = styled.h1`
  font-size: 24px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 75px;
`;

const InfoText = styled.p`
  margin: 5px 0;
  font-size: 16px;
`;

const CoinDetailPage = () => {
  const { symbol } = useValidParams();
  const { data } = useCoinDetail(symbol);
  const { data: ticker } = useCoinTicker(symbol);

  return (
    <DetailContainer>
      <Header>
        {data.name} ({data.symbol})
      </Header>
      {data.logo && <Image src={data.logo} alt={`${data.name} logo`} />}
      <InfoText>Rank: {data.rank}</InfoText>
      <InfoText>Status: {data.is_active ? "Active" : "Inactive"}</InfoText>
      <InfoText>Type: {data.type}</InfoText>
      <InfoText>Description: {data.description}</InfoText>
      <InfoText>
        Started on: {new Date(data.started_at).toLocaleDateString()}
      </InfoText>
      <InfoText>Price: ${ticker.quotes.USD.price.toFixed(2)}</InfoText>
    </DetailContainer>
  );
};

export default CoinDetailPage;
