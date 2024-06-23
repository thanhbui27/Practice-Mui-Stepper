import {
  Avatar,
  Drawer,
  List,
  ListItemAvatar,
  ListItemButton,
} from "@mui/material";

// Assets
import chat from "@/assets/icons/chat.svg";
import dashboardActive from "@/assets/icons/dashboard-active.svg";
import paper from "@/assets/icons/paper.svg";
import settings from "@/assets/icons/settings.svg";
import task from "@/assets/icons/tasks.svg";
import logo from "@/assets/images/legodesk.png";
import avatar from "@/assets/images/profile.png";

const MOCK_IMAGE_ICON_SIDEBAR = [
  {
    icon: logo,
  },
  {
    icon: avatar,
  },
  {
    icon: task,
  },
  {
    icon: task,
  },
  {
    icon: chat,
  },
  {
    icon: paper,
  },
  {
    icon: dashboardActive,
  },
  {
    icon: settings,
  },
];

const Sidebar = () => {
  return (
    <Drawer variant="permanent" sx={{ width: 68 }}>
      <List>
        {MOCK_IMAGE_ICON_SIDEBAR.map((item, idx) => (
          <ListItemButton key={idx}>
            <ListItemAvatar>
              <Avatar width="15" alt="logo" src={item.icon} />
            </ListItemAvatar>
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
