import { PropsWithChildren } from "react";
import BottomNavBar from "@/components/common/bottomNavBar/BottomNavBar.tsx";
import TopNavBar from "@/components/common/topNavBar/TopNavBar.tsx";
import * as S from "./Layout.styles.ts";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <TopNavBar />
      <S.EntireLayout>
        <S.MainLayout>
          <S.MainContent>{children}</S.MainContent>
        </S.MainLayout>
      </S.EntireLayout>
      <BottomNavBar />
    </>
  );
};

export default Layout;
