import styles from "./ButtonStyles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Button() {
  return <button className={cx("button")}>XEM THÊM</button>;
}

export default Button;
