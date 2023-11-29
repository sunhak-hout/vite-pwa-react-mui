import { Breakpoint, Theme, useMediaQuery } from '@mui/material';

export const useBreakpoint = (key: Breakpoint) =>
  useMediaQuery((theme: Theme) => theme.breakpoints.up(key));
