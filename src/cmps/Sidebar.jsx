import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import { ReactComponent as OverviewIcon } from '../assets/icons/overview.svg';
import { ReactComponent as LogoutIcon } from '../assets/icons/logout.svg';
import { ReactComponent as MembersIcon } from '../assets/icons/members.svg';
import { ReactComponent as TasksIcon } from '../assets/icons/tasks.svg';
import { ReactComponent as MenuIcon } from '../assets/icons/menu.svg';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Backdrop } from '@mui/material';
import DemoMemberAvatar from '../assets/imgs/demo-members/1.jpg';
import { NavLink } from 'react-router-dom';
import { Container } from '@mui/system';

const drawerWidth = 240;
const topIcons = [
  { icon: OverviewIcon, txt: 'Overview', path: '/' },
  { icon: TasksIcon, txt: 'Tasks', path: '/task' },
  { icon: MembersIcon, txt: 'Members', path: '/member' },
];

const openedMixin = theme => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = theme => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export const Sidebar = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      className={`side-bar ${isOpen ? 'open' : ''}`}
      sx={{ display: 'flex' }}
    >
      <CssBaseline />
      <Backdrop
        sx={{ background: 'rgba(27, 20, 114, 0.35)' }}
        open={isOpen}
        onClick={toggleSidebar}
      />

      <Drawer variant="permanent" open={isOpen}>
        <DrawerHeader sx={{ justifyContent: isOpen ? 'end' : 'center' }}>
          <IconButton disableRipple onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
        </DrawerHeader>

        <List
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          {topIcons.map(el => (
            <ListItem
              key={el.txt}
              disablePadding
              sx={{ display: 'block', ':hover': 'background: transparent' }}
            >
              <NavLink to={el.path}>
                <ListItemButton
                  onClick={() => {
                    if (isOpen) toggleSidebar();
                  }}
                  sx={{
                    minHeight: 48,
                    justifyContent: isOpen ? 'initial' : 'center',
                    flexDirection: isOpen ? 'row' : 'column',
                    px: 2.5,
                  }}
                  disableRipple
                  disableTouchRipple
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: isOpen ? 2 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <el.icon />
                  </ListItemIcon>
                  <ListItemText primary={el.txt} />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>

        <List sx={{ pb: 5 }}>
          <ListItem
            disablePadding
            sx={{ display: 'block', ':hover': 'background: transparent' }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: isOpen ? 'initial' : 'center',
                flexDirection: isOpen ? 'row' : 'column',

                px: 2.5,
              }}
              disableRipple
              disableTouchRipple
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isOpen ? 1 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <Avatar
                  className="column"
                  sx={{
                    border: '3px solid #5B4CCC',
                    width: '32px',
                    height: '32px',
                    flexDirection: isOpen ? 'row' : 'column',
                  }}
                  src={DemoMemberAvatar}
                />
              </ListItemIcon>
              <ListItemText primary={'Sarah'} />
            </ListItemButton>
          </ListItem>
          {[{ icon: LogoutIcon, txt: 'Logout' }].map(el => (
            <ListItem
              key={el.txt}
              disablePadding
              sx={{ display: 'block', ':hover': 'background: transparent' }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isOpen ? 'initial' : 'center',
                  flexDirection: isOpen ? 'row' : 'column',
                  px: 2.5,
                }}
                disableRipple
                disableTouchRipple
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isOpen ? 2 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <el.icon />
                </ListItemIcon>
                <ListItemText primary={el.txt} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
