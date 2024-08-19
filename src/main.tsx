import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ModalProvider } from "./components/context/ModalContext.tsx";
import { SearchProvider } from "./components/context/SearchContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WidgetProvider } from "./components/context/WidgetContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalProvider>
      <SearchProvider>
        <WidgetProvider>
          <RouterProvider router={router} />
        </WidgetProvider>
      </SearchProvider>
    </ModalProvider>
  </StrictMode>
);
