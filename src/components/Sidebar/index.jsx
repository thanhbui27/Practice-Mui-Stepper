//constants
import { MOCK_IMAGE_ICON_SIDEBAR } from "@/constants/sidebar";

//library
import { Avatar, Drawer, List, ListItem, ListItemAvatar } from "@mui/material";

const Sidebar = () => {
  return (
    <Drawer variant="permanent" width={68}>
      <List>
        {MOCK_IMAGE_ICON_SIDEBAR.map((item) => (
          <ListItem key={item.id}>
            <ListItemAvatar>
              <Avatar width={10} alt="logo" src={item.icon} />
            </ListItemAvatar>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
