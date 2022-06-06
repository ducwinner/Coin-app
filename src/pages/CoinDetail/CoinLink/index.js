import classnames from "classnames/bind";
import styles from "./CoinLinkStyles.module.scss";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TagCoin from "../../../component/TagCoin";

const cx = classnames.bind(styles);

function CoinLink() {
  return (
    <>
      <div className={cx("coin-link")}>
        <div className={cx("coin-link-header")}>
          <div className={cx("header-item")}>
            Buy / sell &nbsp;
            <FontAwesomeIcon className={cx("header-icon")} icon={faSortDown} />
          </div>
          <div className={cx("header-item")}>
            Long / short &nbsp;
            <FontAwesomeIcon className={cx("header-icon")} icon={faSortDown} />
          </div>
          <div className={cx("header-item")}>
            Ern / loan &nbsp;
            <FontAwesomeIcon className={cx("header-icon")} icon={faSortDown} />
          </div>
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
