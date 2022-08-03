import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./ToastMessageStyles.module.scss";

const cx = classNames.bind(styles);

function ToastMessage({ icon, colorBorder, text }) {
  return (
    <div
      className={cx("container-toast-message")}
      style={{ border: `1px solid ${colorBorder}` }}
    >
      <div className={cx("inner")}>
        <FontAwesomeIcon icon={icon} className={cx("toast-icon")} />
        <div className={cx("toast-title")}>{text} </div>
      </div>
    </div>
  );
}

export default ToastMessage;
