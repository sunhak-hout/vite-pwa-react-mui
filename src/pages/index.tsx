import AppBarCustom from '@/components/shared/AppBarCustom';
import DisplayModeMenu from '@/components/shared/DisplayModeMenu';
import { useBreakpoint } from '@/libs/useBreakpoint';
import { MenuOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

const PageRoot: React.FC = () => {
  const md = useBreakpoint('md');

  return (
    <>
      <AppBarCustom
        title="Vite PWA React MUI"
        leading={
          <IconButton color="inherit">
            <MenuOutlined />
          </IconButton>
        }
        trailing={<DisplayModeMenu />}
      />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100dvh"
        width="100%"
      >
        <Typography variant={md ? 'h2' : 'h5'} textAlign="center">
          Vite PWA React MUI
        </Typography>
        <Typography
          variant={md ? 'body2' : 'caption'}
          sx={{ position: 'absolute', bottom: 24 }}
        >
          © 2023 • Sunhak Hout. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default PageRoot;
