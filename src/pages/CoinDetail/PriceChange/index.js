import classNames from "classnames/bind";

import styles from "./PriceChangeStyles.module.scss";

const cx = classNames.bind(styles);

function PriceChange({
  change1h,
  change24h,
  change7d,
  change14d,
  change30d,
  change1y,
  hight24h,
  low24h,
  ath,
  athChange,
  volum24,
  markCap,
}) {
  var PercentV = 0;
  // console.log(volum24, markCap);
  if (volum24 && markCap) {
    PercentV = volum24 / markCap;
  }

  return (
    <div className={cx("cointaner")}>
      <table className={cx("price-change-percent")}>
        <thead>
          <tr>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>14d</th>
            <th>30d</th>
            <th>1y</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={cx(change1h < 0 ? "change-red" : "change-green")}>
              {change1h?.toFixed(2)} %
            </td>
            <td className={cx(change24h < 0 ? "change-red" : "change-green")}>
              {change24h?.toFixed(2)} %
            </td>
            <td className={cx(change7d < 0 ? "change-red" : "change-green")}>
              {change7d?.toFixed(2)} %
            </td>
            <td className={cx(change14d < 0 ? "change-red" : "change-green")}>
              {change14d?.toFixed(2)} %
            </td>
            <td className={cx(change30d < 0 ? "change-red" : "change-green")}>
              {change30d?.toFixed(2)} %
            </td>
            <td className={cx(change1y < 0 ? "change-red" : "change-green")}>
              {change1y?.toFixed(2)} %
            </td>
          </tr>
        </tbody>
      </table>
      <ul className={cx("price-info-list")}>
        <li className={cx("header-statiscs")}>BTC Price Statistics</li>
        <li className={cx("price-info-item")}>
          <div className={cx("title")}>Low 24h / Hight 24h</div>
          <div className={cx("price")}>
            ${low24h?.toLocaleString()} / ${hight24h?.toLocaleString()}
          </div>
        </li>
        <li className={cx("price-info-item")}>
          <div className={cx("title")}>All time Hight</div>
          <div className={cx("price")}>${ath}</div>
        </li>
        <li className={cx("price-info-item")}>
          <div className={cx("title")}>Hight Change Percent</div>
          <div className={cx("price")}>{athChange}</div>
        </li>
        <li className={cx("price-info-item")}>
          <div className={cx("title")}>Volume / MKC</div>
          <div className={cx("price")}>{PercentV}</div>
        </li>
      </ul>
    </div>
  );
}

export default PriceChange;
