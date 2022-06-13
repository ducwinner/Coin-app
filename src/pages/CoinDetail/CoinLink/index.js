import classnames from "classnames/bind";
import styles from "./CoinLinkStyles.module.scss";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TagCoin from "../../../component/TagCoin";
import Tippy from "@tippyjs/react/headless"; // different import path!
import "tippy.js/dist/tippy.css"; // optional
import Button2 from "../../../component/Button2";

const cx = classnames.bind(styles);

function CoinLink() {
  return (
    <>
      <div className={cx("coin-link")}>
        <div className={cx("coin-link-header")}>
          <Tippy
            trigger="click"
            placement="bottom"
            interactive="true"
            render={(attrs) => (
              <div className={cx("link-header-box")} tabIndex="-1" {...attrs}>
                <a href="//srv.buysellads.com/ads/click/x/GTND42JMCESD62QJCE74YKQNCWBD62QLCWADTZ3JCYBIVKQNCKAD45QKFTSI5KJUCV7IK27MCYBIV23NC6S4YKQNCWBDP5Q7CYYDTZDK2HUCN?segment=placement:coingecko-button;">
                  <img
                    className={cx("box-img")}
                    src="https://cdn4.buysellads.net/uu/1/106556/1644163469-1624566694-eToro_80x80_Logo.png"
                    alt="img"
                  />
                  &nbsp; Join eToro
                  <p className={cx("text")}>
                    Join 20M users on eToro and buy Bitcoin, Ethereum, Cardano
                  </p>
                </a>

                <a href="//srv.buysellads.com/ads/click/x/GTND42JMCESD62QJCVS4YKQNCWBD623WCESDEZ3JCYBIVKQYCY7D4K7KFTSI5KJUCV7IK27MCYBIV23NC6S4YKQNCWBDP5Q7CYYDTZDK2HUCN?segment=placement:coingecko-button;">
                  <img
                    className={cx("box-img")}
                    src="https://cdn4.buysellads.net/uu/1/106556/1644265287-1602002344-2020-10-06_logo_80x80.png"
                    alt="img"
                  />
                  &nbsp; JCrypto.com App - Install Now!
                  <p className={cx("text")}>
                    Earn up to 12.5% p.a. on 40+ cryptos and stablecoins,
                    including BTC, ETH, USDC, and DOGE.
                  </p>
                </a>

                <a href="//srv.buysellads.com/ads/click/x/GTND42JMCESD62QJCVSLYKQNCWBD6K7ICAYI4Z3JCYBIVKQUCVBIP53KFTSI5KJUCV7IK27MCYBIV23NC6S4YKQNCWBDP5Q7CYYDTZDK2HUCN?segment=placement:coingecko-button;">
                  <img
                    className={cx("box-img")}
                    src="https://cdn4.buysellads.net/uu/1/106556/1644245059-1642078315-AAX.jpg"
                    alt="img"
                  />
                  &nbsp; AAX - Up to 60% APY on crypto savings
                  <p className={cx("text")}>
                    Sign up to AAX for the first time and get up to 160 USDT
                    rewards! Enjoy 60% APY for BTC, ETH, USDT, USDC when you
                    subscribe to our Fixed Savings
                  </p>
                </a>
              </div>
            )}
          >
            <div>
              <Button2 text="Buy / sell" />
            </div>
          </Tippy>
          <Tippy
            trigger="click"
            placement="bottom"
            interactive="true"
            render={(attrs) => (
              <div className={cx("link-header-box")} tabIndex="-1" {...attrs}>
                <a href="//srv.buysellads.com/ads/click/x/GTND42JMCESD62QJC6ALYKQNCWBD623WCYBDTZ3JCYBIVKQYCAYD6KQKFTSI5KJUCV7IK27MCYBIV23NC6S4YKQNCWBDP5Q7CYYDTZDK2HUCN?segment=placement:coingecko-button;">
                  <img
                    className={cx("box-img")}
                    src="https://cdn4.buysellads.net/uu/1/113175/1652099785-FTX.png"
                    alt="img"
                  />
                  &nbsp; FTX - By Traders, For Traders
                  <p className={cx("text")}>
                    Buy and sell cryptocurrencies with low fees and up to 20x
                    leverage.
                  </p>
                </a>

                <a href="//srv.buysellads.com/ads/click/x/GTND42JMCESD62QJCT74YKQNCWBD623WCYBD4Z3JCYBIVKQYCAYD6KJKFTSI5KJUCV7IK27MCYBIV23NC6S4YKQNCWBDP5Q7CYYDTZDK2HUCN?segment=placement:coingecko-button;">
                  <img
                    className={cx("box-img")}
                    src="https://cdn4.buysellads.net/uu/1/113175/1652100238-KuCoin.png"
                    alt="img"
                  />
                  &nbsp; KuCoin
                  <p className={cx("text")}>
                    Buy and sell cryptocurrencies from one of the top exchanges
                    in the world.
                  </p>
                </a>
              </div>
            )}
          >
            <div>
              <Button2 text="Long / short" />
            </div>
          </Tippy>

          <Tippy
            trigger="click"
            placement="bottom"
            interactive="true"
            render={(attrs) => (
              <div className={cx("link-header-box")} tabIndex="-1" {...attrs}>
                <a href="//srv.buysellads.com/ads/click/x/GTND42JMCESD62QJC6BLYKQNCWBD6K7ICEBD5Z3JCYBIVKQUC6SDT5QKFTSI5KJUCV7IK27MCYBIV23NC6S4YKQNCWBDP5Q7CYYDTZDK2HUCN?segment=placement:coingecko-button;">
                  <img
                    className={cx("box-img")}
                    src="https://cdn4.buysellads.net/uu/1/113175/1649935217-Nexo_logo.jpg"
                    alt="img"
                  />
                  &nbsp; Nexo.io - Earn up to 16% APR
                  <p className={cx("text")}>
                    Make your idle digital assets work for you with Nexo. Start
                    earning up to 16% APR, paid out daily. Top-tier insurance.
                  </p>
                </a>

                <a href="//srv.buysellads.com/ads/click/x/GTND42JMCESD62QJCT74YKQNCWBD623WCYBD4Z3JCYBIVKQYCAYD6KJKFTSI5KJUCV7IK27MCYBIV23NC6S4YKQNCWBDP5Q7CYYDTZDK2HUCN?segment=placement:coingecko-button;">
                  <img
                    className={cx("box-img")}
                    src="https://cdn4.buysellads.net/uu/1/113175/1652100238-KuCoin.png"
                    alt="img"
                  />
                  &nbsp; KuCoin
                  <p className={cx("text")}>
                    Buy and sell cryptocurrencies from one of the top exchanges
                    in the world.
                  </p>
                </a>
              </div>
            )}
          >
            <div>
              <Button2 text="Ern / loan" />
            </div>
          </Tippy>
        </div>

        <div className={cx("coin-link-container")}>
          <div className={cx("link-item")}>
            <div className={cx("link-title")}>Webside</div>
            <TagCoin input={"bitcoin.org"} />
            <TagCoin input={"Whitepapper"} />
          </div>

          <div className={cx("link-item")}>
            <div className={cx("link-title")}>Webside</div>
            <TagCoin input={"bitcoin.org"} />
            <TagCoin input={"Whitepapper"} />
          </div>

          <div className={cx("link-item")}>
            <div className={cx("link-title")}>Explorers</div>
            <TagCoin input={"blockChain"} />
          </div>

          <div className={cx("link-item")}>
            <div className={cx("link-title")}>Wallets</div>
            <TagCoin input={"Ledger"} />
            <TagCoin input={"Trust Wallet"} />
            <TagCoin input={"Electrum"} />
          </div>

          <div className={cx("link-item")}>
            <div className={cx("link-title")}>Community</div>
            <TagCoin input={"Reddit"} />
            <TagCoin input={"Facebook"} />
            <TagCoin input={"BitcoinTalk.org"} />
          </div>

          <div className={cx("link-item")}>
            <div className={cx("link-title")}>Search on</div>
            <TagCoin input={"Twitter"} />
          </div>

          <div className={cx("link-item")}>
            <div className={cx("link-title")}>Source Code</div>
            <TagCoin input={"GitHub"} />
          </div>

          <div className={cx("link-item")}>
            <div className={cx("link-title")}>API id</div>
            <TagCoin input={"BITCOIN"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CoinLink;
