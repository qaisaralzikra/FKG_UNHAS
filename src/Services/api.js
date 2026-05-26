import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api', // <-- Pastikan ada /api di ujungnya
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

const apiService = {
    getDashboardData: async () => {
        try {
            const response = await api.get('/');
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getDaftarBerita: async (page = 1, perPage = 7, search = "") => {
        try {
            const response = await api.get('/berita', {
                params: {
                    page: page,
                    per_page: perPage,
                    search: search
                }
            });
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getDetailBerita: async (slug) => {
        try {
            // Gunakan backtick (``) dan ${slug} untuk memasukkan ID secara dinamis ke URL
            const response = await api.get(`/berita/${slug}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getEvent: async () => {
        try {
            // Gunakan backtick (``) dan ${slug} untuk memasukkan ID secara dinamis ke URL
            const response = await api.get(`/event`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getDataDosen: async () => {
        try {
            // Gunakan backtick (``) dan ${slug} untuk memasukkan ID secara dinamis ke URL
            const response = await api.get(`/dosen`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getDataPendidik: async () => {
        try {
            // Gunakan backtick (``) dan ${slug} untuk memasukkan ID secara dinamis ke URL
            const response = await api.get(`/pendidik`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getPimpinan: async () => {
        try {
            // Gunakan backtick (``) dan ${slug} untuk memasukkan ID secara dinamis ke URL
            const response = await api.get(`/pimpinan`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getDepartemen: async () => {
        try {
            // Gunakan backtick (``) dan ${slug} untuk memasukkan ID secara dinamis ke URL
            const response = await api.get(`/departement`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getDetailDepartemen: async (uniq) => {
        try {
            // Gunakan backtick (``) dan ${slug} untuk memasukkan ID secara dinamis ke URL
            const response = await api.get(`/departemen/detail/${uniq}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getProdi: async () => {
        try {
            // Gunakan backtick (``) dan ${slug} untuk memasukkan ID secara dinamis ke URL
            const response = await api.get(`/prodi`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
};

export default apiService;