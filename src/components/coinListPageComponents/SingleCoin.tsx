import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Coin } from "@/types/coin.ts";
import loadCoinImage from "@/utils/loadCoinImage.ts";

const CoinCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 150px;
  height: 80px;
  cursor: pointer !important;
  transition:
    box-shadow 0.3s ease-in-out,
    transform 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const CoinImageContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

const CoinImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const CoinInfo = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
`;

const CoinSymbol = styled.span`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
`;

const CoinPrice = styled.span`
  font-size: 14px;
`;

const SingleCoin = ({ coin }: { coin: Coin }) => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const moveToCoinDetailPage = () => {
    navigate(`/coin/${coin.symbol}`);
  };

  const fetchImage = async () => {
    try {
      const url = await loadCoinImage(coin.symbol);
      setImageUrl(url);
      setImageLoaded(true);
    } catch (error) {
      console.error("Failed to load the image:", error);
      setImageLoaded(false);
    }
  };

  useEffect(() => {
    fetchImage();
  }, [coin.symbol]);

  return (
    <CoinCard onClick={moveToCoinDetailPage}>
      <CoinImageContainer>
        {imageLoaded && imageUrl ? (
          <CoinImage src={imageUrl} alt={coin.name} />
        ) : (
          <p>No Image</p>
        )}
      </CoinImageContainer>
      <CoinInfo>
        <CoinSymbol>{coin.symbol}</CoinSymbol>
        <CoinPrice>${Math.floor(coin.quotes.USD.price)}</CoinPrice>
      </CoinInfo>
    </CoinCard>
  );
};

export default SingleCoin;
