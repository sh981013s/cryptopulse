import { useState, useEffect, useCallback } from "react";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { app } from "@/firebase.ts";
import { CoinMap } from "@/types/coin.ts";

const useMyCoins = (userId: string | null | undefined) => {
  const [myCoins, setMyCoins] = useState<null | CoinMap>(null);
  const db = getFirestore(app);

  const fetchCoins = useCallback(() => {
    if (userId) {
      const userCoinsRef = collection(db, `users/${userId}/coins`);
      getDocs(userCoinsRef)
        .then((querySnapshot) => {
          const coins: CoinMap = {};
          querySnapshot.forEach((doc) => {
            coins[doc.id] = { id: doc.id, ...doc.data() } as any;
          });
          setMyCoins(coins);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [userId, db]);

  useEffect(() => {
    fetchCoins();
  }, [fetchCoins]);

  const addCoin = async (symbol: string) => {
    if (!userId) {
      console.error("User ID is null, cannot add coin");
      return;
    }
    try {
      const userCoinsRef = collection(db, `users/${userId}/coins`);
      await addDoc(userCoinsRef, {
        symbol: symbol,
        addedAt: new Date(),
      });
      fetchCoins();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const deleteCoin = async (coinId: string) => {
    if (!userId) {
      console.error("User ID is null, cannot delete coin");
      return;
    }
    try {
      const coinRef = doc(db, `users/${userId}/coins`, coinId);
      await deleteDoc(coinRef);
      fetchCoins();
    } catch (error) {
      alert(`Failed to delete the coin: ${error.message}`);
    }
  };

  return {
    myCoins,
    addCoin,
    deleteCoin,
    fetchCoins,
  };
};

export default useMyCoins;
