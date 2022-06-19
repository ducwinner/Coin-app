import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./CoinStyles.module.scss";

const cx = classNames.bind(styles);

function CoinItem({
  index,
  id,
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) {
  return (
    <tr className={cx("container")}>
      <td className={cx("index")}>
        {index}&nbsp;
        <FontAwesomeIcon color="#fc6" icon={faStar} />
      </td>
      <td className={cx("crypto-name")}>
        <img src={image} alt="crypto" />
        &nbsp;
        <Link
          className={cx("link-name-crypto")}
          to={{ pathname: "/coin-detail/" + id, state: { id } }}
        >
          {name}
        </Link>
      </td>
      <td className={cx("symbol")}>
        <Link
          className={cx("link-name-crypto")}
          to={{ pathname: "/coin-detail/" + id, state: { id } }}
        >
          {symbol.toUpperCase()}
        </Link>
      </td>
      <td className={cx("price")}>{price}&nbsp;US$</td>
      <td className={cx("marketcap")}>
        {marketcap.toLocaleString()}&nbsp; US$
      </td>
      <td className={cx("volume")}>{volume.toLocaleString()} &nbsp; US$</td>
      <td
        className={cx(priceChange < 0 ? "pricechangeRed" : "pricechangeGreen")}
      >
        {priceChange === null ? 0 : priceChange.toFixed(2)} &nbsp; US$
      </td>
    </tr>
  );
}

export default CoinItem;
