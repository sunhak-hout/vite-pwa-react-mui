import { Components } from '@mui/material';

export const MuiCssBaseline: Components['MuiCssBaseline'] = {
  styleOverrides: {
    html: {
      background: '#FFFFFF',
    },
    body: {
      fontSize: 16,
      touchAction: 'pan-y',
    },
  },
};
