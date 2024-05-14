import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/common/layoutComponents/Layout.tsx";
import MainPage from "@/pages/mainPage/MainPage.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
