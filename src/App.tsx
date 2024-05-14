import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/common/layoutComponents/Layout.tsx";
import NavBar from "@/components/common/navBar/NavBar.tsx";
import MainPage from "@/pages/mainPage/MainPage.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
