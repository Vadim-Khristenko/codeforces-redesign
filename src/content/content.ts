// Контентный скрипт для внедрения на страницы Codeforces
// Выполняется на каждой странице, соответствующей паттерну из manifest.json

console.log('Codeforces Redesign: Контентный скрипт загружен');

// Функция для применения стилей
function applyStyles() {
  // Здесь будет логика применения стилей
  console.log('Применение стилей Codeforces Redesign');
}

// Функция для модификации DOM
function modifyDOM() {
  // Здесь будет логика изменения DOM страницы
  console.log('Модификация DOM страницы Codeforces');
}

// Инициализация расширения
function init() {
  applyStyles();
  modifyDOM();

  // Отправляем сообщение в background script
  chrome.runtime.sendMessage({ action: 'contentScriptInitialized', url: window.location.href });
}

// Запускаем инициализацию после полной загрузки DOM
document.addEventListener('DOMContentLoaded', init);

// Для случаев, когда DOM уже загружен к моменту выполнения скрипта
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  init();
}
