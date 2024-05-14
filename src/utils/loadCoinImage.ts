const loadCoinImage = async (cryptoName: string): Promise<string | null> => {
  const cryptoIdentifier = cryptoName.toLowerCase();

  return `/images/coins/${cryptoIdentifier}.png`;
};

export default loadCoinImage;
