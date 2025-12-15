
// Mock Email Service (Replace with real EmailJS if needed)
const emailService = {
    send: async (templateParams) => {
        console.log("SENDING EMAIL VIA 'EMAILJS'...", templateParams);
        // Simulate network delay
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("EMAIL SENT SUCCESSFULLY!");
                resolve({ status: 200, text: 'OK' });
            }, 800);
        });
    }
};

const STORAGE_KEY = 'offerve_submissions';

export const submissionService = {
    save: async (formData) => {
        try {
            // 1. Get existing
            const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

            // 2. Add new submission
            const newSubmission = {
                id: Date.now().toString(), // Unique ID
                ...formData,
                status: 'Pending', // Pending | Approved | Rejected
                submittedAt: new Date().toISOString()
            };

            existing.unshift(newSubmission);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));

            // 3. Send Email Notification
            await emailService.send({
                to_email: 'support@offerve.com',
                from_name: formData.name || 'Anonymous User',
                message: `
                    New ${formData.type} Submission:
                    Store: ${formData.storeName}
                    Code: ${formData.code || 'N/A'}
                    Details: ${formData.description}
                    Link: ${formData.link || 'N/A'}
                `
            });

            return { success: true };
        } catch (error) {
            console.error("Submission failed:", error);
            return { success: false, error: error.message };
        }
    },

    getAll: () => {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    },

    updateStatus: (id, newStatus) => {
        const submissions = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        const updated = submissions.map(s =>
            s.id === id ? { ...s, status: newStatus } : s
        );
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        return updated;
    },

    delete: (id) => {
        const submissions = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        const filtered = submissions.filter(s => s.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
        return filtered;
    }
};
