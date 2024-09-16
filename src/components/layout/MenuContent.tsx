import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";
import {
  CategoryRounded,
  HomeRounded,
  ProductionQuantityLimitsRounded,
  SettingsRounded,
} from "@mui/icons-material";

const mainListItems = [
  { text: "خانه", icon: <HomeRounded /> },
  // { text: "افراد", icon: <PeopleRounded /> },
  { text: "ویرایش صفحه اصلی", icon: <SettingsRounded /> },
  { text: "دسته بندی ها", icon: <CategoryRounded /> },
  { text: "محصولات", icon: <ProductionQuantityLimitsRounded /> },
];

export default function MenuContent({
  index,
  setIndex,
}: {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, i) => (
          <ListItem key={i} disablePadding sx={{ display: "block" }}>
            <ListItemButton onClick={() => setIndex(i)} selected={i === index} sx={{ direction: "rtl" }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} sx={{ textAlign: "start" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
