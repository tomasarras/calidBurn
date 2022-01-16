import React, { useContext } from "react";
import SignForm from "../../components/SignForm";
import UserContext from "../../contexts/UserContext";
import * as userService from "../../services/UserService";

const SignUp = () => {
  const { logIn } = useContext(UserContext);

  const signUp = async (user) => {
    const token = await userService.signUp(user);
    logIn(token);
  };
  
  return <SignForm submitText="Registrarse" errorText="El email ya existe" onSubmit={signUp} />;
};

export default SignUp;
