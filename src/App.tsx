import { CssBaseline, ThemeProvider } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import NewVersionUpdate from './components/shared/NewVersionUpdate';
import { DisplayMode, getDisplayMode } from './libs/utils';
import { router } from './router';
import { useAppStore } from './stores/useAppStore';
import { darkTheme } from './theme/dark';
import { lightTheme } from './theme/light';

const App: React.FC = () => {
  const [systemDisplayMode, setSystemDisplayMode] = useState<DisplayMode | null>(null); // prettier-ignore

  const [displayMode] = useAppStore((state) => [state.displayMode]);

  const theme = useMemo(() => {
    const isDarkMode = getDisplayMode(displayMode) === 'dark';
    const activeTheme = isDarkMode ? darkTheme : lightTheme;
    console.log(activeTheme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', activeTheme.palette.background.paper);
    return activeTheme;
  }, [displayMode, systemDisplayMode]);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)'); // prettier-ignore
    darkModeMediaQuery.addEventListener('change', handleSystemDisplayModeChange); // prettier-ignore
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleSystemDisplayModeChange); // prettier-ignore
    };
  });

  const handleSystemDisplayModeChange = (e: MediaQueryListEvent) => {
    setSystemDisplayMode(e.matches ? 'dark' : 'light');
  };

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <AnimatePresence>
          <RouterProvider router={router} />
        </AnimatePresence>

        <NewVersionUpdate />
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
