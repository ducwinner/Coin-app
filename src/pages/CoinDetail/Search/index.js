import { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./SearchStyles.module.scss";

const cx = classNames.bind(styles);

function Search({ symbol, price }) {
  const [total, setTotal] = useState(0);

  const hanldeChange = (e) => {
    setTotal(e.target.value);
  };

  const handleOnChange = () => {};

  const resultPrice = total * price;
  return (
    <>
      <div className={cx("convert-price")}>
        <div className={cx("convert-container")}>
          <div className={cx("price")}>
            <span>{symbol?.toUpperCase()}</span>
            <input
              type="number"
              name="price1"
              value={total}
              onChange={(e) => hanldeChange(e)}
              placeholder="0"
            />
          </div>
          &nbsp; &nbsp;
          <FontAwesomeIcon icon={faArrowRightArrowLeft} />
          &nbsp; &nbsp;
          <div className={cx("price")}>
            <span>USD</span>
            <input
              value={resultPrice.toFixed(0) || 0}
              type="number"
              name="price2"
              placeholder="0"
              onChange={handleOnChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
