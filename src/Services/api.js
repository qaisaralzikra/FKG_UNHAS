import axios from 'axios';

const api = axios.create({
    // HAPUS tanda / di ujung kata api
    // baseURL: 'https://fkg-unhas.qaisaralzikrah.workers.dev',
    baseURL: 'https://dent.unhas.ac.id/api',
    // baseURL: 'http://localhost:8080/api',
    // baseURL: 'https://lazily-unveiling-lumber.ngrok-free.dev/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'ngrok-skip-browser-warning': '69420'
    },
    withCredentials: false
});

const apiService = {
    getDashboardData: async () => {
        try {
            // Gunakan string kosong atau "/" tanpa memicu double slash
            const response = await api.get('');
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
            const response = await api.get(`/berita/${slug}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getEvent: async () => {
        try {
            const response = await api.get(`/event`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getDataDosen: async () => {
        try {
            const response = await api.get(`/dosen`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getDataPendidik: async () => {
        try {
            const response = await api.get(`/pendidik`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getPimpinan: async () => {
        try {
            const response = await api.get(`/pimpinan`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getDepartemen: async () => {
        try {
            // URL akan bersih menjadi https://dent.unhas.ac.id/api/departement
            const response = await api.get('/departement');
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getDetailDepartemen: async (uniq) => {
        try {
            const response = await api.get(`/departemen/detail/${uniq}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getProdi: async () => {
        try {
            const response = await api.get(`/prodi`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getPpid: async (cat) => {
        try {
            const response = await api.get(`/webcontent/PPID?cat=${cat}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getAkreditasi: async () => {
        try {
            const response = await api.get(`/akreditasi`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getProfil: async () => {
        try {
            const response = await api.get(`/profil`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getWebcontent: async (content) => {
        try {
            const response = await api.get(`/webcontent/${content}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getSambutan: async () => {
        try {
            const response = await api.get(`/sambutan`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getKomite: async (title) => {
        try {
            const response = await api.get(`/komite-etik/${title}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getJadwal: async (year) => {
        try {
            const response = await api.get(`/schedule?year=${year}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
    getProtokol: async (year) => {
        try {
            const response = await api.get(`/protocol-approved?year=${year}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.message);
        }
    },
};

export default apiService;