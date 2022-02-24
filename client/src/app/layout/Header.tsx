import {
  AppBar,
  FormControlLabel,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export const Header = ({ darkMode, handleThemeChange }: Props) => {
  return (
    <AppBar position='static' sx={{ mb: 4 }}>
      <Toolbar>
        <Typography sx={{ mr: 4 }} variant='h6'>
          RE-STORE
        </Typography>
        <FormControlLabel
          control={<Switch checked={darkMode} onChange={handleThemeChange} />}
          label='Dark Mode'
        />
      </Toolbar>
    </AppBar>
  );
};
