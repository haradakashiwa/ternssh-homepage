import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { AppProvider } from "./lib/app-context";
import { AppRoutes } from "./router";

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <AppProvider>
        <MemoryRouter initialEntries={[url]}>
          <AppRoutes />
        </MemoryRouter>
      </AppProvider>
    </StrictMode>,
  );
}
