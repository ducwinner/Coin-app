import classNames from "classnames/bind";
import styles from "./ListCoinFl.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function ListCoinFortfolio() {
  return (
    <tbody>
      <tr className={cx("container")}>
        <td className={cx("index")}>
          12
          <FontAwesomeIcon icon={faStar} color="#fc6" />
        </td>
        <td className={cx("crypto-name")}>
          <img src="/" alt="img" />
          <Link to={{ pathname: "/detail" }} className={cx("link-name-crypto")}>
            Bitcoin
          </Link>
        </td>
        <td className={cx("symbol")}>BTC</td>
        <td className={cx("price")}>30.000</td>
        <td className={cx("1h")}>5%</td>
        <td className={cx("24h")}>10%</td>
        <td className={cx("7day")}>20%</td>
        <td className={cx("market-cap")}>300000000</td>
        <td className={cx("hold")}>
          <div>75$ (100%)</div>
          <div>100btc</div>
        </td>
        <td className={cx("PNL")}>-5%</td>
      </tr>
    </tbody>
  );
}

export default ListCoinFortfolio;
