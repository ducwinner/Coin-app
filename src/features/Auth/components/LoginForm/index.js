import { useForm } from "react-hook-form";
import className from "classnames/bind";
import { useContext } from "react";

import { usersData } from "../../../../dataSource/userData";
import styles from "./LoginStyles.module.scss";
import { ThemeContext } from "../../../../ThemeProvider";

const cx = className.bind(styles);

function LoginForm({ toggleAuthen }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const context = useContext(ThemeContext);
  const onSubmitLogin = (data) => {
    const dataLogin = JSON.parse(JSON.stringify(data));
    const usersMatch = usersData.filter(
      (users) =>
        users.email === dataLogin?.email &&
        users.password === dataLogin?.password
    );
    if (usersMatch.length === 1) {
      localStorage.setItem("stateLogin", "true");
      const { password, ...dataUser } = usersMatch[0];
      console.log(dataUser);
      context.handleClose();
      context.handleLogin(dataUser);
    }
  };
  return (
    <form className={cx("form")} onSubmit={handleSubmit(onSubmitLogin)}>
      <h1>Login</h1>
      <label htmlFor="email">Email ( duclogin@gmail.com ) </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Your Email"
        {...register("email", {
          required: true,
          pattern:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
      />
      <label htmlFor="password">Password ( 88888888 )</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        {...register("password", {
          required: true,
          minLength: 6,
        })}
      />
      {Object.keys(errors).length !== 0 && (
        <ul className="error-container">
          {errors.name?.type === "required" && <li>Name is required</li>}
          {errors.password?.type === "required" && (
            <li>Password is required</li>
          )}
          {errors.password?.type === "minLength" && (
            <li>Password must be 6 characters long</li>
          )}
          {errors.email?.type === "required" && <li>Email is required</li>}
          {errors.email?.type === "pattern" && <li> Invalid Email Addess</li>}
        </ul>
      )}

      <button type="submit">Submit</button>
      <div className={cx("btn-title")}>
        Chưa có tài khoản? &nbsp;{" "}
        <span onClick={() => toggleAuthen(2)}>Đăng ký</span>
      </div>
    </form>
  );
}

export default LoginForm;
