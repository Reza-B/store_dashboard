import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer, { drawerClasses } from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MenuContent from "./MenuContent";
import { LogoutRounded } from "@mui/icons-material";

interface SideMenuMobileProps {
  open: boolean | undefined;
  toggleDrawer: (newOpen: boolean) => () => void;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function SideMenuMobile({ open, toggleDrawer, index, setIndex }: SideMenuMobileProps) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        [`& .${drawerClasses.paper}`]: {
          backgroundImage: "none",
          backgroundColor: "background.paper",
        },
      }}>
      <Stack
        sx={{
          maxWidth: "70dvw",
          height: "100%",
        }}>
        <Stack direction="row" sx={{ p: 2, pb: 0, gap: 1 }}>
          <Stack direction="row" sx={{ gap: 1, alignItems: "center", flexGrow: 1, p: 1 }}>
            <Avatar
              sizes="small"
              alt="Riley Carter"
              src="/static/images/avatar/7.jpg"
              sx={{ width: 24, height: 24 }}
            />
            <Typography component="p" variant="h6">
              {"رضا بوذرجمهری"}
            </Typography>
          </Stack>
        </Stack>
        <Divider />
        <Stack sx={{ flexGrow: 1 }}>
          <MenuContent index={index} setIndex={setIndex} />
          <Divider />
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
      </Stack>
    </Drawer>
  );
}
