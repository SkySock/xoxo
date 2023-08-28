import api from "./"
const usersService = {
    getList: (limit, offset) => api
        .get(`/users?limit=${limit}&offset=${offset}`)
        .then((res) => {
            return res.data
        }),
}

export default usersService;