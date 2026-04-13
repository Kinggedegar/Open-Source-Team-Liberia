import { ref } from 'vue';

const isDark = ref(false);

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value;
    updateTheme();
  };

  const initTheme = () => {
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      isDark.value = true;
    }
    updateTheme();
  };

  const updateTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return { isDark, toggleTheme, initTheme };
}