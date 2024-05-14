import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/common/layoutComponents/Layout.tsx";
import LoginPage from "@/pages/loginPage/LoginPage.tsx";
import MainPage from "@/pages/mainPage/MainPage.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
