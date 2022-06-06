import { useForm } from "react-hook-form";
import styles from "./LoginStyles.module.scss";
import className from "classnames/bind";
import data from "../../../../dataSource/data.json";

const cx = className.bind(styles);

function LoginForm({ toggleAuthen }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitLogin = (data) => {
    console.log(data);
  };

  return (
    <form className={cx("form")} onSubmit={handleSubmit(onSubmitLogin)}>
      <h1>Login</h1>
      <label htmlFor="name">Password</label>
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
      <label htmlFor="email">Email</label>
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
