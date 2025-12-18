/**
 * Safe Storage Utility
 * 
 * Provides a wrapper around localStorage and sessionStorage to prevent application crashes
 * when storage is disabled (e.g., bits, private mode) or full.
 */

const createSafeStorage = (storageType) => {
    const getStorage = () => {
        try {
            return window[storageType];
        } catch (e) {
            return null;
        }
    };

    const isAvailable = () => {
        const storage = getStorage();
        if (!storage) return false;
        try {
            const testKey = '__storage_test__';
            storage.setItem(testKey, testKey);
            storage.removeItem(testKey);
            return true;
        } catch (e) {
            return false;
        }
    };

    const available = isAvailable();
    const storage = getStorage();

    // In-memory fallback if storage is unavailable
    const memoryStorage = new Map();

    return {
        getItem: (key) => {
            if (available) {
                try {
                    return storage.getItem(key);
                } catch (e) {
                    console.warn(`Error reading from ${storageType}:`, e);
                }
            }
            return memoryStorage.get(key) || null;
        },

        setItem: (key, value) => {
            if (available) {
                try {
                    storage.setItem(key, value);
                } catch (e) {
                    console.warn(`Error writing to ${storageType}:`, e);
                }
            }
            memoryStorage.set(key, value);
        },

        removeItem: (key) => {
            if (available) {
                try {
                    storage.removeItem(key);
                } catch (e) {
                    console.warn(`Error removing from ${storageType}:`, e);
                }
            }
            memoryStorage.delete(key);
        },

        clear: () => {
            if (available) {
                try {
                    storage.clear();
                } catch (e) {
                    console.warn(`Error clearing ${storageType}:`, e);
                }
            }
            memoryStorage.clear();
        }
    };
};

export const safeLocalStorage = createSafeStorage('localStorage');
export const safeSessionStorage = createSafeStorage('sessionStorage');

export default {
    local: safeLocalStorage,
    session: safeSessionStorage
};
