import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

import styles from "./Button2Styles.module.scss";

const cx = classNames.bind(styles);

function Button2({ text }) {
  return (
    <div className={cx("header-item")}>
      {text} &nbsp;
      <FontAwesomeIcon className={cx("header-icon")} icon={faSortDown} />
    </div>
  );
}

export default Button2;
