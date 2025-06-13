// Типы для расширения Codeforces Redesign

// Настройки расширения
export interface ExtensionSettings {
  darkMode: boolean;
  modernUI: boolean;
  customFonts: boolean;
  enhancedEditor: boolean;
}

// Информация о текущем пользователе
export interface UserInfo {
  username: string | null;
  rating: number | null;
  rank: string | null;
  isLoggedIn: boolean;
}

// Структура для хранения данных кэша
export interface CacheData {
  timestamp: number;
  data: any;
  expiry: number;
}

// События для обмена между компонентами расширения
export type MessageActions =
  | { action: 'getSettings' }
  | { action: 'updateSettings', settings: Partial<ExtensionSettings> }
  | { action: 'resetSettings' }
  | { action: 'contentScriptInitialized', url: string };
