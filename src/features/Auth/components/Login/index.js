import { useState } from "react";
import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";

function Login() {
  const [authen, setAuthen] = useState(1);

  const toggleAuthen = (children) => {
    setAuthen(children);
  };

  const handleFormSubmit = (values) => {};
  return authen === 1 ? (
    <LoginForm toggleAuthen={toggleAuthen} onSubmit={handleFormSubmit} />
  ) : (
    <RegisterForm toggleAuthen={toggleAuthen} onSubmit={handleFormSubmit} />
  );
}

export default Login;
