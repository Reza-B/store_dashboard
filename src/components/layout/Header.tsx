import Stack from "@mui/material/Stack";
import ColorModeIcon from "./ColorModeIcon";
import { Breadcrumbs, Typography } from "@mui/material";
import { NavigateBeforeRounded } from "@mui/icons-material";

const pages: string[] = ["خانه", "ویرایش صفحه اصلی", "دسته بندی ها", "محصولات"];

export default function Header({ index }: { index: number }) {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: "none", md: "flex" },
        width: "100%",
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-between",
        maxWidth: { sm: "100%", md: "1700px" },
        pt: 1.5,
      }}
      spacing={2}>
      <Breadcrumbs separator={<NavigateBeforeRounded fontSize="small" />}>
        <Typography variant="body1">{"داشبورد"}</Typography>
        <Typography variant="body1" sx={{ color: "text.primary", fontWeight: 600 }}>
          {pages[index]}
        </Typography>
      </Breadcrumbs>
      <Stack direction="row" sx={{ gap: 1 }}>
        <ColorModeIcon />
      </Stack>
    </Stack>
  );
}
