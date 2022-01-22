import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "c077ef70-327e-4dad-ac31-5052d1d3b23e"
    }

});

export const userAPI = {
    requestUsers: (pagesSize = 10, currentPage = 1) => {
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
    authLogin: (email, password, rememberMe = false) => {
        return (
            instance
                .post(`auth/login`, { email, password, rememberMe })
                .then(responce => {
                    return responce.data;
                })
        )
    },
    authLogout: (email, password, rememberMe = false) => {
        return (
            instance
                .delete(`auth/login`)
                .then(responce => {
                    return responce.data;
                })
        )
    },
}

export const profileAPI = {
    getProfileData: (id) => {
        return (
            instance
                .get(`profile/${id}`)
                .then(responce => {
                    return responce.data;
                })
        )
    },
    getStatus: (id) => {
        return (
            instance
                .get(`profile/status/${id}`)
                .then(responce => {
                    return responce.data
                })
        )
    },
    updateStatus: (status) => {
        return (
            instance
                .put(`profile/status`, { status: status })
                .then(responce => {
                    return responce.data
                })
        )
    },
    savePhoto: (file) => {
        const formData = new FormData()
        formData.append('image', file)
        return (
            instance
                .put(`profile/photo`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(responce => {
                    return responce.data
                })
        )
    }
}
