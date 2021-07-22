import API from "./api";

export const signUp = async (user) => {
    const { token } = await API.post(`/users/signUp`, user);
    return token;
}

export const logIn = async (user) => {
    const { token } = await API.post(`/users/logIn`, user);
    return token;
};