import { useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { colorSchemes, typography, shadows, shape } from "./themePrimitives.ts";

export default function AppTheme({ children }: { children: React.ReactNode }) {
  const theme = useMemo(() => {
    return createTheme({
      colorSchemes,
      typography,
      shadows,
      shape,
    });
  }, []);
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
