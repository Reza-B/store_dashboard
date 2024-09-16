import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CssBaseline } from "@mui/material";
import Dashboard from "./Dashboard";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <Dashboard />
  </StrictMode>
);
