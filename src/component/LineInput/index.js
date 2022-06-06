import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./LineInputStyles.module.scss";

const cx = classNames.bind(styles);

function LineInput({ title, input }) {
  return (
    <div className={cx("container")}>
      <h5>
        {title} &nbsp;&nbsp;
        <FontAwesomeIcon icon={faQuestion} />
      </h5>
      <h4>${input?.toLocaleString()}</h4>
    </div>
  );
}

export default LineInput;
