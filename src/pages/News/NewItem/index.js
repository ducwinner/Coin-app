import classNames from "classnames/bind";
import styles from "./NewItemStyles.module.scss";

const cx = classNames.bind(styles);

function NewItem({ img, date, source, text, title, subject, url }) {
  return (
    <div className={cx("container")}>
      <img src={img} alt="img" />
      <div className={cx("subject")}>{subject}</div>
      <div className={cx("title")}>
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
      </div>
      <div className={cx("text")}>
        <a href={url} target="_blank" rel="noreferrer">
          {text}
        </a>
      </div>
      <div className={cx("web")}>
        <h4>{source}</h4>
        <h5>{date}</h5>
      </div>
    </div>
  );
}

export default NewItem;
