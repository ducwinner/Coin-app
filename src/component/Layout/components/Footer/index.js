import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import styles from "./FooterStyles.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("container")}>
      <div className={cx("header-footer")}>
        <div className={cx("inner")}>
          <FontAwesomeIcon icon={faTriangleExclamation} />
          <a href="/">IMPORTANT DISCLAIMER: &nbsp;</a>
          <span>
            All content provided herein our website, hyperlinked sites,
            associated applications, forums, blogs, social media accounts and
            other platforms (“Site”) is for your general information only,
            procured from third party sources. We make no warranties of any kind
            in relation to our content, including but not limited to accuracy
            and updatedness. No part of the content that we provide constitutes
            financial advice, legal advice or any other form of advice meant for
            your specific reliance for any purpose. Any use or reliance on our
            content is solely at your own risk and discretion. You should
            conduct your own research, review, analyse and verify our content
            before relying on them. Trading is a highly risky activity that can
            lead to major losses, please therefore consult your financial
            advisor before making any decision. No content on our Site is meant
            to be a solicitation or offer.
          </span>
        </div>
      </div>

      <div className={cx("btn-footer")}>
        <div className={cx("footer-left")}>
          <div className={cx("footer-left-top")}>
            <img
              src="https://static.coingecko.com/s/coingecko-logo-white-99d39c22910707ffddb7aa7090753ca2089eb1813440286da14927a723b2d2d6.png"
              alt="logo"
            />
            <p>
              CoinGecko provides a fundamental analysis of the crypto market. In
              addition to tracking price, volume and market capitalisation,
              CoinGecko tracks community growth, open-source code development,
              major events and on-chain metrics.
            </p>
          </div>
          <div className={cx("footer-left-bottom")}>
            <a href="/">Help center</a>
            <a href="/"> Bug Bounty </a>
            <a href="/">Disclaimer</a>
            <a href="/">Terms of Service</a>
            <a href="/">Ad Policy</a>
          </div>
        </div>
        <div className={cx("footer-mid")}>
          <div className={cx("footer-mid-item")}>
            <div className={cx("item")}>Explore</div>
            <div className={cx("item")}>Bitcoin Price</div>
            <div className={cx("item")}>Ethereum Price</div>
            <div className={cx("item")}>DeFi Coins</div>
            <div className={cx("item")}>Metaverse Coins</div>
            <div className={cx("item")}>Gaming Coins</div>
          </div>
          <div className={cx("footer-mid-item")}>
            <div className={cx("item")}>Resources</div>
            <div className={cx("item")}>Perpetuals</div>
            <div className={cx("item")}>Crypto News</div>
            <div className={cx("item")}>Bitcoin Treasury</div>
            <div className={cx("item")}>Donations</div>
          </div>
          <div className={cx("footer-mid-item")}>
            <div className={cx("item")}>About CoinGecko</div>
            <div className={cx("item")}>About Us</div>
            <div className={cx("item")}>Company Blog</div>
            <div className={cx("item")}>Branding Guide</div>
            <div className={cx("item")}>FAQ</div>
          </div>
          <div className={cx("footer-mid-item")}>
            <div className={cx("item")}>Community</div>
            <div className={cx("item")}>Twitter</div>
            <div className={cx("item")}>Telegram Chat</div>
            <div className={cx("item")}>Instagram</div>
            <div className={cx("item")}>Discord</div>
            <div className={cx("item")}>Facebook</div>
          </div>
        </div>
        <div className={cx("footer-right")}>
          <div className={cx("header-rigt")}>Download our app now</div>
          <div className={cx("socials")}>
            <a href="/">
              <img
                src="https://static.coingecko.com/s/coingecko_logos/google_play_store-836027fba5bce52aa7f436d7edf8fadf2707c7607842f994e3af58748ef141a0.svg"
                alt="logo"
              />
            </a>
            <a href="/">
              <img
                src="https://static.coingecko.com/s/coingecko_logos/apple_app_store-2b96ff447647976493b4622a5af700da687ffb28b64e3bd8c9c1bbd7ac20d028.svg"
                alt="logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
