import { Components } from '@mui/material';

export const MuiCssBaseline: Components['MuiCssBaseline'] = {
  styleOverrides: {
    html: {
      background: '#000000',
    },
    body: {
      fontSize: 16,
      touchAction: 'pan-y',
    },
  },
};
