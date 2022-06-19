import Coin from "./Coin";
import { useEffect, useState } from "react";
import ProductsApi from "../../api/ProductsApi";
import classnames from "classnames/bind";
import styles from "./CoinDetailStyles.module.scss";
import CoinLink from "./CoinLink";
import Search from "./Search";
import PriceChange from "./PriceChange";

const cx = classnames.bind(styles);

function CoinDetail() {
  const full_url = window.location.href;
  const key = full_url.split("/")[full_url.split("/").length - 1];
  const [coin, setCoin] = useState({});
  useEffect(() => {
    const fetchCoins = async () => {
      const params = {
        ids: key,
      };
      const coins = await ProductsApi.get(params);
      setCoin(coins[0]);
    };
    fetchCoins();
  }, [key]);
  return (
    <div className={cx("container")}>
      <div className={cx("coin-info")}>
        <div className={cx("coin-price")}>
          <Coin
            key={coin.id}
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
        <PriceChange
          change1h={coin.price_change_percentage_1h_in_currency}
          change24h={coin.price_change_percentage_24h_in_currency}
          change7d={coin.price_change_percentage_7d_in_currency}
          change14d={coin.price_change_percentage_14d_in_currency}
          change30d={coin.price_change_percentage_30d_in_currency}
          change1y={coin.price_change_percentage_1y_in_currency}
          hight24h={coin.high_24h}
          low24h={coin.low_24h}
          ath={coin.ath}
          athChange={coin.ath_change_percentage}
          markCap={coin.market_cap}
          volum24={coin.total_volume}
        />
      </div>
    </div>
  );
}

export default CoinDetail;
