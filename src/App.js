import { lazy } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const CardsPage = lazy(() => import("./pages/CardsPage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
