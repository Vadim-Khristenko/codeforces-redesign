// Фоновый скрипт для расширения Chrome
// Выполняется в фоновом режиме

chrome.runtime.onInstalled.addListener(() => {
  console.log('Codeforces Redesign Extension установлено');
});

// Слушаем сообщения от контентных скриптов
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Получено сообщение от контентного скрипта:', request);

  // Здесь будет логика обработки сообщений

  sendResponse({ status: 'ok' });
});
