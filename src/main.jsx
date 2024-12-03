import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes";
import AuthProviders from "./providers/AuthProviders";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviders>
      {" "}
      <RouterProvider router={routes} />
    </AuthProviders>
  </StrictMode>
);
