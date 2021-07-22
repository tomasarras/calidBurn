import React, { useContext } from "react";
import SignForm from "../../components/SignForm/SignForm";
import UserContext from "../../contexts/UserContext";
import * as userService from "../../services/UserService";

const Login = () => {
    const { logIn } = useContext(UserContext);

    const handleSubmit = async (user) => {
        const token = await userService.logIn(user);
        logIn(token);
    };

    return <SignForm submitText="Iniciar sesion" errorText="Usuario o contraseña invalido" onSubmit={handleSubmit} />
};

export default Login;