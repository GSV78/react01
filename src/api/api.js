import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "c077ef70-327e-4dad-ac31-5052d1d3b23e"
    }

});

export const userAPI = {
    getUsers: (pagesSize = 10, currentPage = 1) => {
        return (
            instance
                .get(`users?count=${pagesSize}&page=${currentPage}`)
                .then(responce => {
                    return responce.data;
                })
        )
    },

    follow: (id) => {
        return (
            instance
                .post(`follow/${id}`)
                .then(responce => {
                    return responce.data;
                })
        )
    },

    unfollow: (id) => {
        return (
            instance
                .delete(`follow/${id}`)
                .then(responce => {
                    return responce.data;
                })
        )
    },

    getProfile: (id) => {
        return (
            instance
                .get(`profile/${id}`)
                .then(responce => {
                    return responce.data;
                })
        )
    }
}

export const authAPI = {
    authMe: () => {
        return (
            instance
                .get(`auth/me`)
                .then(responce => {
                    return responce.data;
                })
        )
    },
}
