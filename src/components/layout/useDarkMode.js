import { useState, useEffect, useCallback } from 'react';

const useDarkMode = () => {
  const isBrowser = typeof window !== 'undefined';
  const systemDarkQuery = isBrowser && window?.matchMedia('(prefers-color-scheme: dark)');
  const systemTheme = systemDarkQuery && systemDarkQuery.matches ? 'dark' : 'light';
  let preferredTheme;

  try {
    if (isBrowser) preferredTheme = window?.localStorage?.getItem('theme');
  } catch (e) {}

  const [theme, setTheme] = useState(preferredTheme || systemTheme);

  const updateTheme = useCallback(
    newTheme => {
      if (isBrowser) {
        try {
          window.localStorage.setItem('theme', newTheme);
        } catch (err) {}
        document.body.className = newTheme;
        setTheme(newTheme);
      }
    },
    [isBrowser, setTheme]
  );

  const toggleTheme = useCallback(() => {
    updateTheme(theme === 'dark' ? 'light' : 'dark');
  }, [updateTheme, theme]);

  useEffect(() => {
    // handle system theme updates
    const darkQuery = window?.matchMedia('(prefers-color-scheme: dark)');
    const darkChangeHandler = e => {
      updateTheme(e.matches ? 'dark' : 'light');
    };

    darkQuery.addEventListener('change', darkChangeHandler);

    return () => {
      darkQuery.removeEventListener('change', darkChangeHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [theme, toggleTheme];
};

export default useDarkMode;
export { useDarkMode };
