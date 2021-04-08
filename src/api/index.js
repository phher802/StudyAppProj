import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export const insertSubject = payload => api.post('/subject', payload);
export const getAllSubjects = () => api.get('/subjects');
export const updateSubjectById = (id, payload) => api.put('/subject/${id}', payload);
export const deleteSubjectById = id => api.delete('/subject/${id}');
export const getSubjectByID = id => api.get('/subject/${id}');

const apis = {
    insertSubject,
    getAllSubjects,
    updateSubjectById,
    deleteSubjectById,
    getSubjectByID,
}

export default api;