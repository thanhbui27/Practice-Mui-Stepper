import { Avatar, ListItemAvatar } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import logo from "@/assets/images/legodesk.png";
import avatar from "@/assets/images/profile.png";
import task from "@/assets/icons/tasks.svg";
import chat from "@/assets/icons/chat.svg";
import paper from "@/assets/icons/paper.svg";
import dashboardActive from "@/assets/icons/dashboard-active.svg";
import settings from "@/assets/icons/settings.svg";

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
    <Drawer variant="permanent" sx={{ width: "68px" }}>
      <List>
        {MOCK_IMAGE_ICON_SIDEBAR.map((item, idx) => (
          <ListItem button key={idx}>
            <ListItemAvatar>
              <Avatar width="15px" alt="logo" src={item.icon} />
            </ListItemAvatar>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
