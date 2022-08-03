import {
  faArrowRightFromBracket,
  faBars,
  faExclamation,
  faIdCardAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Tippy from "@tippyjs/react/headless";
import { useContext, useState } from "react";

import Login from "../../../../features/Auth/components/Login";
import styles from "./Header.module.scss";
import { ThemeContext } from "../../../../ThemeProvider";

const cx = classNames.bind(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Header() {
  const context = useContext(ThemeContext);

  let dataUser = {};
  if (localStorage.getItem("dataUser") !== null) {
    dataUser = JSON.parse(localStorage.getItem("dataUser"));
  }

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
        <div className={cx("menu-tablet")} onClick={handleClickOpen}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <Link to="/" className={cx("logo")}>
          <img
            src="https://i.ex-cdn.com/nhadautu.vn/files/ctv2/2018/04/11/bitcoin-1516.jpg"
            alt="logo"
          />
        </Link>

        <Dialog
          className={cx("ducduc")}
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>
            <Link to="/" className={cx("logo")}>
              <img
                src="https://i.ex-cdn.com/nhadautu.vn/files/ctv2/2018/04/11/bitcoin-1516.jpg"
                alt="logo"
              />
            </Link>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose}>Agree</Button>
          </DialogActions>
        </Dialog>

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
            <span>Portfolio</span>
          </Link>
          <div
            className={cx("login")}
            style={context.login ? { display: "none" } : { display: "block" }}
            onClick={context.handleClickOpen}
          >
            <FontAwesomeIcon icon={faUser} />
            <span>Sign In</span>
          </div>
          <Tippy
            interactive
            render={(attrs) => (
              <div className={cx("user-notify")} tabIndex="-1" {...attrs}>
                <div>
                  Price Alert &nbsp; <FontAwesomeIcon icon={faExclamation} />{" "}
                </div>
                <div>Infomation</div>
                <div onClick={context.handleLogout}>
                  Log out &nbsp;{" "}
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />{" "}
                </div>
              </div>
            )}
          >
            <div
              className={cx("user-avata")}
              style={context.login ? { display: "flex" } : { display: "none" }}
            >
              <img src={dataUser.avatar_URl} alt="avata" />
              &nbsp;
              <span>{dataUser.name}</span>
            </div>
          </Tippy>
        </div>
      </div>

      <Dialog
        disableEscapeKeyDown
        open={context.openLogin}
        onClose={context.handleClose}
      >
        <DialogContent sx={{ backgroundColor: "#272727" }}>
          <Login closeLogin={context.handleClose} />
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
            onClick={context.handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </header>
  );
}

export default Header;
