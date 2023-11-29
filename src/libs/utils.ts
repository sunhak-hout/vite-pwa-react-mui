import createCache from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

export const createEmotionCache = () => {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]',
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: 'mui-style', insertionPoint });
};

export type DisplayMode = 'system' | 'dark' | 'light';
export const getDisplayMode = (mode: DisplayMode): DisplayMode => {
  localStorage.setItem('displayMode', mode);
  if (mode === 'system') {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
    return darkMode.matches ? 'dark' : 'light';
  }
  return mode;
};
