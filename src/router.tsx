import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { DeployPage } from "./pages/DeployPage";
import { DesktopPage } from "./pages/DesktopPage";
import {
  DocsArticlePage,
  DocsIndexPage,
  DocsLegacyRedirectPage,
} from "./pages/DocsPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="deploy" element={<DeployPage />} />
        <Route path="desktop" element={<DesktopPage />} />
        <Route path="docs" element={<DocsIndexPage />} />
        <Route path="docs/:lang/:slug" element={<DocsLegacyRedirectPage />} />
        <Route path="docs/:slug" element={<DocsArticlePage />} />
      </Route>
    </Routes>
  );
}
