import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./lib/app-context";
import { AppRoutes } from "./router";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}
