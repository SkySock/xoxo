import api from "./"
const authService = {
    logIn: (username, password) => api
        .post("/signIn", {username, password})
        .then((res) => {
            return res.data
        }),
    signUp: (data) => api
        .post("/signUp", data)
        .then((res) => {
            return res.data
        }),
}

export default authService;