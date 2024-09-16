import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useColorScheme } from "@mui/material/styles";
import { DarkMode, LightMode } from "@mui/icons-material";

export default function ColorModeIconDropdown() {
  const { mode, setMode } = useColorScheme();
  const handleClick = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };
  if (!mode) {
    return (
      <Box
        data-screenshot="toggle-mode"
        sx={(theme) => ({
          verticalAlign: "bottom",
          display: "inline-flex",
          width: "2.25rem",
          height: "2.25rem",
          borderRadius: theme.shape.borderRadius,
          border: "1px solid",
          borderColor: theme.palette.divider,
        })}
      />
    );
  }
  const resolvedMode = mode as "light" | "dark";
  const icon = {
    light: <LightMode />,
    dark: <DarkMode />,
  }[resolvedMode];
  return (
    <React.Fragment>
      <IconButton data-screenshot="toggle-mode" onClick={handleClick} disableRipple size="small">
        {icon}
      </IconButton>
    </React.Fragment>
  );
}
