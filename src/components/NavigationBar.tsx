import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Favorites', path: '/Favorites' },
];

export default function NavigationBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: 'black' }}>
      <Typography variant="h6" sx={{ my: 2, color: 'white' }}>
        <Link component={RouterLink} to="/" sx={{ textDecoration: 'none', color: '#fff' }}>
          Movie App
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color: 'white', '&:hover': { backgroundColor: '#333' } }}>

              <RouterLink to={item.path} style={{ textDecoration: 'none', color: 'white' }}>
                <ListItemText primary={item.label} />
              </RouterLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: 'black' }}>

        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#fff' }}
          >
            {/* title */}
            <Link component={RouterLink} to="/" sx={{ textDecoration: 'none', color: '#fff', '&:hover': { color: 'white' } }}>
              Movie App
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* navigation bar items */}
            {navItems.map((item, index) => (
              <Button key={index} sx={{ color: '#fff', '&:hover': { backgroundColor: '#333' } }}>
                <RouterLink to={item.path} style={{ textDecoration: 'none', color: '#fff' }}>
                  {item.label}
                </RouterLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },

          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          Test
        </Typography>
      </Box>
    </Box>
  );
}
