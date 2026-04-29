import { createElement } from "react";
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Cases } from "./pages/Cases";
import { Sobre } from "./pages/Sobre";
import { Contato } from "./pages/Contato";
import { CaseStudy } from "./pages/CaseStudy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, element: createElement(Home, { locale: "pt" }) },
      { path: "sobre", element: createElement(Sobre, { locale: "pt" }) },
      { path: "cases", element: createElement(Cases, { locale: "pt" }) },
      { path: "cases/:slug", element: createElement(CaseStudy, { locale: "pt" }) },
      { path: "contato", element: createElement(Contato, { locale: "pt" }) },
    ],
  },
  {
    path: "/en",
    Component: Layout,
    children: [
      { index: true, element: createElement(Home, { locale: "en" }) },
      { path: "about", element: createElement(Sobre, { locale: "en" }) },
      { path: "cases", element: createElement(Cases, { locale: "en" }) },
      { path: "cases/:slug", element: createElement(CaseStudy, { locale: "en" }) },
      { path: "contact", element: createElement(Contato, { locale: "en" }) },
    ],
  },
]);