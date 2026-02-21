import localStorageApi from './local-storage-api';

export function handleSwitchTheme(evt) {
  evt.preventDefault();
  const body = document.body.classList;
  if (document.body.classList.contains('theme-light')) {
    document.body.classList.add('theme-dark');
    document.body.classList.remove('theme-light');
    localStorageApi.saveTheme('theme-dark');
  } else {
    document.body.classList.add('theme-light');
    document.body.classList.remove('theme-dark');
    localStorageApi.saveTheme('theme-light');
  }
}

export function initTheme() {
  localStorageApi.getTheme();
  if (localStorageApi.getTheme() === 'theme-dark') {
    document.body.classList.add('theme-dark');
    document.body.classList.remove('theme-light');
  } else {
    document.body.classList.add('theme-light');
    document.body.classList.remove('theme-dark');
  }
  console.log(
    '🚀 ~ initTheme ~ localStorageApi.getTheme():',
    localStorageApi.getTheme()
  );
}
