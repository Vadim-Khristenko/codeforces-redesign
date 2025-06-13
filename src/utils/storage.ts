import { ExtensionSettings, CacheData } from '../types';

// Значения настроек по умолчанию
export const DEFAULT_SETTINGS: ExtensionSettings = {
  darkMode: false,
  modernUI: true,
  customFonts: true,
  enhancedEditor: true,
};

/**
 * Сохраняет настройки в chrome.storage
 */
export const saveSettings = async (settings: Partial<ExtensionSettings>): Promise<void> => {
  return new Promise((resolve) => {
    chrome.storage.sync.set({ settings }, () => {
      resolve();
    });
  });
};

/**
 * Получает настройки из chrome.storage
 */
export const getSettings = async (): Promise<ExtensionSettings> => {
  return new Promise((resolve) => {
    chrome.storage.sync.get(['settings'], (result) => {
      resolve({
        ...DEFAULT_SETTINGS,
        ...(result.settings || {}),
      });
    });
  });
};

/**
 * Сохраняет данные в кэш с временем жизни
 */
export const cacheData = async (key: string, data: any, expiryMinutes: number = 60): Promise<void> => {
  const cacheItem: CacheData = {
    timestamp: Date.now(),
    data,
    expiry: expiryMinutes * 60 * 1000,
  };

  return new Promise((resolve) => {
    chrome.storage.local.set({ [key]: cacheItem }, () => {
      resolve();
    });
  });
};

/**
 * Получает данные из кэша, если они актуальны
 */
export const getCachedData = async <T>(key: string): Promise<T | null> => {
  return new Promise((resolve) => {
    chrome.storage.local.get([key], (result) => {
      const cacheItem: CacheData = result[key];

      if (!cacheItem) {
        resolve(null);
        return;
      }

      const now = Date.now();
      const isExpired = now - cacheItem.timestamp > cacheItem.expiry;

      if (isExpired) {
        // Удаляем устаревшие данные
        chrome.storage.local.remove([key]);
        resolve(null);
      } else {
        resolve(cacheItem.data as T);
      }
    });
  });
};
