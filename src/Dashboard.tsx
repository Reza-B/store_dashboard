import { Box, Stack } from "@mui/material";
import AppNavbar from "./components/layout/AppNavbar";
import Header from "./components/layout/Header";
import SideMenu from "./components/layout/SideMenu";
import AppTheme from "./theme/AppTheme";
import { useState } from "react";
import { Home, ManageLanding, Categories, Products } from "./pages";

const pages: React.ReactNode[] = [
  <Home />,
  // <People />,
  <ManageLanding />,
  <Categories />,
  <Products />,
];

export default function Dashboard(props: any) {
  const [pageIndex, setPageIndex] = useState<number>(0);
  return (
    <AppTheme {...props}>
      <Box sx={{ display: "flex" }}>
        <SideMenu index={pageIndex} setIndex={setPageIndex} />
        <AppNavbar index={pageIndex} setIndex={setPageIndex} />
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            minHeight: "100vh",
            backgroundColor: theme.palette.background.default,
            overflow: "auto",
          })}>
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              mx: 3,
              pb: 10,
              mt: { xs: 8, md: 0 },
            }}>
            <Header index={pageIndex} />
            {pages[pageIndex]}
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
