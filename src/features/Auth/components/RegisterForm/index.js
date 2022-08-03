import { useForm } from "react-hook-form";
import className from "classnames/bind";
import { useRef, useState } from "react";
// import RegisterApi from "../../../../api/RegisterApi";
// import userApi from "../../../../api/RegisterApi";
import styles from "../LoginForm/LoginStyles.module.scss";

const cx = className.bind(styles);

function RegisterForm({ toggleAuthen }) {
  const [validate, setValidate] = useState([]);
  const passwordRef = useRef("");
  const passwordRef2 = useRef("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={cx("form")} onSubmit={handleSubmit(onSubmit)}>
      <h1>Register</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Your Name"
        {...register("name", { required: true })}
      />
      <label htmlFor="email">Email ( duclogin@gmail.com )</label>
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
      <label htmlFor="name">Password ( 88888888 )</label>
      <input
        ref={passwordRef}
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        {...register("password", {
          required: true,
          minLength: 6,
        })}
      />
      <label htmlFor="name">Password</label>
      <input
        ref={passwordRef2}
        type="password"
        name="password2"
        id="password2"
        placeholder="Retype  Password"
        {...register("password2", {
          required: true,
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
          {errors.password2?.type === "required" && (
            <li>Password is required</li>
          )}
          {errors.email?.type === "required" && <li>Email is required</li>}
          {errors.email?.type === "pattern" && <li> Invalid Email Addess</li>}
          {validate[0] !== validate[2] && <li>Password dose not match</li>}
        </ul>
      )}

      <button
        type="submit"
        onClick={() => {
          const multipleValues = getValues(["password2", "password"]);
          setValidate(multipleValues);
        }}
      >
        Submit
      </button>
      <div className={cx("btn-title")}>
        Đã có tài khoản? &nbsp;{" "}
        <span onClick={() => toggleAuthen(1)}>Đăng Nhập</span>
      </div>
    </form>
  );
}

export default RegisterForm;
