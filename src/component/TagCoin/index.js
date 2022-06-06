import classNames from "classnames/bind";
import styles from "./TagCoinStyles.module.scss";

const cx = classNames.bind(styles);

function TagCoin({ input }) {
  return <div className={cx("container")}>{input}</div>;
}

export default TagCoin;
