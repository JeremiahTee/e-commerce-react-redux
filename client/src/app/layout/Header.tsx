import {
  AppBar,
  Badge,
  Box,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, NavLink } from 'react-router-dom';
import { useStoreContext } from '../context/StoreContext';
import { useAppSelector } from '../store/configureStore';

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

const midLinks = [
  { title: 'catalog', path: '/catalog' },
  { title: 'about', path: '/about' },
  { title: 'contact', path: '/contact' },
];

const rightLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' },
];

const navStyles = {
  color: 'inherit',
  typography: 'h6',
  '&:hover': {
    color: 'grey.500',
  },
  '&.active': {
    color: 'text.secondary',
  },
};

export const Header = ({ darkMode, handleThemeChange }: Props) => {
  const { basket } = useAppSelector((state) => state.basket);
  const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppBar position='static' sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box display='flex' alignItems='center'>
          <Typography
            component={NavLink}
            to='/'
            exact
            sx={{
              mr: 4,
              color: 'inherit',
              typography: 'h6',
              '&:hover': {
                color: 'grey.500',
              },
              '&.active': {
                color: 'text.secondary',
              },
            }}
            variant='h6'
          >
            RE-STORE
          </Typography>
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={handleThemeChange} />}
            label='Dark Mode'
          />
        </Box>

        <List sx={{ display: 'flex' }}>
          {midLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <Box display='flex' alignItems='center'>
          <IconButton
            component={Link}
            to='/basket'
            size='large'
            sx={{ color: 'inherit' }}
          >
            <Badge badgeContent={itemCount} color='secondary'>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <List sx={{ display: 'flex' }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
