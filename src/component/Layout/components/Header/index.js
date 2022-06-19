import {
  // faArrowRightFromBracket,
  // faExclamation,
  faIdCardAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useState } from "react";

import Login from "../../../../features/Auth/components/Login";
import styles from "./Header.module.scss";
// import Tippy from "@tippyjs/react/headless";

const cx = classNames.bind(styles);

function Header() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner-1")}>
        <div className={cx("item-name")}>
          Coins: &nbsp;
          <span>1342</span>
        </div>

        <div className={cx("item-name")}>
          Exchanges: &nbsp;
          <span>623</span>
        </div>

        <div className={cx("item-name")}>
          Market cap: &nbsp;
          <span>1.226.906.803.860 US $</span>
        </div>
        <div className={cx("item-name")}>
          24H vol: &nbsp;
          <span>533.543.541.442 USD</span>
        </div>
        <div className={cx("item-name")}>
          Dominance: &nbsp;
          <span>BTC 43%</span>
        </div>
        <div className={cx("item-name")}>
          GAS: &nbsp;
          <span>11GWEI</span>
        </div>
      </div>
      <div className={cx("inner-2")}>
        <Link to="/" className={cx("logo")}>
          <img
            src="https://i.ex-cdn.com/nhadautu.vn/files/ctv2/2018/04/11/bitcoin-1516.jpg"
            alt="logo"
          />
        </Link>
        <div className={cx("header-link-1")}>
          <NavLink to="/" className={cx("link-item")}>
            Cryptocurrencies
          </NavLink>
          <NavLink to="/" className={cx("link-item")}>
            NFT
          </NavLink>
          <NavLink to="/new" className={cx("link-item")}>
            News
          </NavLink>
          <NavLink to="/coin-detail/bitcoin" className={cx("link-item")}>
            Detail
          </NavLink>
          <NavLink to="/coin-detail/bitcoin" className={cx("link-item")}>
            Learn &amp; Earn
          </NavLink>
        </div>
        <div className={cx("header-link-2")}>
          <Link to="/fortfolio" className={cx("fortfolio")}>
            <FontAwesomeIcon icon={faIdCardAlt} color="#fcd535" /> &nbsp;
            Portfolio
          </Link>
          <div className={cx("login")} onClick={handleClickOpen}>
            Sign In
          </div>
          {/* <Tippy
            interactive
            render={(attrs) => (
              <div className={cx("user-notify")} tabIndex="-1" {...attrs}>
                <div>
                  Price Alert &nbsp; <FontAwesomeIcon icon={faExclamation} />{" "}
                </div>
                <div>Infomation</div>
                <div>
                  Log out &nbsp;{" "}
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />{" "}
                </div>
              </div>
            )}
          >
            <div className={cx("user-avata")}>
              <img
                src="https://image.vtc.vn/upload/2021/12/26/bitcoin-06480965.jpg"
                alt="avata"
              />
            </div>
          </Tippy> */}
        </div>
      </div>

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogContent sx={{ backgroundColor: "#272727" }}>
          <Login />
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#272727" }}>
          <Button
            sx={{
              fontSize: "1.8rem",
              fontWeight: "600",
              "&:hover": {
                backgroundColor: "#82a0bf",
              },
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </header>
  );
}

export default Header;
