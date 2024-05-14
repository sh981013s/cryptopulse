import { PropsWithChildren } from "react";
import BottomNavBar from "@/components/common/bottomNavBar/BottomNavBar.tsx";
import TopNavBar from "@/components/common/topNavBar/TopNavBar.tsx";
import * as S from "./Layout.styles.ts";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <TopNavBar />
      <S.Layout>
        <S.MainContent>{children}</S.MainContent>
      </S.Layout>
      <BottomNavBar />
    </>
  );
};

export default Layout;
