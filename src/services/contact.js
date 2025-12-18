
import storage from './safeStorage';

const STORAGE_KEY = 'offerve_messages';

export const contactService = {
    send: async (formData) => {
        // Spam Check (Honeypot)
        if (formData.confirm_email) {
            console.warn("Spam detected (honeypot filled)");
            return { success: false, error: "Spam detected" };
        }

        try {
            // Mock Network Delay
            await new Promise(resolve => setTimeout(resolve, 800));

            // Log to console (Simulation)
            console.log("SENDING CONTACT MESSAGE:", formData);

            // Optional: Save to local storage for debugging/admin viewing
            const existing = JSON.parse(storage.local.getItem(STORAGE_KEY) || '[]');
            const newMessage = {
                id: Date.now().toString(),
                ...formData,
                submittedAt: new Date().toISOString()
            };
            // Don't save the honeypot field
            delete newMessage.confirm_email;

            existing.unshift(newMessage);
            storage.local.setItem(STORAGE_KEY, JSON.stringify(existing));

            return { success: true };
        } catch (error) {
            console.error("Contact submission failed:", error);
            return { success: false, error: "Network error, please try again." };
        }
    }
};
