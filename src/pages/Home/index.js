import ProductsApi from "../../api/ProductsApi";
import styles from "./HomeStyles.module.scss";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import CoinItem from "./CoinItem";
import { LoadingCoins } from "../../component/loading";
import Button from "../../component/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong, faUpLong } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
let isDung = true;

function Home() {
  const [loadingCoin, setLoadingCoin] = useState(false);
  const url_market_cap_desc = "order=market_cap_desc";
  const url_market_cap_asc = "order=market_cap_asc";
  const [search, setSearch] = useState("");
  const [coins, setCoin] = useState([]);
  const [perPage, setPerPage] = useState(20);
  const [urlFilter, setUrlFilter] = useState(url_market_cap_desc);
  const nameRef = useRef();
  const apt_list_coin =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&";
  const handleLoadingIn = () => {
    setTimeout(() => {
      document.getElementById("loading").style.display = "none";
    }, 1000);
    document.getElementById("loading").style.animation =
      "loadingOut 1s ease-in-out forwards";
  };

  useEffect(() => {
    setTimeout(() => {
      const fetchCoins = async () => {
        console.log(perPage);
        const params = {
          page: 1,
          per_page: perPage,
        };
        const listCoin = await ProductsApi.getAll(
          apt_list_coin + urlFilter,
          params
        );
        const filterlistCoin = listCoin.filter((coin) => coin.total_volume > 0);

        setCoin(filterlistCoin);
        setLoadingCoin(false);
        handleLoadingIn();
      };
      fetchCoins();
    }, 1000);
  }, [urlFilter, perPage]);

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

  const handleLoadCoin = async () => {
    setLoadingCoin(true);
    setPerPage((prev) => prev + 20);
  };

  return (
    <div className={cx("container")}>
      <img
        className={cx("header-img-left")}
        src="https://public.bnbstatic.com/20191112/91535829-e4e2-42b3-96d2-263240f94884"
        alt="img"
      />

      <img
        className={cx("header-img-right")}
        src="https://public.bnbstatic.com/image/cms/blog/20211019/04026d70-9886-492d-9828-52fbbfd5ea4a.png"
        alt="img"
      />
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
              <th className={cx("row", "row1")}>#</th>
              <th className={cx("row", "row2")}>Crypto</th>
              <th className={cx("row", "row3")}>Symbol</th>
              <th className={cx("row")}>Price</th>
              <th onClick={hanldClick} className={cx("row", "row4")}>
                Market cap &nbsp;
                {isDung ? (
                  <FontAwesomeIcon icon={faDownLong} />
                ) : (
                  <FontAwesomeIcon icon={faUpLong} />
                )}
              </th>
              <th className={cx("row", "row5")}>Volume</th>
              <th className={cx("row", "row6")}>Change 24h</th>
            </tr>
          </thead>
          <tbody>
            {optionFilterCoin.map((coin, index) => {
              return (
                <CoinItem
                  key={index}
                  index={index}
                  id={coin.id}
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
      {loadingCoin ? (
        <LoadingCoins />
      ) : (
        <div onClick={() => handleLoadCoin()}>
          <Button />
        </div>
      )}
    </div>
  );
}

export default Home;
