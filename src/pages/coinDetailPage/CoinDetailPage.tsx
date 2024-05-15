import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaBackward, FaShoppingCart } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import styled from "styled-components";
import {
  useCoinDetail,
  useCoinTicker,
} from "@/apis/queries/coinQueries/coinQueries.ts";
import useValidParams from "@/hooks/common/useValidParams.ts";
import useMyCoins from "@/hooks/myCoin/useMyCoins.ts";
import useUserStore from "@/stores/useUserStore.ts";

const DetailContainer = styled.div`
  position: relative;
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

const CartButton = styled.button`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  transition:
    box-shadow 0.3s ease-in-out,
    transform 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const BackButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  background-color: #f2f2f2;
  color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  transition:
    background-color 0.2s ease-in-out,
    transform 0.2s ease;

  &:hover {
    background-color: #e2e2e2;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const CoinDetailPage = () => {
  const navigate = useNavigate();
  const { symbol } = useValidParams();
  const { user } = useUserStore();
  const { myCoins, fetchCoins, deleteCoin } = useMyCoins(user?.uid);
  const { data } = useCoinDetail(symbol);
  const [userId, setUserId] = useState<string | null>(null);

  const myCoinSymbols =
    myCoins && new Set(Object.values(myCoins).map((coin) => coin.symbol));

  const isAddedToMyCoins = myCoinSymbols && myCoinSymbols.has(data.id);

  useEffect(() => {
    if (user) {
      setUserId(user.uid);
    } else {
      setUserId(null);
    }
  }, [user]);

  useEffect(() => {
    console.log(myCoins, "mccccc");
  }, [myCoins]);

  const { addCoin } = useMyCoins(userId);

  const { data: ticker } = useCoinTicker(symbol);

  const goBack = () => {
    navigate(-1);
  };

  const addToCart = async () => {
    if (!user) {
      toast.error("You need to sign in to use this function");
      return;
    }

    await addCoin(symbol);
    fetchCoins();
    toast.success("Successfully added to myCoins");
  };

  const deleteFromCart = async () => {
    if (!user) {
      toast.error("You need to sign in to use this function");
      return;
    }

    const coinKey = Object.keys(myCoins).find(
      (key) => myCoins[key].symbol === symbol,
    );

    if (coinKey) {
      await deleteCoin(coinKey);
      fetchCoins();
      toast.success("Successfully deleted from myCoins");
    } else {
      toast.error("Coin not found in your collection");
    }
  };

  return (
    <DetailContainer>
      <BackButton onClick={goBack}>
        <FaBackward />
        Go Back
      </BackButton>

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
      {!isAddedToMyCoins && (
        <CartButton onClick={addToCart}>
          <FaShoppingCart />
          Add to my coins
        </CartButton>
      )}

      {isAddedToMyCoins && (
        <CartButton onClick={deleteFromCart}>
          <MdDeleteSweep />
          Delete from my coins
        </CartButton>
      )}
    </DetailContainer>
  );
};

export default CoinDetailPage;
