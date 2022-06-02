import ProductsApi from "../../api/ProductsApi";
import styles from "./HomeStyles.module.scss";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import CoinItem from "./CoinItem";

const cx = classNames.bind(styles);
let isDung = true;

function Home() {
  const url_market_cap_desc = "order=market_cap_desc";
  const url_market_cap_asc = "order=market_cap_asc";
  const [search, setSearch] = useState("");
  const [coins, setCoin] = useState([]);
  const [urlFilter, setUrlFilter] = useState(url_market_cap_desc);
  const nameRef = useRef();
  const apt_list_coin =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&";
  useEffect(() => {
    const fetchCoins = async () => {
      const params = {
        page: 1,
        per_page: 20,
      };
      const listCoin = await ProductsApi.getAll(
        apt_list_coin + urlFilter,
        params
      );
      const filterlistCoin = listCoin.filter(
        (coin) => coin.current_price > 0 && coin.total_volume > 0
      );

      setCoin(filterlistCoin);
    };
    fetchCoins();
  });

  const handleOnchange = (e) => {
    setSearch(e);
  };

  const optionFilterCoin = coins.filter((coin) =>
    nameRef.current.value === "name"
      ? coin.name.toUpperCase().includes(search.toUpperCase())
      : coin.symbol.toUpperCase().includes(search.toUpperCase())
  );

  const hanldClick = () => {
    isDung = !isDung;
    isDung
      ? setUrlFilter(url_market_cap_desc)
      : setUrlFilter(url_market_cap_asc);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("search")}>
        <div className={cx("search-top")}>
          <div className={cx("search-text")}>Search currency</div>
          <form>
            <select ref={nameRef} className={cx("filter")}>
              <option value="name">Filter Name</option>
              <option value="symbol">Filter Symbol</option>
            </select>
            <input
              value={search}
              placeholder="Coin"
              onChange={(e) => handleOnchange(e.target.value)}
            />
          </form>
        </div>

        <table className={cx("list-coin")}>
          <thead>
            <tr className={cx("header")}>
              <th className={cx("row row1")}>#</th>
              <th className={cx("row row2")}>Crypto</th>
              <th className={cx("row row3")}>Symbol</th>
              <th onClick={hanldClick} className={cx("row")}>
                Price
              </th>
              <th className={cx("row row4")}>Market cap</th>
              <th className={cx("row row5")}>Volume</th>
              <th className={cx("row row6")}>Change 24h</th>
            </tr>
          </thead>
          <tbody>
            {optionFilterCoin.map((coin, index) => {
              return (
                <CoinItem
                  index={index}
                  key={coin.id}
                  name={coin.name}
                  price={coin.current_price}
                  symbol={coin.symbol}
                  marketcap={coin.market_cap}
                  image={coin.image}
                  volume={coin.total_volume}
                  priceChange={coin.price_change_24h}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
