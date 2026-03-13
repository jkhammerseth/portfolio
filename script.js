// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
  const theme = htmlElement.getAttribute('data-theme');
  const newTheme = theme === 'light' ? 'dark' : 'light';

  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Language toggle functionality
const langToggle = document.querySelector('.lang-toggle');
const langText = document.querySelector('.lang-text');

// Check for saved language preference or default to English
let currentLang = localStorage.getItem('lang') || 'en';
updateLanguage(currentLang);

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'no' : 'en';
  updateLanguage(currentLang);
  localStorage.setItem('lang', currentLang);
});

function updateLanguage(lang) {
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update toggle button text
  langText.textContent = lang === 'en' ? 'NO' : 'EN';
}
