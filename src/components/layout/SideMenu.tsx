import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MenuContent from "./MenuContent";
import { Button } from "@mui/material";
import { LogoutRounded } from "@mui/icons-material";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});

export default function SideMenu({
  index,
  setIndex,
}: {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <Drawer
      anchor="right"
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
        },
      }}>
      <MenuContent index={index} setIndex={setIndex} />
      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: "center",
          borderTop: "1px solid",
          borderColor: "divider",
          direction: "rtl",
        }}>
        <Avatar
          sizes="small"
          alt="Riley Carter"
          src="/static/images/avatar/7.jpg"
          sx={{ width: 36, height: 36 }}
        />
        <Box sx={{ ml: "auto" }}>
          <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: "16px" }}>
            رضا بوذرجمهری
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            dev.reza21@email.com
          </Typography>
        </Box>
      </Stack>
      <Stack sx={{ p: 2 }}>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            gap: 1,
          }}>
          <LogoutRounded />
          {"خروج"}
        </Button>
      </Stack>
    </Drawer>
  );
}
