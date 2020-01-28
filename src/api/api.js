import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '3eb442be-c6ec-48c8-96fc-69807a29300c'}
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`, )
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, )
            .then(response => response.data)
    },
    authorize() {
        return instance.get('auth/me')

    },
    getProfile (userId) {
        return instance.get(`profile/${userId}`)

    },
};