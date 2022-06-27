import { onMounted, ref, watch } from "vue";

type Theme = 'light' | 'dark';

const LOCAL_STORAGE_THEME_KEY = 'theme';

export const darkMode = ref(false);

const setTheme = (newTheme: Theme) => {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  darkMode.value = newTheme === 'dark';
  document.body.className = `theme-${newTheme}`
};

export const init = () => {
  const isDarkModePreferred = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  const themeFromLocalStorage = localStorage.getItem(
    LOCAL_STORAGE_THEME_KEY
  ) as Theme;

  if (themeFromLocalStorage) {
    setTheme(themeFromLocalStorage);
  } else {
    setTheme(isDarkModePreferred ? 'dark' : 'light');
  }
}

watch(darkMode, selected => {
  setTheme(selected ? 'dark' : 'light');
});