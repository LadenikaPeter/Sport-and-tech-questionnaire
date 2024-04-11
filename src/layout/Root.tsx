import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  const Location = useLocation();

  return (
    <>
      <main className={`${Location.pathname !== "/" ? "pt-[60px]" : ""}`}>
        {Location.pathname !== "/" && <Header />}
        <Outlet />
      </main>
    </>
  );
}
