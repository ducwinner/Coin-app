import Coin from "./Coin";
import { useEffect, useState } from "react";
import ProductsApi from "../../api/ProductsApi";
import classnames from "classnames/bind";
import styles from "./CoinDetailStyles.module.scss";
import CoinLink from "./CoinLink";
import Search from "./Search";

const cx = classnames.bind(styles);

function CoinDetail() {
  const [coin, setCoin] = useState({});
  useEffect(() => {
    const fetchCoins = async () => {
      const params = {
        ids: "bitcoin",
      };
      const coins = await ProductsApi.get(params);
      setCoin(coins[0]);
    };
    fetchCoins();
  }, []);
  return (
    <div className={cx("container")}>
      <div className={cx("coin-info")}>
        <div className={cx("coin-price")}>
          <Coin
            rank={coin.market_cap_rank}
            img={coin.image}
            name={coin.id}
            price={coin.current_price}
            change24={coin.price_change_percentage_24h}
            symbol={coin.symbol}
            markCap={coin.market_cap}
            volum24={coin.total_volume}
            ath={coin.ath}
            CirculatingSupply={coin.circulating_supply}
            maxSupply={coin.max_supply}
            totalSupply={coin.total_supply}
          />
        </div>
        <CoinLink />
        <Search symbol={coin.symbol} price={coin.current_price} />
      </div>
    </div>
  );
}

export default CoinDetail;
