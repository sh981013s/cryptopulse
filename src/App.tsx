import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Grid } from "react-loader-spinner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/common/layoutComponents/Layout.tsx";
import CoinDetailPage from "@/pages/coinDetailPage/CoinDetailPage.tsx";
import LoginPage from "@/pages/loginPage/LoginPage.tsx";
import MainPage from "@/pages/mainPage/MainPage.tsx";
import MarketPage from "@/pages/marketPage/MarketPage.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense
          fallback={
            <Grid
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="grid-loading"
              radius="12.5"
              wrapperStyle={{}}
              wrapperClass="grid-wrapper"
            />
          }
        >
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/markets" element={<MarketPage />} />
            <Route path="/coin/:symbol" element={<CoinDetailPage />} />
          </Routes>
        </Suspense>
      </Layout>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
