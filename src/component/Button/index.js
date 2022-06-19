import classNames from "classnames/bind";

import styles from "./ButtonStyles.module.scss";

const cx = classNames.bind(styles);

function Button() {
  return <button className={cx("button")}>XEM THÊM</button>;
}

export default Button;
