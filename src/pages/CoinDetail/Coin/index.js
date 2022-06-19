import { faBell, faShare, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames/bind";

import LineInput from "../../../component/LineInput";
import styles from "./CoinStyles.module.scss";

const cx = classnames.bind(styles);

function Coin({
  rank,
  img,
  name,
  price,
  change24,
  symbol,
  markCap,
  volum24,
  ath,
  CirculatingSupply,
  maxSupply,
  totalSupply,
}) {
  console.log(maxSupply);
  return (
    <div className={cx("container")}>
      <div className={cx("rank-coin")}>Rank#{rank}</div>
      <h2 className={cx("name-coin")}>
        <img src={img} alt="crypto"></img>
        &nbsp;
        {name?.toUpperCase()}
        &nbsp; {symbol?.toUpperCase()} &nbsp;
        <div className={cx(change24 > 0 ? "change-up" : "change-down")}>
          {change24?.toFixed(2)}%
        </div>
      </h2>
      <h2 className={cx("price-coin")}>{price?.toLocaleString()} US$</h2>
      <div className={cx("flow-coin")}>
        <FontAwesomeIcon className={cx("icon")} icon={faShare} />
        &nbsp;
        <FontAwesomeIcon className={cx("icon")} icon={faBell} />
        &nbsp;
        <FontAwesomeIcon className={cx("icon")} icon={faStar} />
        &nbsp;&nbsp;
        <span>1.083.005 người thích điều nay</span>
      </div>
      <div className={cx("table-info-coin")}>
        <div className={cx("table")}>
          <LineInput title={"Market Cap"} input={markCap?.toLocaleString()} />
          <LineInput
            title={"24 Hour Trading Vol"}
            input={volum24?.toLocaleString()}
          />
          <LineInput
            title={"Fully Diluted Valuation"}
            input={ath?.toLocaleString()}
          />
        </div>
        <div className={cx("table")}>
          <LineInput
            title={"Circulating Supply"}
            input={CirculatingSupply?.toLocaleString() || "?"}
          />
          <LineInput
            title={"Max Supply"}
            input={maxSupply?.toLocaleString() || "?"}
          />
          <LineInput
            title={"Total Supply"}
            input={totalSupply?.toLocaleString() || "?"}
          />
        </div>
      </div>
    </div>
  );
}

export default Coin;
