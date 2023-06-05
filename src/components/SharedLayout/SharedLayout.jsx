import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import { Main } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
      <AppBar />

      <Main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default SharedLayout;
