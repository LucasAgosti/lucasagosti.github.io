import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div
      className="w-full min-h-screen"
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#0C0D0C",
        color: "#f0f0ee",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
