import axios from 'axios';

const API_URL = 'http://10.24.12.218:3000/user';

const userService = {
    register: async (userData: { name: string; email: string; mobile: string; password: string }) => {
        try {
            const response = await axios.post(API_URL, userData);
            return response.data;
        } catch (error: any) {
            console.error("Error registering user:", error.response?.data || error.message);
            throw error;
        }
    },

    login: async (email: string, password: string) => {
        try {
            const response = await axios.post(API_URL, { email, password });
            return response.data;
        } catch (error) {
            console.error("Error logging in:", error);
            throw error;
        }
    },
    getAllUsers: async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    }
};

export default userService;
