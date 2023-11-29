import { useAppStore } from '@/stores/useAppStore';
import {
  Brightness4Outlined,
  DarkModeOutlined,
  LightModeOutlined,
  SettingsBrightnessOutlined,
} from '@mui/icons-material';
import {
  IconButton,
  IconButtonProps,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
} from '@mui/material';
import { Fragment, useState } from 'react';

interface Props {
  iconButtonProps?: IconButtonProps;
}

const DisplayModeMenu: React.FC<Props> = ({ iconButtonProps }) => {
  const [displayMode, setDisplayMode] = useAppStore((state) => [
    state.displayMode,
    state.setDisplayMode,
  ]);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>();

  const handleClick: IconButtonProps['onClick'] = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <IconButton onClick={handleClick} color="inherit" {...iconButtonProps}>
        <Brightness4Outlined />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        slotProps={{
          paper: { elevation: 2, sx: { px: 1, backgroundImage: 'none' } },
        }}
      >
        <ListItemButton
          color="inherit"
          selected={displayMode === 'system'}
          onClick={() => setDisplayMode('system')}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            <SettingsBrightnessOutlined />
          </ListItemIcon>
          <ListItemText primary="System Display" />
        </ListItemButton>

        <ListItemButton
          selected={displayMode === 'dark'}
          onClick={() => setDisplayMode('dark')}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            <DarkModeOutlined />
          </ListItemIcon>
          <ListItemText primary="Dark Mode" />
        </ListItemButton>

        <ListItemButton
          selected={displayMode === 'light'}
          onClick={() => setDisplayMode('light')}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            <LightModeOutlined />
          </ListItemIcon>
          <ListItemText primary="Light Mode" />
        </ListItemButton>
      </Menu>
    </Fragment>
  );
};

export default DisplayModeMenu;
